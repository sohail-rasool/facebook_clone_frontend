import React, { useState } from 'react';

import { MdMoreVert } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { BsHandThumbsUpFill } from 'react-icons/bs';

import { Users } from '../../dummyData';

const Post = ({ post }) => {
  const boxShadow = {
    boxShadow: '0px 0px 16px -8px rgba(0,0,0,0.68)',
  };

  const userName = Users.filter((user) => user.id === post.id)[0].username;
  const userPic = Users.filter((user) => user.id === post.id)[0].profilePicture;

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post w-100 rounded-lg my-8' style={boxShadow}>
      <div className='postWrapper p-2.5'>
        <div className='postTop flex items-center justify-between'>
          <div className='postTopLeft flex items-center'>
            <img
              className='postProfileImg w-8 h-8 object-cover rounded-full'
              src={userPic}
              alt='postProfileImg'
            />
            <span className='text-base font-medium mx-2.5'>{userName}</span>
            <span className='postDate text-xs'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MdMoreVert className='text-2xl' />
          </div>
        </div>
        <div className='postCenter my-5'>
          <p className='postText'>{post.desc}</p>
          <img
            src={post.photo}
            alt='user'
            className='postImg mt-5 w-full object-contain'
            style={{ maxHeight: '500px' }}
          />
        </div>
        <div className='postBottom flex items-center justify-between'>
          <div className='postBottomLeft flex items-center'>
            <BsHandThumbsUpFill
              className='text-3xl cursor-pointer mr-1 text-blue-500'
              onClick={likeHandler}
            />
            <FcLike
              className='text-3xl cursor-pointer mr-1'
              onClick={likeHandler}
            />
            <span className='postLikeCoutner text-base'>
              {like} people liked it
            </span>
          </div>
          <div className='postBottomRight'>
            <p className='postCommentText cursor-pointer border-b-2 border-gray-400 border-dashed text-base'>
              {post.comment} Comments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
