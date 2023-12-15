import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ messages, onClose }) {
  return (
    <ol className={styles.wrapper}>
      {
        messages.map((message) => (
          <li className={styles.toastWrapper} key={message.id}>
            <Toast message={message.content} variant={message.variant} onClose={() => onClose(message)} />
          </li>
        ))
      }
    </ol>
  );
}

export default ToastShelf;
