import { Component } from 'react';
import Container from './container';
import Section from './section';

import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Notification from './notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  leaveFeadback = e => {
    const { name } = e.target;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  render() {
    const stateKeys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            buttons={stateKeys}
            options={this.state}
            onLeaveFeedback={this.leaveFeadback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentOfGood={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
