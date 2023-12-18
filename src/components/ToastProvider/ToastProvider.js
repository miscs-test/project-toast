import React, { useState } from 'react';
import ToastShelf from '../ToastShelf/ToastShelf';

export const ToastContext = React.createContext();

let globalId = 0

function ToastProvider({ children }) {

  const [messages, setMessages] = useState([])

  function addMessage(msgContent, variant) {
    const newMessages = [...messages];
    newMessages.push({
      id: globalId++,
      content: msgContent,
      variant,
    });
    setMessages(newMessages);
  }

  function removeMessage(message) {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  }

  return (
    <ToastContext.Provider value={{ notify: addMessage }}>
      <ToastShelf messages={messages} onClose={removeMessage} />

      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
