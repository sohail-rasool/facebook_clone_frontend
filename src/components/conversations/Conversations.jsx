import axios from 'axios';
import { useState, useEffect } from 'react';

const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const friendId = conversation.members.find(
      (member) => member !== currentUser._id
    );

    const getUser = async () => {
      setLoading(true);
      try {
        const res = await axios(`/users?userId=${friendId}`);
        const data = res.data;
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser._id, conversation]);

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <div className='conversation flex items-center p-2.5 gap-5 cursor-pointer hover:bg-gray-200 mt-5'>
          <img
            className='conversationImg w-8 h-8 object-cover rounded-full'
            src={
              user?.profilePicture
                ? `${publicFolder}${user?.profilePicture}`
                : `${publicFolder}person/noAvatar.png`
            }
            alt='conversationImg'
          />
          <span className='conversationName font-medium'>{user?.username}</span>
        </div>
      )}
    </>
  );
};

export default Conversations;
