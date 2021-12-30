import { MdMoreVert } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { BsHandThumbsUpFill } from 'react-icons/bs';
const Post = () => {
  const boxShadow = {
    boxShadow: '0px 0px 16px -8px rgba(0,0,0,0.68)',
  };
  return (
    <div className='post w-100 rounded-lg my-8' style={boxShadow}>
      <div className='postWrapper p-2.5'>
        <div className='postTop flex items-center justify-between'>
          <div className='postTopLeft flex items-center'>
            <img
              className='postProfileImg w-8 h-8 object-cover rounded-full'
              src='/assets/person/1.jpeg'
              alt='postProfileImg'
            />
            <span className='text-base font-medium mx-2.5'>
              Safak Developer
            </span>
            <span className='postDate text-xs'>5 min ago</span>
          </div>
          <div className='postTopRight'>
            <MdMoreVert className='text-2xl' />
          </div>
        </div>
        <div className='postCenter my-5'>
          <span className='postText'>Hey ! it's my first Post</span>
          <img
            src='assets/post/1.jpeg'
            alt=''
            className='postImg mt-5 w-full object-contain'
            style={{ maxHeight: '500px' }}
          />
        </div>
        <div className='postBottom flex items-center justify-between'>
          <div className='postBottomLeft flex items-center'>
            <BsHandThumbsUpFill className='text-3xl cursor-pointer mr-1 text-blue-500' />
            <FcLike className='text-3xl cursor-pointer mr-1' />
            <span className='postLikeCoutner text-base'>
              32 people liked it
            </span>
          </div>
          <div className='postBottomRight'>
            <p className='postCommentText cursor-pointer border-b-2 border-gray-400 border-dashed text-base'>
              9 Comments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
