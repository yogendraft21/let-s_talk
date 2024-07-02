"use client";
import { EllipsisVertical, Phone, Video } from "lucide-react";
import React, { useState } from "react";
import ChatMessages from "./messages";
import ChatInput from "./chatinput";

const ChatArea = () => {
  const user = {
    name: "John Doe",
    isActive: true,
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  const [messageInput, setMessageInput] = useState("");

  const handleMessageSend = () => {
    // Add logic to send message
    console.log("Message sent:", messageInput);
    // Clear the input field after sending the message
    setMessageInput("");
  };

  return (
    <div className="flex-grow bg-white shadow-md flex flex-col">
      <div className="flex items-center justify-between p-2 border-b border-gray-200">
        <div className="flex items-center">
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <div className="font-semibold">{user.name}</div>
            <div className="text-sm text-gray-500">
              {user.isActive ? (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  Active Now
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-700 rounded-full mr-1"></div>
                  Offline
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <Phone className="cursor-pointer text-gray-500 hover:text-blue-400" />
          <Video className="cursor-pointer text-gray-500 hover:text-blue-400" />
          <EllipsisVertical className="cursor-pointer text-gray-500 hover:text-blue-400" />
        </div>
      </div>
      <ChatMessages />
      <ChatInput/>
    </div>
  );
};

export default ChatArea;
