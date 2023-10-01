import FeedbackOptions from './FeedBack/FeedBack';
import Statistic from './Statistics/Statistics';
import css from './FeedBack/FeedBack.module.css';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const onLeaveFeedBack = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
    setTotal(total + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100) || 0;
  };

  return (
    <div className={css.conteiner}>
      <FeedbackOptions onLeaveFeedBack={type => onLeaveFeedBack(type)} />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positiveFeedBack={countPositiveFeedbackPercentage()}
      />
    </div>
  );
};
