import UserPosts from '@/components/posts';
import { Stories } from '@/components/stories'
import Suggests from '@/components/suggests';
import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex justify-center gap-10 ">
      <div
        className="flex flex-col justify-center items-center"
        style={{ flexBasis: "66.66%" }}
      >
        <Stories />
        <div className="w-full mt-6 border-t border-gray-200">
          <UserPosts />
        </div>
      </div>
      <div
        className="hidden lg:flex items-start  mt-14 pt-10"
        style={{ flexBasis: "33.33%" }}
      >
        <div className="flex items-start pr-4">
          <Suggests/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard