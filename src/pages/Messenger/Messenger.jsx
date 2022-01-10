import { useState, useEffect } from 'react';
import axios from 'axios';
import Topbar from '../../components/Topbar/Topbar';
import Conversations from '../../components/conversations/Conversations';
import Message from '../../components/Message/Message';
import ChatOnline from '../../components/ChatOnline/ChatOnline';

import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';

const Messenger = () => {
  const user = useSelector(selectUser);

  const [conversations, SetConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [message, setMessages] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/conversations/${user._id}`);
        const data = res.data;
        SetConversations(data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/messages/${currentChat?._id}`);
        const data = res.data;
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  return (
    <>
      <Topbar />
      <div className='messenger h-[calc(100vh_-_3rem)] flex mt-12'>
        <div className='chatMenu' style={{ flex: '3.5' }}>
          <div className='chatMenuWrapper p-2.5 h-full'>
            <input
              type='text'
              placeholder='search for freinds'
              className='chatMenuInput py-2.5 w-full border-b border-gray-500 focus:outline-none'
            />
            {conversations.map((conversation, index) => (
              <div key={index} onClick={() => setCurrentChat(conversation)}>
                <Conversations conversation={conversation} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className='chatBox' style={{ flex: '5.5' }}>
          <div className='chatBoxWrapper p-2.5 h-full flex flex-col'>
            {currentChat ? (
              <>
                <div className='chatBoxTop h-full overflow-auto px-2.5'>
                  {message.map((message) => (
                    <Message
                      message={message}
                      own={message.sender === user._id}
                    />
                  ))}
                </div>
                <div className='chatBoxBottom mt-1.5 flex items-center justify-between'>
                  <textarea
                    className='chatMessageInput w-10/12 p-2.5 h-24 bg-gray-100 focus:outline-none'
                    placeholder='Write Something....'
                  ></textarea>
                  <button className='px-4 py-2 rounded-md bg-teal-500 text-white'>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <p className='noConversationText text-5xl text-gray-500 text-center'>
                Open a conversation to start a chat
              </p>
            )}
          </div>
        </div>
        <div className='chatOnline' style={{ flex: '3' }}>
          <div className='chatOnlineWrapper p-2.5 h-full'>
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
