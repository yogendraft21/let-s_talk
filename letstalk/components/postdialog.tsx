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

const PostDialog: React.FC<StoryDialogProps> = ({ open, onClose }) => {
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
        <DialogContent ref={dialogRef} className="border-none outline-none">
          <div className="fixed inset-0 flex justify-center items-center">
            <div className="max-w-screen-md rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7466990/pexels-photo-7466990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

export default PostDialog;
