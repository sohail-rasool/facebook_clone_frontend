import { useEffect, useState } from 'react';
import Online from '../Online/Online';
import { Users } from '../../dummyData';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import { MdAddBox, MdRemoveCircle } from 'react-icons/md';

import { followUser, unFollowUser } from '../../features/user/userSlice';

const Rightbar = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(`/users/friends/${user._id}`);
        const data = friendList.data;
        setFriends(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user]);

  const followHandler = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch(unFollowUser(user._id));
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch(followUser(user._id));
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };

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
        {user.username !== currentUser.username && (
          <button
            className='rightbarFollowButton flex items-center my-3 bg-blue-500 text-white p-2 rounded-md font-medium'
            onClick={followHandler}
          >
            {followed ? <MdAddBox /> : <MdRemoveCircle />}{' '}
            <span className='ml-2'>{followed ? 'UnFollow' : 'Follow'}</span>
          </button>
        )}

        <h4 className='rightbarTitle text-xl font-semibold mb-2.5'>
          User Information
        </h4>
        <div className='rightbarInfo mb-8'>
          <div className='rightbarinfoItem mb-2.5'>
            <span className='rightbarInfoKey font-medium mb-3.5 text-gray-500'>
              City:
            </span>
            <span className='rightbarInfoValue font-light'>{user.city}</span>
          </div>
          <div className='rightbarinfoItem mb-2.5'>
            <span className='rightbarInfoKey font-medium mb-3.5 text-gray-500'>
              From:
            </span>
            <span className='rightbarInfoValue font-light'>{user.from}</span>
          </div>
          <div className='rightbarinfoItem'>
            <span className='rightbarInfoKey font-medium mb-3.5 text-gray-500'>
              Relationship:
            </span>
            <span className='rightbarInfoValue font-light'>
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 1
                ? 'Married'
                : '--'}
            </span>
          </div>
        </div>
        <h4 className='rightbarTitle text-xl font-semibold mb-2.5'>
          User Freinds
        </h4>
        <div className='rightbarFollowing flex flex-wrap justify-between'>
          {friends.map((friend) => (
            <Link key={friend._id} to={`/profile/${friend.username}`}>
              <div className='rightbarFollowing flex flex-col mb-5 cursor-pointer'>
                <img
                  src={
                    friend.profilePicture
                      ? publicFolder + friend.profilePicture
                      : `${publicFolder}person/1.jpeg`
                  }
                  className='rightbarFollowingImg w-24 h-24 rounded object-cover'
                  alt='follow img'
                />
                <span className='rightbarFollowingName'>{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <aside className='rightbar w-4/12'>
      <div className='rightbarWrapper pt-5 pr-5'>
        {!user && <HomeRightbarData />}
        {user && <ProfileRightbarData />}
      </div>
    </aside>
  );
};

export default Rightbar;
