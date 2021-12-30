import {
  MdPermMedia,
  MdOutlineLabel,
  MdRoom,
  MdOutlineEmojiEmotions,
} from 'react-icons/md';

const Share = () => {
  const boxShadow = {
    boxShadow: '0px 0px 16px -8px rgba(0,0,0,0.68)',
  };
  return (
    <div className='share w-full h-44 rounded-xl' style={boxShadow}>
      <div className='shareWrapper p-2.5'>
        <div className='shareTop flex items-center'>
          <img
            className='shareProfileImg w-12 h-12 rounded-full object-cover mr-2.5'
            src='/assets/person/1.jpeg'
            alt='shareProfileImg'
          />
          <input
            placeholder="what's in your mind ??"
            type='text'
            className='shareInput w-4/5 focus:outline-none'
          />
        </div>
        <hr className='shareHr my-5' />
        <div className='shareBottom flex items-center justify-between'>
          <div className='shareOptions flex'>
            <div className='shareOption flex items-center cursor-pointer mx-4'>
              <MdPermMedia color='tomato' className='shareIcon text-2xl mr-1' />
              <span className='shareOptionText text-base font-medium'>
                Photo or Video
              </span>
            </div>
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
            type='button'
            className='shareButton p-1.5 rounded-md font-medium bg-green-500 mr-5 cursor-pointer text-white'
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
