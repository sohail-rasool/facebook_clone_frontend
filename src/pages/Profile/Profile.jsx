import { useState, useEffect } from 'react';
import axios from 'axios';
import Topbar from '../../components/Topbar/Topbar';
import Leftbar from '../../components/Leftbar/Leftbar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const { userName } = useParams();
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${userName}`);
      const data = response.data;
      setUser(data);
    };
    fetchUser();
  }, [userName]);

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
                src={
                  user.coverPicture
                    ? publicFolder + user.coverPicture
                    : `${publicFolder}person/noCover.png`
                }
                alt='profileCoverImg'
              />
              <img
                className='profileImg w-36 h-36 rounded-full object-cover absolute left-0 right-0 m-auto top-36 border-4 border-white'
                src={
                  user.profilePicture
                    ? publicFolder + user.profilePicture
                    : `${publicFolder}person/noAvatar.png`
                }
                alt='profileImg'
              />
              <div className='prifleInfo text-center absolute bottom-0 w-full'>
                <h4 className='profileInfoName text-2xl font-semibold'>
                  {user.username}
                </h4>
                <p className='profileInfoDesc font-light text-base'>
                  {user?.desc}
                </p>
              </div>
            </div>
          </div>
          <div className='profileRightBottom flex'>
            <Feed userName={userName} style={{ flex: '1' }} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
