import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

let globalId = 0

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  // const [show, setShow] = React.useState(false);

  const [messages, setMessages] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newMessages = [...messages];
    newMessages.push({
      id: globalId++,
      content: message,
      variant,
    });
    setMessages(newMessages);
  }

  function removeMessage(message) {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* {
        show &&
        <Toast message={message} variant={variant} onClose={() => setShow(false)} />
      } */}

      <ToastShelf messages={messages} onClose={removeMessage} />

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {
                VARIANT_OPTIONS.map((variant) => (
                  <label htmlFor={`variant-${variant}`} key={variant} >
                    <input
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      onClick={() => setVariant(variant)}
                    />
                    {variant}
                  </label>
                ))
              }
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
}

export default ToastPlayground;
