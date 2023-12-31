import { useState } from 'react';
import css from './Contacts.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isIncorrectEmail, setIsIncorrectEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = e => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    setIsValidEmail(newEmail === '' ? null : emailRegex.test(newEmail));
    setIsIncorrectEmail(!emailRegex.test(newEmail));
    validateForm();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'message') {
      setMessage(value);
    }

    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(
      name !== '' && email !== '' && isValidEmail && message !== ''
    );
  };

  const handleClick = () => {
    Notify.success('Your future functional');
  };

  return (
    <>
      <div className={css.container_contacts}>
        <div className={css.container}>
          <div className={css.contacts}>
            <h2 className={css.title}>Contact us!</h2>
            <p className={css.text}>
              The support staff and customer service are available <br /> to
              help you with any questions or needs you might <br />
              have. Just drop us a line.
            </p>
            <p className={css.text2}>
              This site is owned and operated by Kode Tech Solutions LTD
            </p>
            <p className={css.type_contact}>Phone:</p>
            <p className={css.text2}>442038857261</p>
            <p className={css.type_contact}>Email:</p>
            <p className={css.text2}>help@google.com</p>
            <p className={css.type_contact}>Address:</p>
            <p className={css.text2}>
              Trust Company Complex, Ajeltake Road, Ajeltake Island, <br />
              Majuro, Republic of the Marshall Islands, MH 96960
            </p>
          </div>
          <div className={css.message_form_container}>
            <form className={css.message_form}>
              <div>
                <input
                  className={css.input}
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <input
                  className={`${css.input} ${
                    isValidEmail === true
                      ? css.valid
                      : isValidEmail === false
                      ? css.invalid
                      : ''
                  }`}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <div>
                  {isIncorrectEmail && (
                    <div className={css.errorContainer}>
                      <p className={css.errorMsg}>Incorrect email type</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <textarea
                  className={`${css.input} ${css.message}`}
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={css.btn_pos}>
                <button
                  className={css.button}
                  type="submit"
                  disabled={!isFormValid}
                  onClick={handleClick}
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
