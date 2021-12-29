import { MdRssFeed } from 'react-icons/md';

const Leftbar = () => {
  return (
    <aside className='leftbar w-3/12 h-[calc(100vh_-_3rem)]'>
      <div className='sidebarWrapper p-5 bg-red-500'>
        <ul className='sidebarList'>
          <li className=' flex items-center mb-5'>
            <MdRssFeed className='mr-4' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
        </ul>
        <button type='button' className='sidebarButton'>
          Show more
        </button>
        <hr />
        <ul className='sidebarFreindList'>
          <li className='sidebarFreind'>
            <img
              className='sidebarFreindImg'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='sidebarFreindName'>Jane Doe</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Leftbar;
