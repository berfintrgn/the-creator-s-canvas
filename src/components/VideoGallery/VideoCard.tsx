import type { CSSProperties } from "react";
import type { Video } from "./types";

type VideoCardProps = {
  video: Video;
  onSelect: (video: Video) => void;
  className?: string;
  featured?: boolean;
};

const clampStyle: CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const VideoCard = ({ video, onSelect, className, featured = false }: VideoCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(video)}
      className={`group text-left w-full h-full flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] ${className ?? ""}`}
    >
      <div className="relative overflow-hidden border border-[rgba(0,0,0,0.08)] bg-[#FAFAF8] p-3 sm:p-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <img
          src={video.thumbnail.url}
          alt={video.title}
          className={`w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02] ${
            featured ? "aspect-[16/10]" : "aspect-video"
          }`}
          loading="lazy"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-display text-base font-semibold text-foreground">{video.title}</h3>
        <p className="font-body text-xs font-normal text-muted-foreground leading-[1.8]" style={clampStyle}>
          {video.description || " "}
        </p>
      </div>
    </button>
  );
};

export default VideoCard;
