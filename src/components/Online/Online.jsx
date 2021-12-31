const Online = ({ user }) => {
  return (
    <li className='rightbarFreind flex items-center mb-4'>
      <div className='rightbarProfileImgContainer mr-2.5 relative'>
        <img
          className='rightbarProfileImg w-10 h-10 rounded-full object-cover'
          src={user.profilePicture}
          alt='person'
        />
        <span className='rightbarOnline w-3 h-3 rounded-full bg-green-400 absolute -top-1 right-0 border-2 border-white'></span>
      </div>
      <span className='rightbarUsername font-medium'>{user.username}</span>
    </li>
  );
};

export default Online;
