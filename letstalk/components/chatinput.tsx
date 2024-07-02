import EmojiPicker from "emoji-picker-react";
import { SendHorizontal, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ChatInput = () => {
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleMessageSend = () => {
    // Add your logic to send the message
  };

  const handleEmojiClick = () => {
    setShowEmojiPicker((prevState) => !prevState);
  };

  const handleEmojiSelect = (emoji: any) => {
    setMessageInput((prevMessage) => prevMessage + emoji.emoji);
    setShowEmojiPicker((prevState) => !prevState);
  };

  return (
    <div className="p-4 border-t border-gray-200 flex items-center relative">
      <div className="relative flex-grow">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type a message..."
          className="w-full p-2 pr-10 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleEmojiClick}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-transparent border-none outline-none focus:outline-none"
        >
          <Smile className="w-6 h-6 text-gray-500 hover:text-blue-500" />
        </button>
        <SendHorizontal className="absolute right-2 cursor-pointer top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 hover:text-blue-500" />
        {showEmojiPicker && (
          <div className="absolute bottom-14 right-0 z-10">
            <EmojiPicker onEmojiClick={handleEmojiSelect} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
