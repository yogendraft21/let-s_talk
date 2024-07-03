const statusCodes = {
  // Error Codes
  USER_NOT_FOUND: { code: 'USER_001', message: 'User not found.', type: 'error' },
  INVALID_CREDENTIALS: { code: 'USER_002', message: 'Invalid credentials provided.', type: 'error' },
  EMAIL_ALREADY_EXISTS: { code: 'USER_003', message: 'Email already exists.', type: 'error' },
  USERNAME_ALREADY_EXISTS: { code: 'USER_004', message: 'Username already exists.', type: 'error' },
  UNAUTHORIZED_USER: { code: 'USER_005', message: 'Unauthorized access.', type: 'error' },
  
  POST_NOT_FOUND: { code: 'POST_001', message: 'Post not found.', type: 'error' },
  UNAUTHORIZED_POST: { code: 'POST_002', message: 'You are not authorized to perform this action on the post.', type: 'error' },
  
  COMMENT_NOT_FOUND: { code: 'COMMENT_001', message: 'Comment not found.', type: 'error' },
  UNAUTHORIZED_COMMENT: { code: 'COMMENT_002', message: 'You are not authorized to perform this action on the comment.', type: 'error' },
  
  STORY_NOT_FOUND: { code: 'STORY_001', message: 'Story not found.', type: 'error' },
  UNAUTHORIZED_STORY: { code: 'STORY_002', message: 'You are not authorized to perform this action on the story.', type: 'error' },
  
  FOLLOW_NOT_FOUND: { code: 'FOLLOW_001', message: 'Follow relationship not found.', type: 'error' },
  ALREADY_FOLLOWING: { code: 'FOLLOW_002', message: 'You are already following this user.', type: 'error' },
  NOT_FOLLOWING: { code: 'FOLLOW_003', message: 'You are not following this user.', type: 'error' },
  
  BLOCK_NOT_FOUND: { code: 'BLOCK_001', message: 'Block relationship not found.', type: 'error' },
  ALREADY_BLOCKED: { code: 'BLOCK_002', message: 'You have already blocked this user.', type: 'error' },
  NOT_BLOCKED: { code: 'BLOCK_003', message: 'You have not blocked this user.', type: 'error' },
  
  CHAT_NOT_FOUND: { code: 'CHAT_001', message: 'Chat not found.', type: 'error' },
  UNAUTHORIZED_CHAT: { code: 'CHAT_002', message: 'You are not authorized to access this chat.', type: 'error' },
  MESSAGE_NOT_FOUND: { code: 'CHAT_003', message: 'Message not found.', type: 'error' },
  
  INTERNAL_SERVER_ERROR: { code: 'GENERAL_001', message: 'Internal server error. Please try again later.', type: 'error' },
  BAD_REQUEST: { code: 'GENERAL_002', message: 'Bad request. Please check your input and try again.', type: 'error' },
  NOT_FOUND: { code: 'GENERAL_003', message: 'The requested resource was not found.', type: 'error' },
  UNAUTHORIZED: { code: 'GENERAL_004', message: 'You are not authorized to perform this action.', type: 'error' },
  FORBIDDEN: { code: 'GENERAL_005', message: 'You do not have permission to perform this action.', type: 'error' },

  TOKEN_EXPIRED: { code: 'TOKEN_001', message: 'Token has expired.', type: 'error' },
  TOKEN_INVALID: { code: 'TOKEN_002', message: 'Token is invalid.', type: 'error' },
  TOKEN_NOT_PROVIDED: { code: 'TOKEN_003', message: 'No token provided.', type: 'error' },

  // Success Codes
  USER_REGISTERED: { code: 'USER_101', message: 'User registered successfully.', type: 'success' },
  USER_LOGGED_IN: { code: 'USER_102', message: 'User logged in successfully.', type: 'success' },

  POST_CREATED: { code: 'POST_101', message: 'Post created successfully.', type: 'success' },

  COMMENT_ADDED: { code: 'COMMENT_101', message: 'Comment added successfully.', type: 'success' },

  STORY_CREATED: { code: 'STORY_101', message: 'Story created successfully.', type: 'success' },

  FOLLOW_SUCCESS: { code: 'FOLLOW_101', message: 'Followed successfully.', type: 'success' },
  UNFOLLOW_SUCCESS: { code: 'FOLLOW_102', message: 'Unfollowed successfully.', type: 'success' },

  BLOCK_SUCCESS: { code: 'BLOCK_101', message: 'Blocked successfully.', type: 'success' },
  UNBLOCK_SUCCESS: { code: 'BLOCK_102', message: 'Unblocked successfully.', type: 'success' },

  ACTION_SUCCESS: { code: 'GENERAL_101', message: 'Action completed successfully.', type: 'success' }
};

module.exports = statusCodes;
