import styled from "styled-components";

export const StepDiv = styled.div`
  display: flex;

  & h4 {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
  }

  & .title {
    color: #1ba986;
  }

  & p {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
  }

  & #step-index {
    flex: 1;
  }

  & #step-content {
    flex: 5;
  }

  @media screen and (min-width: 1260px) {
    & #step-content {
      flex: 8;
    }
  }
`;

function GetInsuredStepCard({ title, text, index }) {
  return (
    <StepDiv>
      <div id="step-index">
        <h4>0{index + 1} -</h4>
      </div>

      <div id="step-content">
        <h4 className="title">{title}</h4>
        <p>{text}</p>
      </div>
    </StepDiv>
  );
}

export default GetInsuredStepCard;
