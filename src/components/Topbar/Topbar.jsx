import {
  BsSearch,
  BsFillPersonFill,
  BsChatRightDotsFill,
  BsFillBellFill,
} from 'react-icons/bs';

const Topbar = () => {
  return (
    <header>
      <nav className='topbarContainer h-12 w-full bg-blue-500 flex items-center fixed top-0 z-20'>
        <div className='topbarLeft w-3/12'>
          <span className='text-2xl ml-5 font-bold text-white cursor-pointer'>
            Fb Clone
          </span>
        </div>
        <div className='topbarCenter w-5/12'>
          <div className='searchbar w-full h-8 bg-white rounded-3xl flex items-center'>
            <BsSearch className='searchIcon text-lg mx-3' />
            <input
              type='text'
              placeholder='Search for freind, post or video'
              className='w-9/12 focus:outline-none'
            />
          </div>
        </div>
        <div className='topbarRight w-4/12 flex items-center justify-around text-white'>
          <div className='topbarLinks'>
            <span className='topbarLink ml-3 text-sm cursor-pointer'>
              Homepage
            </span>
            <span className='topbarLink ml-3 text-sm cursor-pointer'>
              Timeline
            </span>
          </div>
          <div className='topbarIcons flex items-center'>
            <div className='topbarIconItem cursor-pointer ml-4 relative'>
              <BsFillPersonFill className='text-2xl' />
              <span className='topbarIconBadge h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white absolute -top-1 -right-1 text-xs'>
                <span>1</span>
              </span>
            </div>
            <div className='topbarIconItem cursor-pointer ml-4 relative'>
              <BsChatRightDotsFill className='text-2xl' />
              <span className='topbarIconBadge h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white absolute -top-1 -right-1 text-xs'>
                <span>1</span>
              </span>
            </div>
            <div className='topbarIconItem cursor-pointer ml-4 relative'>
              <BsFillBellFill className='text-2xl' />
              <span className='topbarIconBadge h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white absolute -top-1 -right-1 text-xs'>
                <span>1</span>
              </span>
            </div>
          </div>
          <img
            src='/assets/person/1.jpeg'
            alt=''
            className='topbarImg w-8 h-8 object-cover rounded-full cursor-pointer'
          />
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
