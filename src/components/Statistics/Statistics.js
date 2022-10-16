import PropTypes from 'prop-types';

import {
  StatisticsContent,
  StatisticsContentBlock,
  StatisticsValue,
} from './Statistics.stylt';

function Statistics({
  addGood,
  addNeutral,
  addBad,
  total,
  addPositivFeedback,
}) {
  return (
    <StatisticsContentBlock>
      <StatisticsContent>
        Good:<StatisticsValue>{addGood}</StatisticsValue>
      </StatisticsContent>
      <StatisticsContent>
        Neutral:<StatisticsValue>{addNeutral}</StatisticsValue>
      </StatisticsContent>
      <StatisticsContent>
        Bad:<StatisticsValue>{addBad}</StatisticsValue>
      </StatisticsContent>
      <StatisticsContent>
        Total:<StatisticsValue>{total}</StatisticsValue>
      </StatisticsContent>
      <StatisticsContent>
        Positive feedback:
        <StatisticsValue>{addPositivFeedback}%</StatisticsValue>
      </StatisticsContent>
    </StatisticsContentBlock>
  );
}

Statistics.propTypes = {
  addGood: PropTypes.number.isRequired,
  addNeutral: PropTypes.number.isRequired,
  addBad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  addPositivFeedback: PropTypes.number.isRequired,
};

export default Statistics;
