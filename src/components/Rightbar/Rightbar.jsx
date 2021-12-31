import Online from '../Online/Online';
import { Users } from '../../dummyData';

const Rightbar = ({ profile }) => {
  const HomeRightbarData = () => {
    return (
      <>
        <div className='birthdayContainer flex items-center'>
          <img
            alt='gift'
            className='birthdayImg h-10 w-10 mr-10 object-contain'
            src='assets/gift.png'
          />
          <span className='birthdayText font-light text-base'>
            <b>Pola Foster</b> and <b>3 other freinds</b> have today
          </span>
        </div>
        <img
          className='rightbarAdd w-full rounded-lg my-8'
          src='assets/ad.png'
          alt='ad'
        />
        <h4 className='rightbarTitle mb-5 font-semibold'>Online Freinds</h4>
        <ul className='rightbarFreindList'>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbarData = () => {
    return (
      <>
        <h4 className='rightbarTitle text-xl font-semibold mb-2.5'>
          User Information
        </h4>
        <div className='rightbarInfo mb-8'>
          <div className='rightbarinfoItem mb-2.5'>
            <span className='rightbarInfoKey font-medium mb-3.5 text-gray-500'>
              City:
            </span>
            <span className='rightbarInfoValue font-light'>New York</span>
          </div>
          <div className='rightbarinfoItem mb-2.5'>
            <span className='rightbarInfoKey font-medium mb-3.5 text-gray-500'>
              From:
            </span>
            <span className='rightbarInfoValue font-light'>New York</span>
          </div>
          <div className='rightbarinfoItem'>
            <span className='rightbarInfoKey font-medium mb-3.5 text-gray-500'>
              Relationship:
            </span>
            <span className='rightbarInfoValue font-light'>Married</span>
          </div>
        </div>
        <h4 className='rightbarTitle text-xl font-semibold mb-2.5'>
          User Freinds
        </h4>
        <div className='rightbarFollowing flex flex-wrap justify-between'>
          <div className='rightbarFollowing flex flex-col mb-5 cursor-pointer'>
            <img
              src='assets/person/1.jpeg'
              className='rightbarFollowingImg w-24 h-24 rounded object-cover'
              alt='follow img'
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
          <div className='rightbarFollowing flex flex-col mb-5 cursor-pointer'>
            <img
              src='assets/person/1.jpeg'
              className='rightbarFollowingImg w-24 h-24 rounded object-cover'
              alt='follow img'
            />
            <span className='rightbarFollowingName'>John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <aside className='rightbar w-4/12'>
      <div className='rightbarWrapper pt-5 pr-5'>
        {!profile && <HomeRightbarData />}
        {profile && <ProfileRightbarData />}
      </div>
    </aside>
  );
};

export default Rightbar;
