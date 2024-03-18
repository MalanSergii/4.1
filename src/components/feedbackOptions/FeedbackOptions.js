import ButtonsList from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {Object.keys(options).map(button => (
        <li key={button}>
          <button name={button} onClick={onLeaveFeedback}>
            {button}
          </button>
        </li>
      ))}
    </ButtonsList>
  );
};

export default FeedbackOptions;
