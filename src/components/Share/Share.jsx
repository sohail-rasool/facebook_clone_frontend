import { useRef, useState } from 'react';
import axios from 'axios';
import {
  MdPermMedia,
  MdOutlineLabel,
  MdRoom,
  MdOutlineEmojiEmotions,
  MdCancel,
} from 'react-icons/md';

import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';

const Share = () => {
  const user = useSelector(selectUser);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();

  const [file, setFile] = useState(null);

  const boxShadow = {
    boxShadow: '0px 0px 16px -8px rgba(0,0,0,0.68)',
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      // const fileName = Date.now() + file.name;
      data.append('file', file);
      data.append('name', file.name);
      newPost.img = file.name;

      try {
        await axios.post(`/upload`, data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post(`/posts`, newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='share w-full rounded-xl' style={boxShadow}>
      <div className='shareWrapper p-2.5'>
        <div className='shareTop flex items-center'>
          <img
            className='shareProfileImg w-12 h-12 rounded-full object-cover mr-2.5'
            src={
              user.profilePicture
                ? publicFolder + user.profilePicture
                : `${publicFolder}person/noAvatar.png`
            }
            alt='shareProfileImg'
          />
          <input
            placeholder={`what's in your mind ${user.username} ?? `}
            type='text'
            className='shareInput w-4/5 focus:outline-none'
            ref={desc}
          />
        </div>
        <hr className='shareHr my-5' />
        {file && (
          <div className='shareImgContainer p-5 relative'>
            <img
              className='w-full object-cover h-72'
              src={URL.createObjectURL(file)}
              alt='privew'
            />
            <MdCancel
              className='shareCancelImg absolute top-0 right-0'
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form
          className='shareBottom flex items-center justify-between'
          onSubmit={formSubmitHandler}
        >
          <div className='shareOptions flex'>
            <label
              htmlFor='file'
              className='shareOption flex items-center cursor-pointer mx-4'
            >
              <MdPermMedia color='tomato' className='shareIcon text-2xl mr-1' />
              <span className='shareOptionText text-base font-medium'>
                Photo or Video
              </span>
              <input
                type='file'
                id='file'
                accept='.png,.jpeg,.jpg'
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </label>
            <div className='shareOption flex items-center cursor-pointer mx-4'>
              <MdOutlineLabel
                color='blue'
                className='shareIcon text-2xl mr-1'
              />
              <span className='shareOptionText text-base font-medium'>Tag</span>
            </div>
            <div className='shareOption flex items-center cursor-pointer mx-4'>
              <MdRoom color='green' className='shareIcon text-2xl mr-1' />
              <span className='shareOptionText text-base font-medium'>
                Location
              </span>
            </div>
            <div className='shareOption flex items-center cursor-pointer mx-4'>
              <MdOutlineEmojiEmotions
                color='goldenrod'
                className='shareIcon text-2xl mr-1'
              />
              <span className='shareOptionText text-base font-medium'>
                Feelings
              </span>
            </div>
          </div>
          <button
            type='submit'
            className='shareButton p-1.5 rounded-md font-medium bg-green-500 mr-5 cursor-pointer text-white'
          >
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
