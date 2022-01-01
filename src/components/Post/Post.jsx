import { useState,useEffect } from 'react';
import axios from 'axios'
import {format} from 'timeago.js';

import { MdMoreVert } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { BsHandThumbsUpFill } from 'react-icons/bs';


const Post = ({ post }) => {

  const boxShadow = {
    boxShadow: '0px 0px 16px -8px rgba(0,0,0,0.68)',
  };

  const [user, setUser] = useState({})
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`users/${post.userId}`)
      const data = response.data
      setUser(data)
      console.log(data)
    }
    fetchUser()
  }, [])



  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

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
              src={user.profilePicture || `${publicFolder}person/noAvatar.png`}
              alt='postProfileImg'
            />
            <span className='text-base font-medium mx-2.5'>{user.username}</span>
            <span className='postDate text-xs'>{format(post.createdAt)}</span>
          </div>
          <div className='postTopRight'>
            <MdMoreVert className='text-2xl' />
          </div>
        </div>
        <div className='postCenter my-5'>
          <p className='postText'>{post?.desc}</p>
          <img
            src={publicFolder + post.img}
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
              {post?.comment} Comments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
