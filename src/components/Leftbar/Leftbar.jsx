import {
  MdRssFeed,
  MdOutlineChat,
  MdOutlinePlayCircleFilled,
  MdSupervisorAccount,
  MdOutlineBookmark,
  MdWorkOutline,
  MdOutlineCalendarToday,
} from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';

import Freind from '../Freind/Freind';
import { Users } from '../../dummyData';

const Leftbar = () => {
  return (
    <aside className='leftbar w-3/12 h-[calc(100vh_-_3rem)] overflow-auto sticky top-12'>
      <div className='sidebarWrapper p-5'>
        <ul className='sidebarList'>
          <li className=' flex items-center mb-5'>
            <MdRssFeed className='mr-4 text-2xl' />
            <span className='sidebarListItemText text-xl'>Feed</span>
          </li>
          <li className=' flex items-center mb-5'>
            <MdOutlineChat className='mr-4 text-2xl' />
            <span className='sidebarListItemText text-xl'>Chats</span>
          </li>
          <li className=' flex items-center mb-5'>
            <MdOutlinePlayCircleFilled className='mr-4 text-2xl' />
            <span className='sidebarListItemText text-xl'>Videos</span>
          </li>
          <li className=' flex items-center mb-5'>
            <MdSupervisorAccount className='mr-4 text-2xl' />
            <span className='sidebarListItemText text-xl'>Groups</span>
          </li>
          <li className=' flex items-center mb-5'>
            <MdOutlineBookmark className='mr-4 text-2xl' />
            <span className='sidebarListItemText text-xl'>Bookmark</span>
          </li>
          <li className=' flex items-center mb-5'>
            <AiOutlineQuestionCircle className='mr-4 text-2xl' />
            <span className='sidebarListItemText text-xl'>Questions</span>
          </li>
          <li className=' flex items-center mb-5'>
            <MdWorkOutline className='mr-4 text-2xl' />
            <span className='sidebarListItemText text-xl'>Jobs</span>
          </li>
          <li className=' flex items-center mb-5'>
            <MdOutlineCalendarToday className='mr-4 text-2xl' />
            <span className='sidebarListItemText text-xl'>Events</span>
          </li>
          <li className=' flex items-center mb-5'>
            <FaGraduationCap className='mr-4 text-2xl' />
            <span className='sidebarListItemText text-xl'>Courses</span>
          </li>
        </ul>
        <button
          type='button'
          className='sidebarButton w-40 p-3 font-semibold bg-gray-300 hover:bg-gray-500 hover:text-white transition-all duration-200'
        >
          Show more
        </button>
        <hr className='my-5' />
        <ul className='sidebarFreindList'>
          {Users.map((user) => (
            <Freind key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Leftbar;
