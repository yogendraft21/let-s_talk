import React from "react";

const ChatUserList = () => {
  // Dummy user list data
  const userList = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey there, how are you doing?",
      lastMessageTime: "10:30 AM",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "How are you?",
      lastMessageTime: "11:45 AM",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      lastMessage: "Hi!",
      lastMessageTime: "12:15 PM",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Emily Brown",
      lastMessage: "What's up?",
      lastMessageTime: "01:00 PM",
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Chris Wilson",
      lastMessage: "Long time no see!",
      lastMessageTime: "02:30 PM",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Jessica Lee",
      lastMessage: "How's it going?",
      lastMessageTime: "03:45 PM",
      profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      name: "David Taylor",
      lastMessage: "Nice weather today!",
      lastMessageTime: "04:20 PM",
      profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      name: "Sarah Anderson",
      lastMessage: "See you later!",
      lastMessageTime: "05:10 PM",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      name: "Matthew Garcia",
      lastMessage: "Good morning!",
      lastMessageTime: "06:00 AM",
      profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      name: "Laura Martinez",
      lastMessage: "Are you busy?",
      lastMessageTime: "07:30 AM",
      profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 11,
      name: "Daniel Brown",
      lastMessage: "Have a great day!",
      lastMessageTime: "08:45 AM",
      profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 12,
      name: "Olivia Hernandez",
      lastMessage: "Call me later!",
      lastMessageTime: "09:15 AM",
      profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 13,
      name: "Ethan Walker",
      lastMessage: "Let's catch up!",
      lastMessageTime: "10:00 AM",
      profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 14,
      name: "Ava Perez",
      lastMessage: "How was your day?",
      lastMessageTime: "11:20 AM",
      profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: 15,
      name: "James Evans",
      lastMessage: "See you tomorrow!",
      lastMessageTime: "12:30 PM",
      profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  ];


  return (
    <div className="flex flex-col h-full w-2/6 border-r-2">
      {/* Header for search */}
      <div className="p-2 border-b border-gray-200">
        <input
          type="text"
          placeholder="Search users"
          className="w-full p-[9px] border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* User list */}
      <div className="flex flex-col flex-1 overflow-y-auto custom-scrollbar">
        {userList.map((user) => (
          <div
            key={user.id}
            className="p-2 border-b flex items-center cursor-pointer transition duration-300 hover:bg-gray-100"
          >
            <img
              src={user.profilePic}
              alt={user.name}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="flex flex-col">
              <div className="font-bold">{user.name}</div>
              <div className="text-sm text-gray-500">
                {user.lastMessage.length > 25
                  ? user.lastMessage.substring(0, 25) + "..."
                  : user.lastMessage}
              </div>
            </div>
            <div className="ml-auto mr-1 text-xs text-gray-500">
              {user.lastMessageTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatUserList;
