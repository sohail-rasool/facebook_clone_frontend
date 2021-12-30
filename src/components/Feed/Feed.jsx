import Share from '../Share/Share';
import Post from '../Post/Post';

const Feed = () => {
  return (
    <div className='feed w-5/12'>
      <div className='feedWrapper p-5'>
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
