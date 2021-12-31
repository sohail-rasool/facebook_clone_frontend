const Freind = ({ user }) => {
  return (
    <li className='sidebarFreind flex items-center mb-4'>
      <img
        className='sidebarFreindImg h-8 w-8 rounded-full object-cover mr-2.5'
        src={user.profilePicture}
        alt=''
      />
      <span className='sidebarFreindName'>{user.username}</span>
    </li>
  );
};

export default Freind;
