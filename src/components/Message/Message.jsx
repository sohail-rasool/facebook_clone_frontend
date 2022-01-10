import { format } from 'timeago.js';

const Message = ({ message, own }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={`message flex flex-col my-2.5 ${own ? 'items-end' : ''}`}>
      <div className={`messageTop flex gap-2.5`}>
        <img
          className='messageImg w-8 h-8 object-cover rounded-full'
          src={`${publicFolder}person/noAvatar.png`}
          alt='meesage img'
        />
        <p
          className={`messageText p-2.5 rounded-3xl max-w-xs ${
            own ? 'text-black bg-gray-300' : 'bg-blue-600 text-white'
          } `}
        >
          {message?.text}
        </p>
      </div>
      <div className='messageBottom text-sm mt-2.5'>
        {format(message?.createdAt)}
      </div>
    </div>
  );
};

export default Message;
