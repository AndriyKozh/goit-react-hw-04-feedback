import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { FeetbackBlock } from './Featback.style';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Feedback() {
  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addGoodHandler = ev => {
    ev.preventDefault();
    const incrementValue = ev.target.name;
    setValue({ ...value, [incrementValue]: (value[incrementValue] += 1) });
  };

  const addTotal = value.good + value.neutral + value.bad;
  const addPositivFeedback = Math.round((value.good / addTotal) * 100);

  return (
    <FeetbackBlock>
      <h1>Please leave feedback</h1>
      <FeedbackOptions options={Object.keys(value)} onClick={addGoodHandler} />
      <SectionTitle>
        <h2>Statistics</h2>
        {addTotal !== 0 ? (
          <Statistics
            addGood={value.good}
            addNeutral={value.neutral}
            addBad={value.bad}
            total={addTotal}
            addPositivFeedback={addPositivFeedback}
          ></Statistics>
        ) : (
          'No fidback give'
        )}
      </SectionTitle>
    </FeetbackBlock>
  );
}

export default Feedback;
