import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { auth, db } from "../config/firebase";
import { query, collection, orderBy, onSnapshot, QuerySnapshot } from "firebase/firestore";
import Message from './Message';
import SendMessage from './SendMessage';
import { useAuthState } from "react-firebase-hooks/auth";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [user] = useAuthState(auth);

    const infoRef = useRef(null);

    useEffect(() => {
      const newQuery = query(collection(db, 'messages'), orderBy('timestamp'));
      const unsubscribe = onSnapshot(newQuery, (querySnapshot) => {
        let currentMessages = [];
        querySnapshot.forEach(item => {
            currentMessages.push({
                content: item.data(), 
                id: item.id
            })
            setMessages(currentMessages)
        })

        // if (infoRef.current) {
        //   infoRef.current.scrollTop = infoRef.current.scrollHeight;
        // }

        return unsubscribe;
      }, [])
    })
    

  return (
    <>
      <section ref={infoRef} className='bg-light border rounded p-2' style={{ overflowY: 'scroll', maxHeight: '600px' }}>
          {
              messages && messages.map(item => (
                  <Message
                      key={item.id}
                      message={item.content}
                  />
              ))
          }
      </section>
      <section className='bg-light border rounded p-2 mt-2'>
      { user && <SendMessage scroll={infoRef}/>}
      </section>
    </>
  )
}

export default Chat