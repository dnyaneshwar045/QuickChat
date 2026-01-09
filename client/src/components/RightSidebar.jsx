import React from 'react';
import assets, { imagesDummyData } from '../assets/assets';

const RightSidebar = ({ selectedUser }) => {
  return (
    selectedUser && (
      <div
        className={`bg-[#818582]/10 text-white w-full relative overflow-y-scroll flex flex-col ${
          selectedUser ? 'max-md:hidden' : ''
        }`}
      >
        {/* Top section - 35% of container height */}
        <div className="h-[35%] flex flex-col items-center justify-center gap-4 text-xs font-light">
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt="Profile"
            className="w-20 aspect-[1/1] rounded-full"
          />
          <h1 className="text-xl font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            {selectedUser.fullName}
          </h1>

          {/* Single-line bio */}
          <p className="truncate max-w-[200px] text-center">{selectedUser.bio}</p>
        </div>
        <hr className="border-[#ffffff50] w-[35%] mx-auto mb-4" />

        {/* Media Section */}
        <div className="px-5 text-xs flex-1">
          <p>Media</p>
          <div className="mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80">
            {imagesDummyData.map((url, index) => (
              <div key={index} onClick={() => window.open(url)} className="cursor-pointer rounded">
                <img src={url} alt="" className="h-full rounded-md" />
              </div>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 
          bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none
          text-sm font-light py-2 px-20 rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>
    )
  );
};

export default RightSidebar;
