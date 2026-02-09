export type YouTubeThumbnail = {
  url: string;
  width?: number;
  height?: number;
};

export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: YouTubeThumbnail;
  publishedAt: string;
};

export type PlaylistItemsResponse = {
  nextPageToken?: string;
  items?: Array<{
    snippet?: {
      title?: string;
      description?: string;
      publishedAt?: string;
      thumbnails?: {
        maxres?: YouTubeThumbnail;
        standard?: YouTubeThumbnail;
        high?: YouTubeThumbnail;
        medium?: YouTubeThumbnail;
        default?: YouTubeThumbnail;
      };
      resourceId?: {
        videoId?: string;
      };
    };
  }>;
};
