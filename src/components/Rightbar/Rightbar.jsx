import React from 'react';

const Rightbar = () => {
  return (
    <aside className='rightbar w-4/12'>
      <div className='rightbarWrapper pt-5 pr-5'>
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
          <li className='rightbarFreind flex items-center mb-4'>
            <div className='rightbarProfileImgContainer mr-2.5 relative'>
              <img
                className='rightbarProfileImg w-10 h-10 rounded-full object-cover'
                src='assets/person/3.jpeg'
                alt='person'
              />
              <span className='rightbarOnline w-3 h-3 rounded-full bg-green-400 absolute -top-1 right-0 border-2 border-white'></span>
            </div>
            <span className='rightbarUsername font-medium'>John Carter</span>
          </li>
          <li className='rightbarFreind flex items-center mb-4'>
            <div className='rightbarProfileImgContainer mr-2.5 relative'>
              <img
                className='rightbarProfileImg w-10 h-10 rounded-full object-cover'
                src='assets/person/3.jpeg'
                alt='person'
              />
              <span className='rightbarOnline w-3 h-3 rounded-full bg-green-400 absolute -top-1 right-0 border-2 border-white'></span>
            </div>
            <span className='rightbarUsername font-medium'>John Carter</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Rightbar;
