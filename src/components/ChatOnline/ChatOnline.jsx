const ChatOnline = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='chatOnline flex items-center font-medium cursor-pointer'>
      <div className='chatOnlineFriend flex gap-3 my-2'>
        <div className='chatOnlineImgContainer relative'>
          <img
            className='messageImg w-8 h-8 object-cover rounded-full'
            src={`${publicFolder}person/noAvatar.png`}
            alt='meesage img'
          />
          <div className='chatOnlineBadge absolute rounded-full h-2.5 w-2.5 bg-lime-600 top-0 right-0 border-2 border-white'></div>
        </div>
        <p className='chatOnlineName'>John Doe</p>
      </div>
    </div>
  );
};

export default ChatOnline;
