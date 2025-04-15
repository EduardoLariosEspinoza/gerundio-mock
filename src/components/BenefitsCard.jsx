import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 2rem;
  height: 312px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  text-align: left;
  letter-spacing: 0px;
  border: 2px solid #dcdcdc;
  border-radius: 12px;

  &:hover {
    border: none;
    box-shadow: 0 8px 5px #00000010;
  }

  & div {
    width: 62.01320266723633px;
    height: 62px;
  }

  & h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #1ba986;
  }

  & p {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    color: #0e3b51;
  }
`;

function BenefitsCard({ imgSrc, title, text }) {
  return (
    <Card>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </Card>
  );
}

export default BenefitsCard;
