import { Heart } from "lucide-react";
import React, { useState } from "react";

interface Comment {
  id: number;
  username: string;
  avatar: string;
  content: string;
  timestamp?: string;
  likes?: number;
}

interface CommentsProps {
  comments: Comment[];
}

const UserComments: React.FC<CommentsProps> = ({ comments }) => {
  const [displayedComments, setDisplayedComments] = useState<Comment[]>(
    comments.slice(0, 5)
  );
  const [hasMoreComments, setHasMoreComments] = useState(comments.length > 5);

  const handleLoadMoreComments = () => {
    const newDisplayedComments = displayedComments.concat(
      comments.slice(displayedComments.length, displayedComments.length + 5)
    );
    setDisplayedComments(newDisplayedComments);
    setHasMoreComments(newDisplayedComments.length < comments.length);
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Comments</h3>
      {displayedComments.map((comment) => (
        <div key={comment.id} className="flex items-center mt-2">
          <img
            src={comment.avatar}
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="flex-grow">
            <span className="font-semibold">{comment.username}</span>
            {comment.timestamp && (
              <span className="text-gray-500 text-sm ml-2">
                {comment.timestamp}
              </span>
            )}
            <p className="text-sm mt-1">{comment.content}</p>
          </div>
          <div className="flex items-center ml-auto">
            <Heart className="cursor-pointer"/>
          </div>
        </div>
      ))}
      {hasMoreComments && (
        <button
          className="text-xs text-center w-full py-2 text-gray-600 hover:text-blue-500"
          onClick={handleLoadMoreComments}
        >
          Load More Comments
        </button>
      )}
    </div>
  );
};

export default UserComments;
