import Share from '../Share/Share';
import Post from '../Post/Post';

import { Posts } from '../../dummyData';

const Feed = ({ style }) => {
  return (
    <div className='feed w-5/12' style={style}>
      <div className='feedWrapper p-5'>
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
