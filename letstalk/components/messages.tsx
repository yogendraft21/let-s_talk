import React from "react";

const ChatMessages = () => {
  const chatMessages = [
    {
      id: 1,
      sender: "John Doe",
      message: "Hey there!",
      timestamp: "10:30 AM",
      sentByUser: true,
    },
    {
      id: 2,
      sender: "Jane Smith",
      message: "How are you?",
      timestamp: "11:45 AM",
      sentByUser: false,
    },
    {
      id: 3,
      sender: "John Doe",
      message: "I'm good. What about you?",
      timestamp: "12:00 PM",
      sentByUser: true,
    },
    {
      id: 4,
      sender: "Jane Smith",
      message: "I'm fine too. Just busy with work.",
      timestamp: "12:15 PM",
      sentByUser: false,
    },
    {
      id: 5,
      sender: "John Doe",
      message: "That's understandable. Work can be hectic.",
      timestamp: "12:30 PM",
      sentByUser: true,
    },
    {
      id: 6,
      sender: "Jane Smith",
      message: "Yes, it is. But it keeps me occupied.",
      timestamp: "12:45 PM",
      sentByUser: false,
    },
    {
      id: 7,
      sender: "John Doe",
      message: "True. So, any plans for the weekend?",
      timestamp: "1:00 PM",
      sentByUser: true,
    },
    {
      id: 8,
      sender: "Jane Smith",
      message: "Not yet. How about you?",
      timestamp: "1:15 PM",
      sentByUser: false,
    },
    {
      id: 9,
      sender: "John Doe",
      message: "I'm thinking of going hiking. Would you like to join? What your plan for next monday",
      timestamp: "1:30 PM",
      sentByUser: true,
    },
    {
      id: 10,
      sender: "Jane Smith",
      message: "That sounds fun! Count me in. No i do not have plan for monday, let's go for a moviee?",
      timestamp: "1:45 PM",
      sentByUser: false,
      },
    
  ];

  return (
    <div className="overflow-y-auto p-4 custom-scrollbar">
      {chatMessages.map((message) => (
        <div
          key={message.id}
          className={`flex flex-col mb-4 ${
            message.sentByUser ? "items-end" : "items-start"
          }`}
        >
          <div
            className={`p-2 rounded-lg max-w-md ${
              message.sentByUser
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            <div className="text-sm">{message.message}</div>
          </div>
          <div className="text-xs text-gray-400 m-1">{message.timestamp}</div>
        </div>
      ))}
    </div>
  );

};

export default ChatMessages;
