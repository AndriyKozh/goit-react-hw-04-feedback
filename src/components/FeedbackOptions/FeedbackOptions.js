import { FeetbackBtn, FeetbackBtnBlock } from './FeedbackOption.style';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onClick }) {
  return (
    <FeetbackBtnBlock>
      {options.map((option, index) => {
        return (
          <FeetbackBtn
            type="button"
            key={index}
            name={option}
            onClick={onClick}
          >
            {option}
          </FeetbackBtn>
        );
      })}
    </FeetbackBtnBlock>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
