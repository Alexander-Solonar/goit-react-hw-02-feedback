import React, { Component } from 'react';
import Section from './section/';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = mark => {
    this.setState(prevState => ({
      [mark]: (prevState[mark] += 1),
    }));
  };

  totalFeedback = () => {
    const { good } = this.state;
    const { bad } = this.state;
    const { neutral } = this.state;
    return good + bad + neutral;
  };

  positivePercentage = () => {
    const { good } = this.state;
    return Math.round((100 / this.totalFeedback()) * good);
  };

  render() {
    const { good } = this.state;
    const { bad } = this.state;
    const { neutral } = this.state;

    return (
      <div>
        <Section titel="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section titel="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedback()}
            positivePercentage={this.positivePercentage()}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

export default App;
