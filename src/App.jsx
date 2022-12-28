import React from 'react';
import { useState } from 'react';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import { Notification } from './components/Notification';

export function App() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  function onLeaveFeeback(key) {
    setOptions(prevOptions => ({
      ...prevOptions,
      [key]: prevOptions[key] + 1,
    }));
  }

  function countTotalFeedback() {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return parseInt((options.good / countTotalFeedback()) * 100) || 0;
  }

  const total = countTotalFeedback();

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
        <FeedbackOptions options={options} onLeaveFeeback={onLeaveFeeback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={options.good}
            bad={options.bad}
            neutral={options.neutral}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
