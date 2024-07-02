import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useRef } from "react";

interface StoryDialogProps {
  open: boolean;
  onClose: () => void;
}

const StoryDialog: React.FC<StoryDialogProps> = ({ open, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <div>
      <Dialog open={open}>
        <DialogContent ref={dialogRef} className="border-none outline-none sm:mb-6">
          <div className="h-full flex justify-center items-center">
            <div className="p-2 w-full max-w-screen-md border-none rounded-lg">
              {/* Add rounded border using rounded-lg class */}
              <img
                src="https://images.pexels.com/photos/14638833/pexels-photo-14638833.jpeg"
                alt="Story"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
              </DialogContent>
              
      </Dialog>
    </div>
  );
};

export default StoryDialog;
