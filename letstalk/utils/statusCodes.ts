export interface StatusCode {
  code: string;
  message: string;
  type: 'success' | 'error';
}

const statusCodesArray: StatusCode[] = [
  // Error Codes
  { code: 'USER_001', message: 'User not found.', type: 'error' },
  { code: 'USER_002', message: 'Invalid credentials provided.', type: 'error' },
  { code: 'USER_003', message: 'Email already exists.', type: 'error' },
  { code: 'USER_004', message: 'Username already exists.', type: 'error' },
  { code: 'USER_005', message: 'Unauthorized access.', type: 'error' },
  { code: 'POST_001', message: 'Post not found.', type: 'error' },
  { code: 'POST_002', message: 'You are not authorized to perform this action on the post.', type: 'error' },
  { code: 'COMMENT_001', message: 'Comment not found.', type: 'error' },
  { code: 'COMMENT_002', message: 'You are not authorized to perform this action on the comment.', type: 'error' },
  { code: 'STORY_001', message: 'Story not found.', type: 'error' },
  { code: 'STORY_002', message: 'You are not authorized to perform this action on the story.', type: 'error' },
  { code: 'FOLLOW_001', message: 'Follow relationship not found.', type: 'error' },
  { code: 'FOLLOW_002', message: 'You are already following this user.', type: 'error' },
  { code: 'FOLLOW_003', message: 'You are not following this user.', type: 'error' },
  { code: 'BLOCK_001', message: 'Block relationship not found.', type: 'error' },
  { code: 'BLOCK_002', message: 'You have already blocked this user.', type: 'error' },
  { code: 'BLOCK_003', message: 'You have not blocked this user.', type: 'error' },
  { code: 'CHAT_001', message: 'Chat not found.', type: 'error' },
  { code: 'CHAT_002', message: 'You are not authorized to access this chat.', type: 'error' },
  { code: 'CHAT_003', message: 'Message not found.', type: 'error' },
  { code: 'GENERAL_001', message: 'Internal server error. Please try again later.', type: 'error' },
  { code: 'GENERAL_002', message: 'Bad request. Please check your input and try again.', type: 'error' },
  { code: 'GENERAL_003', message: 'The requested resource was not found.', type: 'error' },
  { code: 'GENERAL_004', message: 'You are not authorized to perform this action.', type: 'error' },
  { code: 'GENERAL_005', message: 'You do not have permission to perform this action.', type: 'error' },
  // Success Codes
  { code: 'USER_101', message: 'User registered successfully.', type: 'success' },
  { code: 'USER_102', message: 'User logged in successfully.', type: 'success' },
  { code: 'POST_101', message: 'Post created successfully.', type: 'success' },
  { code: 'COMMENT_101', message: 'Comment added successfully.', type: 'success' },
  { code: 'STORY_101', message: 'Story created successfully.', type: 'success' },
  { code: 'FOLLOW_101', message: 'Followed successfully.', type: 'success' },
  { code: 'FOLLOW_102', message: 'Unfollowed successfully.', type: 'success' },
  { code: 'BLOCK_101', message: 'Blocked successfully.', type: 'success' },
  { code: 'BLOCK_102', message: 'Unblocked successfully.', type: 'success' },
  { code: 'GENERAL_101', message: 'Action completed successfully.', type: 'success' }
];

export default statusCodesArray;
