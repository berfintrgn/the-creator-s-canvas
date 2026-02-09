import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Video } from "./types";

type VideoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  video: Video | null;
};

const VideoModal = ({ open, onOpenChange, video }: VideoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[92vw] max-w-5xl border border-[rgba(0,0,0,0.08)] bg-[#FAFAF8] p-4 sm:p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        <DialogTitle className="sr-only">{video?.title ?? "Video player"}</DialogTitle>
        <div className="relative w-full overflow-hidden rounded-md bg-black/90">
          <div className="aspect-video w-full">
            {video && (
              <iframe
                title={video.title}
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
