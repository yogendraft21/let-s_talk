"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { open } from "fs/promises";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import StoryDialog from "./storydialog";
import YourStory from "./yourstory";

export function Stories() {

  const [openStory, setOpenStory] = useState(false);
  const [userStory, setUserStory] = useState(false);

  const handleOpenStory = () => {
    setOpenStory(!openStory);
  }

    const handleCloseStory = () => {
      setOpenStory(false);
    };
  
   const handleOpenUserStory = () => {
     setUserStory(!userStory);
   };

   const handleCloseUserStory = () => {
     setUserStory(false);
   };
  const stories = [
    { id: 1, src: "/poster.jpg", user: { id: 1, username: "user1" } },
    { id: 2, src: "/poster.jpg", user: { id: 2, username: "user2" } },
    { id: 3, src: "/poster.jpg", user: { id: 3, username: "user3" } },
    { id: 4, src: "/poster.jpg", user: { id: 4, username: "user4" } },
    { id: 5, src: "/poster.jpg", user: { id: 5, username: "user5" } },
    { id: 6, src: "/poster.jpg", user: { id: 6, username: "user1" } },
    { id: 7, src: "/poster.jpg", user: { id: 7, username: "user2" } },
    { id: 8, src: "/poster.jpg", user: { id: 8, username: "user3" } },
    { id: 9, src: "/poster.jpg", user: { id: 9, username: "user4" } },
    { id: 10, src: "/poster.jpg", user: { id: 10, username: "user5" } },
  ];

  return (
    <div className="flex items-center gap-10 md:gap-16 lg:gap-16">
      <div className="relative">
        <Card className="p-0 -mt-3 cursor-pointer" onClick={handleOpenUserStory}>
          <CardContent className="flex w-[60px] h-[60px] bg-gradient-to-r from-yellow-200 via-orange-500 to-red-500 border-0 relative">
            <img
              src="/poster.jpg"
              alt="Story"
              className="p-1 w-full h-full object-fit rounded-full"
            />
            {/* Plus icon */}
            <Plus className="absolute bottom-0 right-0 bg-black text-white rounded-full text-sm m-0 cursor-pointer h-5 w-5" />
            <p className="absolute mt-16 text-xs text-gray-500">Your Story</p>
          </CardContent>
        </Card>
      </div>

      <Carousel className="w-full max-w-[18rem] md:max-w-sm lg:max-w-sm">
        <CarouselContent className="-ml-1 relative">
          {stories.map((story) => (
            <CarouselItem
              key={story.id}
              className="pl-1 basis-1/4 lg:basis-1/6 md:basis-1/5 h-20 w-20 cursor-pointer"
              onClick={handleOpenStory}
            >
              <div className="p-1 cursor-pointer">
                <Card className="p-0">
                  <CardContent className="flex w-[60px] h-[60px] bg-gradient-to-r from-yellow-200 via-pink-500 to-purple-500 text-white border-0">
                    <img
                      src={story.src}
                      alt="Story"
                      className="p-1 w-full h-full object-fit rounded-full"
                    />
                    <p className="absolute ml-4 text-xs mt-16 text-gray-500">
                      {story.user.username}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex items-center justify-center" />
        <CarouselNext className="hidden sm:flex items-center justify-center" />
      </Carousel>

      {openStory && <StoryDialog open={openStory} onClose={handleCloseStory} />}
      {userStory && <YourStory open={userStory} onClose={handleCloseUserStory} />}
    </div>
  );
}
