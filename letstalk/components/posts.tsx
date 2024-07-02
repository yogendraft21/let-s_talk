"use client";
import { Bookmark, Heart, MessageSquare, Pencil, SendHorizontal, Share2 } from "lucide-react";
import React, { useState } from "react";
import UserComments from "./comments";
import PostDialog from "./postdialog";

interface Post {
  id: number;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
  postComments?: Comment[];
}

const UserPosts: React.FC = () => {
  const dummyComments = [
    {
      id: 1,
      username: "user1",
      avatar: "https://picsum.photos/id/200/200",
      content: "This is a great post!",
    },
    {
      id: 2,
      username: "user2",
      avatar: "https://picsum.photos/id/201/200",
      content: "I agree! Very interesting.",
    },
    {
      id: 3,
      username: "user3",
      avatar: "https://picsum.photos/id/202/200",
      content: "Me too! Looking forward to more content.",
    },
    {
      id: 4,
      username: "user1",
      avatar: "https://picsum.photos/id/200/200",
      content: "This is a great post!",
    },
    {
      id: 5,
      username: "user2",
      avatar: "https://picsum.photos/id/201/200",
      content: "I agree! Very interesting.",
    },
    {
      id: 6,
      username: "user3",
      avatar: "https://picsum.photos/id/202/200",
      content: "Me too! Looking forward to more content.",
    },
    {
      id: 7,
      username: "user1",
      avatar: "https://picsum.photos/id/200/200",
      content: "This is a great post!",
    },
    {
      id: 8,
      username: "user2",
      avatar: "https://picsum.photos/id/201/200",
      content: "I agree! Very interesting.",
    },
    {
      id: 9,
      username: "user3",
      avatar: "https://picsum.photos/id/202/200",
      content: "Me too! Looking forward to more content.",
    },
    {
      id: 10,
      username: "user1",
      avatar: "https://picsum.photos/id/200/200",
      content: "This is a great post!",
    },
    {
      id: 11,
      username: "user2",
      avatar: "https://picsum.photos/id/201/200",
      content: "I agree! Very interesting.",
    },
    {
      id: 12,
      username: "user3",
      avatar: "https://picsum.photos/id/202/200",
      content: "Me too! Looking forward to more content.",
    },
  ];
  const posts: Post[] = [
    {
      id: 1,
      username: "user1",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      image: "https://picsum.photos/600/400",
      likes: 123,
      comments: 25,
      shares: 10,
    },
    {
      id: 2,
      username: "user2",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      image: "https://picsum.photos/600/400",
      likes: 456,
      comments: 78,
      shares: 32,
    },
    {
      id: 3,
      username: "user3",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      image: "https://picsum.photos/600/400",
      likes: 789,
      comments: 45,
      shares: 20,
    },
    {
      id: 4,
      username: "user4",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      image: "https://picsum.photos/600/400",
      likes: 1011,
      comments: 90,
      shares: 15,
    },
    {
      id: 5,
      username: "user5",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      image: "https://picsum.photos/600/400",
      likes: 1213,
      comments: 123,
      shares: 50,
    },
  ];

  const UserPost: React.FC<Post> = ({
    username,
    avatar,
    image,
    likes,
    comments,
    shares,
  }) => {
      const [isLiked, setIsLiked] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [openPost, setOpenPost] = useState(false);

    const handleOpenPost = () => {
      console.log("hi")
      setOpenPost(!openPost);
    };

    const handleClosePost = () => {
      setOpenPost(false);
    };

    const handleLike = () => {
      setIsLiked(!isLiked);
    };
      
      const handleShowComments = () =>{
          setShowComments(!showComments);   
      }
    return (
      <>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md">
        {/* Post header */}
        <div className="flex items-center p-4">
          <img
            src={avatar}
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-semibold">{username}</span>
          <Pencil className="text-xs text-gray-500 ml-auto" />
        </div>
        {/* Post image */}
        <img src={image} alt="Post" className="w-full h-auto" onClick={handleOpenPost}/>
        {/* Post actions */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Heart
              className={
                isLiked ? "text-red-500 cursor-pointer " : "cursor-pointer"
              }
              onClick={handleLike}
            />
            <MessageSquare className="text-gray-600 cursor-pointer" />
            <Share2 className="text-gray-600 cursor-pointer" />
          </div>
          <Bookmark className="text-gray-600 cursor-pointer" />
        </div>
        {/* Post stats */}
        <div className="px-4 pb-4">
          <p className="font-semibold">{likes} likes</p>
          <p
            className="text-gray-600 cursor-pointer"
            onClick={handleShowComments}
          >
            View All {comments} comments
          </p>
          {showComments && <UserComments comments={dummyComments} />}
        </div>
        <div className="flex items-center border-t border-gray-200 px-4 py-2">
          <img
            src="https://picsum.photos/id/200/200"
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <input
            type="text"
            placeholder="Write a comment..."
            className="w-full focus:outline-none text-sm"
          />
          <SendHorizontal className="text-gray-500 cursor-pointer" />
        </div>
      </div>
      { openPost && <PostDialog open={openPost} onClose={handleClosePost} /> }
    </>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-2 p-1 mt-4 md:p-6 lg:p-8 md:m-6 lg:m-8">
      {posts.map((post) => (
        <UserPost
          key={post.id}
          id={post.id}
          username={post.username}
          avatar={post.avatar}
          image={post.image}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
        />
      ))}
    </div>
  );
};

export default UserPosts;
