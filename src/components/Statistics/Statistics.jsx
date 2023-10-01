import Notification from '../Notification';
import css from './Statistics.module.css';

const Statistic = props => {
  console.log(props);
  const { good, neutral, bad, total, positiveFeedBack } = props;
  return (
    <>
      <h2>Satatistics</h2>
      {total ? (
        <>
          <ul className={css.statistics}>
            <li>Good: {good}</li>
            <li>Netral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positiveFeedBack} %</li>
          </ul>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default Statistic;
