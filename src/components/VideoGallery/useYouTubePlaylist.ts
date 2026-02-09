import { useEffect, useMemo, useState } from "react";
import type { PlaylistItemsResponse, Video, YouTubeThumbnail } from "./types";

const playlistCache = new Map<string, Video[]>();
const inflightCache = new Map<string, Promise<Video[]>>();

const pickBestThumbnail = (thumbs?: {
  maxres?: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  high?: YouTubeThumbnail;
  medium?: YouTubeThumbnail;
  default?: YouTubeThumbnail;
}): YouTubeThumbnail => {
  return (
    thumbs?.maxres ||
    thumbs?.standard ||
    thumbs?.high ||
    thumbs?.medium ||
    thumbs?.default || { url: "" }
  );
};

const fetchPlaylist = async (playlistId: string, apiKey: string): Promise<Video[]> => {
  const allVideos: Video[] = [];
  let pageToken: string | undefined;

  do {
    const params = new URLSearchParams({
      part: "snippet",
      maxResults: "50",
      playlistId,
      key: apiKey,
      fields:
        "nextPageToken,items(snippet(title,description,publishedAt,thumbnails,resourceId(videoId)))",
    });

    if (pageToken) params.set("pageToken", pageToken);

    const url = `https://www.googleapis.com/youtube/v3/playlistItems?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`YouTube API error (${response.status})`);
    }

    const data = (await response.json()) as PlaylistItemsResponse;
    const items = data.items ?? [];

    for (const item of items) {
      const snippet = item.snippet;
      const videoId = snippet?.resourceId?.videoId;
      if (!snippet || !videoId) continue;

      allVideos.push({
        id: videoId,
        title: snippet.title ?? "Untitled",
        description: snippet.description ?? "",
        thumbnail: pickBestThumbnail(snippet.thumbnails),
        publishedAt: snippet.publishedAt ?? "",
      });
    }

    pageToken = data.nextPageToken;
  } while (pageToken);

  return allVideos;
};

export const useYouTubePlaylist = (playlistId: string) => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY as string | undefined;
  const cacheKey = useMemo(() => `yt-playlist:${playlistId}`, [playlistId]);

  const [videos, setVideos] = useState<Video[]>(() => {
    if (playlistCache.has(cacheKey)) return playlistCache.get(cacheKey) ?? [];

    if (typeof window !== "undefined") {
      const stored = window.sessionStorage.getItem(cacheKey);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as Video[];
          playlistCache.set(cacheKey, parsed);
          return parsed;
        } catch {
          window.sessionStorage.removeItem(cacheKey);
        }
      }
    }

    return [];
  });

  const [loading, setLoading] = useState<boolean>(() => !playlistCache.has(cacheKey));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!apiKey) {
      setError("Missing YouTube API key.");
      setLoading(false);
      return;
    }

    const existing = playlistCache.get(cacheKey);
    if (existing && existing.length > 0) {
      setVideos(existing);
      setLoading(false);
      return;
    }

    const load = () => {
      if (inflightCache.has(cacheKey)) return inflightCache.get(cacheKey)!;

      const promise = fetchPlaylist(playlistId, apiKey)
        .then((result) => {
          playlistCache.set(cacheKey, result);
          if (typeof window !== "undefined") {
            window.sessionStorage.setItem(cacheKey, JSON.stringify(result));
          }
          return result;
        })
        .finally(() => {
          inflightCache.delete(cacheKey);
        });

      inflightCache.set(cacheKey, promise);
      return promise;
    };

    setLoading(true);
    setError(null);

    load()
      .then((result) => {
        if (cancelled) return;
        setVideos(result);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (cancelled) return;
        setError(err.message || "Failed to load playlist.");
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [apiKey, cacheKey, playlistId]);

  return { videos, loading, error };
};
