import css from './FeedBack.module.css';

const FeedbackOptions = props => {
  return (
    <>
      <h2>Please Leave Feedback</h2>
      <div className={css.feedBack}>
        <button onClick={() => props.onLeaveFeedBack('good')}>good</button>
        <button onClick={() => props.onLeaveFeedBack('neutral')}>
          neutral
        </button>
        <button onClick={() => props.onLeaveFeedBack('bad')}>bad</button>
      </div>
    </>
  );
};

export default FeedbackOptions;
