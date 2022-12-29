import React from 'react';
import { useState } from 'react';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import { Notification } from './components/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeeback(key) {
    if (key === 'good') setGood(prev => prev + 1);
    if (key === 'neutral') setNeutral(prev => prev + 1);
    if (key === 'bad') setBad(prev => prev + 1);
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return parseInt((good / countTotalFeedback()) * 100) || 0;
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
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeeback={onLeaveFeeback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
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
