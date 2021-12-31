import Topbar from '../../components/Topbar/Topbar';
import Leftbar from '../../components/Leftbar/Leftbar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';

const Profile = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className='profile flex container mx-auto mt-12'>
        <Leftbar />
        <div className='profileRight w-9/12'>
          <div className='profileRightTop'>
            <div className='profileCover h-340 relative'>
              <img
                className='profileCoverImg w-full h-60 object-cover'
                src={`${publicFolder}post/3.jpeg`}
                alt='profileCoverImg'
              />
              <img
                className='profileImg w-36 h-36 rounded-full object-cover absolute left-0 right-0 m-auto top-36 border-4 border-white'
                src={`${publicFolder}post/7.jpeg`}
                alt='profileImg'
              />
              <div className='prifleInfo text-center absolute bottom-0 w-full'>
                <h4 className='profileInfoName text-2xl font-semibold'>
                  Name here
                </h4>
                <p className='profileInfoDesc font-light text-base'>Hello</p>
              </div>
            </div>
          </div>
          <div className='profileRightBottom flex'>
            <Feed style={{ flex: '1' }} />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
