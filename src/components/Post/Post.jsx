import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';

import { MdMoreVert } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { BsHandThumbsUpFill } from 'react-icons/bs';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const currentUser = useSelector(selectUser);

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  // style start
  const boxShadow = {
    boxShadow: '0px 0px 16px -8px rgba(0,0,0,0.68)',
  };
  // style end

  useEffect(() => {
    const alreadyIncludeUserId = post.likes.includes(currentUser._id);
    setIsLiked(alreadyIncludeUserId);
  }, [post.likes, currentUser._id]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      const data = response.data;
      setUser(data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (error) {
      console.log(error);
    }

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post w-100 rounded-lg my-8' style={boxShadow}>
      <div className='postWrapper p-2.5'>
        <div className='postTop flex items-center justify-between'>
          <div className='postTopLeft flex items-center'>
            <Link to={`/profile/${user.username}`}>
              <img
                className='postProfileImg w-8 h-8 object-cover rounded-full'
                src={
                  user.profilePicture
                    ? publicFolder + user.profilePicture
                    : `${publicFolder}person/noAvatar.png`
                }
                alt='postProfileImg'
              />
            </Link>
            <span className='text-base font-medium mx-2.5'>
              {user.username}
            </span>
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
