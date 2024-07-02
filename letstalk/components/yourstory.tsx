"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import StoryDialog from "./storydialog";

interface StoryDialogProps {
  open: boolean;
  onClose: () => void;
}

const YourStory: React.FC<StoryDialogProps> = ({ open, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const [openStory, setOpenStory] = useState(false);

  const handleOpenStory = () => {
    setOpenStory(!openStory);
  };

  const handleCloseStory = () => {
    setOpenStory(false);
  };

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
      {!openStory && (
        <Dialog open={open}>
          <DialogContent
            ref={dialogRef}
            className="border-none outline-none bg-transparent shadow-none flex justify-center items-center"
          >
            <div className="p-6 w-full max-w-sm rounded-lg text-center">
              <div className="mb-4 text-lg font-bold text-gray-800">
                Your Story Options
              </div>
              <div className="mb-2">
                <button
                  className="w-full py-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-200"
                  onClick={handleOpenStory}
                >
                  View Story
                </button>
              </div>
              <div>
                <button className="w-full py-2 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-200">
                  Upload Story
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
      {openStory && <StoryDialog open={openStory} onClose={handleCloseStory} />}
    </div>
  );
};

export default YourStory;
