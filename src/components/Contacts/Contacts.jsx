import css from './Contacts.module.css';

export const Contacts = () => {
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
            <p className={css.type_contact_text}>442038857261</p>
            <p className={css.type_contact}>Email:</p>
            <p className={css.type_contact_text}>help@google.com</p>
            <p className={css.type_contact}>Address:</p>
            <p className={css.type_contact_text}>
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
                  required
                />
              </div>
              <div>
                <input
                  className={css.input}
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <textarea
                  className={`${css.input} ${css.message}`}
                  placeholder="Message"
                  required
                />
              </div>
              <div className={css.btn_pos}>
                <button className={css.button} type="submit">
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
