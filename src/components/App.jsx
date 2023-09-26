import FeedbackOptions from './FeedBack/FeedBack';
import Statistic from './Statistics/Statistics';
import css from './FeedBack/FeedBack.module.css';
import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0, total: 0 });
  const onLeaveFeedBack = type => {
    setState(prev => ({
      ...prev,
      [type]: prev[type] + 1,
      total: prev.total + 1,
    }));
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / state.total) * 100) || 0;
  };

  return (
    <div className={css.conteiner}>
      <FeedbackOptions onLeaveFeedBack={type => onLeaveFeedBack(type)} />
      <Statistic
        statistic={{
          ...state,
          positiveFeedBack: countPositiveFeedbackPercentage(),
        }}
      />
    </div>
  );
};
