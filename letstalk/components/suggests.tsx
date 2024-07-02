import React from "react";

const suggestsData = [
  {
    avatar: "/poster.jpg",
    username: "Yogendra Singh Verma",
    reason: "Suggested for you",
  },
  {
    avatar: "/poster.jpg",
    username: "John Doe",
    reason: "Follows you",
  },
  {
    avatar: "/poster.jpg",
    username: "Jane Doe",
    reason: "Popular in your area",
  },
  {
    avatar: "/poster.jpg",
    username: "Michael Smith",
    reason: "Suggested for you",
  },
  {
    avatar: "/poster.jpg",
    username: "Alice Brown",
    reason: "Followed by people you follow",
  },
];

const Suggests = () => {
  return (
    <div className="flex flex-col bg-white pr-6">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-sm text-gray-500 font-semibold">
          Suggested for you
        </h5>
        <p className="text-xs font-semibold">See All</p>
      </div>
      {suggestsData.map((suggest) => (
        <div key={suggest.username} className="flex items-center mt-2 mb-4">
          <img
            src={suggest.avatar}
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex justify-start flex-col">
            <span className="text-sm font-semibold">{suggest.username}</span>
            <span className="text-xs text-gray-400">{suggest.reason}</span>
          </div>
          <span className="text-sm text-blue-500 font-semibold ml-auto">
            Follow
          </span>
        </div>
      ))}

      <div className="w-full mt-5">
        <ul className="flex items-center flex-wrap gap-2 text-xs text-gray-400">
          <li>About </li>
          <li>Home</li>
          <li>API</li>
          <li>Jobs</li>
          <li>Privacy</li>
          <li>Language</li>
          <li>Location</li>
          <li>Press</li>
          <li>Help</li>
          <li>Terms</li>
        </ul>
        <div className="flex items-center flex-col mt-5 gap-1">
          <p className="text-xs font-semibold text-gray-400">
            All Right Reserved &copy; The Noob Programmer
          </p>
          <p className="text-xs text-gray-500">
            Design & Developed by Yogendra Singh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Suggests;
