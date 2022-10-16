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
  console.log(total);
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
export default Statistics;
