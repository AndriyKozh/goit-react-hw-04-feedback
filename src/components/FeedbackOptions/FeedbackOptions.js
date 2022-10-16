import { FeetbackBtn, FeetbackBtnBlock } from './FeedbackOption.style';

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

export default FeedbackOptions;
