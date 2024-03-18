import StatsList from './Statistics.styled';

const Statistics = ({ good, bad, neutral, total, percentOfGood }) => {
  return (
    <StatsList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Poasitive feedback: {percentOfGood} %</li>
    </StatsList>
  );
};

export default Statistics;
