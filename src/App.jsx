import React from 'react';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import { Notification } from './components/Notification';

let clicked = false;
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeeback = event => {
    clicked = true;
    const { target } = event;
    let clickedBtn = target.id;

    switch (clickedBtn) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
      default:
        console.log('Error, no such state');
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return parseInt((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
          margin: '50px',
        }}
      >
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeeback={this.onLeaveFeeback}
          />
        </Section>
        <Section title="Statistics">
          {clicked ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
