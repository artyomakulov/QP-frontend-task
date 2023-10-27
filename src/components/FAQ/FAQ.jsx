import css from './FAQ.module.css';
import plus from '../../images/plus.svg';
import { useState } from 'react';

export const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = questionId => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  const faqData = [
    {
      id: 1,
      question: 'How do I change my details?',
      answer: 'Answer for question 1.',
    },
    {
      id: 2,
      question: 'What platforms will I be able to use?',
      answer:
        'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!',
    },
    {
      id: 3,
      question: 'How do I change my details?',
      answer: 'Answer for question 3.',
    },
    {
      id: 4,
      question: 'How do I change my details?',
      answer: 'Answer for question 4.',
    },
    {
      id: 5,
      question: 'How do I change my details?',
      answer: 'Answer for question 5.',
    },
    {
      id: 6,
      question: 'How do I change my details?',
      answer: 'Answer for question 6.',
    },
    {
      id: 7,
      question: 'How do I change my details?',
      answer: 'Answer for question 7.',
    },
  ];

  return (
    <>
      <div className={css.container_faq}>
        <div className={css.container}>
          <h2 className={css.title}>
            Frequently asked <br />
            <span className={css.title_highlight}>questions</span>
          </h2>
          <div>
            <ul className={css.list_item}>
              {faqData.map(item => (
                <li className={css.item} key={item.id}>
                  <div className={css.question_form}>
                    <p className={css.question}>{item.question}</p>
                    <button
                      className={`${css.button} ${
                        openQuestion === item.id ? css.rotate : ''
                      }`}
                      onClick={() => toggleAnswer(item.id)}
                    >
                      <img src={plus} alt="open" width={32} />
                    </button>
                  </div>
                  {openQuestion === item.id && (
                    <p
                      className={`${css.answer} ${
                        openQuestion === item.id ? css.open : ''
                      }`}
                    >
                      {item.answer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
