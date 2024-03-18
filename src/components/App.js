import { useState } from 'react';
import Container from './container';
import Section from './section';

import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Notification from './notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * good) / countTotalFeedback());
  };

  const leaveFeadback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        return setGood(prev => prev + 1);
      case 'bad':
        return setBad(prev => prev + 1);
      case 'neutral':
        return setNeutral(prev => prev + 1);
      default:
        return;
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, bad, neutral }}
          onLeaveFeedback={leaveFeadback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentOfGood={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
};

export default App;
