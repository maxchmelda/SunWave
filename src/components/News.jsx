import React, { useEffect, useRef, useState } from 'react';
import { BsDiscord } from 'react-icons/bs';
import { LinearGradient } from 'react-text-gradients'
import { motion, useInView } from 'motion/react';

const News = () => {
  const [messages, setMessages] = useState([]);

  // Fetch the latest 3 messages from the backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/messages');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    // Poll for new messages every 5 seconds
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150  }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='text-white w-full h-screen flex justify-center items-center font-inter'
    >
      <div className='flex flex-col justify-center items-center gap-5'>
        <LinearGradient 
          gradient={['to right', '#DFA998 ,#324DFF']}
          className='mt-8 mb-10 text-5xl font-bold'
        >
          novinky
        </LinearGradient>
        <div className='flex justify-center items-center gap-6'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className='w-[300px] h-[400px] bg-[#1D1D1D] rounded-xl p-4 pb-3.5'
            >
              <div className='flex justify-start items-center gap-5'>
                <img
                  src={msg.avatar}
                  alt={`${msg.author}'s avatar`}
                  className='w-[40px] h-[40px] rounded-full'
                />
                <div>
                  <p>{msg.author}</p>
                  <p className='text-white/60'>
                    {new Date(msg.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div 
                className='w-full h-[300px] mt-2 px-2 overflow-y-scroll '
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                <p className='whitespace-pre-wrap break-words overflow-hidden text-sm'>
                  {msg.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <motion.button 
          className='bg-gradient-to-r from-[#243081] to-[#324DFF] hover:from-[#3A55FF] hover:to-[#8999FF] py-2 px-4 mt-5 rounded-2xl flex justify-around items-center gap-4'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
        >
          <BsDiscord color="white" size={35}/>
          <p className='font-bold font-Opensans'>PŘIPOJTE SE K NÁM</p>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default News;
