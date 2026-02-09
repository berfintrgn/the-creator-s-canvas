import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import { useYouTubePlaylist } from "./useYouTubePlaylist";
import type { Video } from "./types";

type VideoGalleryProps = {
  playlistId: string;
};

const VideoGallery = ({ playlistId }: VideoGalleryProps) => {
  const { videos, loading, error } = useYouTubePlaylist(playlistId);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const featuredSet = useMemo(() => new Set([0, 6]), []);
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <div className="space-y-8">
      {error && (
        <div className="border border-[rgba(0,0,0,0.08)] bg-[#FAFAF8] p-6 text-sm text-foreground shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          <p className="font-body text-sm leading-[1.8]">The video gallery is resting at the moment.</p>
          <p className="font-body text-xs text-muted-foreground leading-[1.8]">
            Please refresh or return shortly.
          </p>
        </div>
      )}

      {loading && (
        <div
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]"
          role="status"
          aria-busy="true"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className={`flex h-full flex-col justify-between border border-[rgba(0,0,0,0.08)] bg-[#FAFAF8] p-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] ${
                featuredSet.has(index) ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="h-40 w-full bg-gradient-to-br from-black/[0.03] via-black/[0.02] to-black/[0.05]" />
              <div className="space-y-2">
                <div className="h-3 w-3/4 bg-black/[0.06]" />
                <div className="h-3 w-full bg-black/[0.04]" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && (
        <motion.div
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              className={featuredSet.has(index) ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <VideoCard
                video={video}
                onSelect={setActiveVideo}
                featured={featuredSet.has(index)}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      <VideoModal
        open={Boolean(activeVideo)}
        onOpenChange={(open) => {
          if (!open) setActiveVideo(null);
        }}
        video={activeVideo}
      />
    </div>
  );
};

export default VideoGallery;
