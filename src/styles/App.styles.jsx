import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & img {
    width: 48px;
  }

  & h4 {
    color: #1ba986;
  }

  & #get-started {
    background-color: #1ba986;
    width: 83px;
    height: 29px;
    top: 82px;
    left: 329px;
    border-radius: 4px;
    border: none;

    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;
    color: white;
  }
`;

export const MainSection = styled.section`
  display: flex;
`;

export const MainSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  letter-spacing: 0px;

  & > img {
    width: 100%;
    max-width: 603px;
    border-radius: 14px;
  }

  & > h1 {
    font-weight: 600;
    font-size: 37px;
    line-height: 55.5px;
  }

  & span {
    color: #1ba986;
  }

  & p {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    color: #0e3b51;
  }
`;

export const MainButtonsDiv = styled.div`
  padding: 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  & button {
    width: 261px;
    height: 84px;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0px;
  }

  & > #free-quote {
    background: #1ba986;
    color: white;
  }

  & > #plans {
    border: 2px solid #0e3b51;
  }
`;

export const CardsSection = styled.section`
  padding: 3rem 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardsTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  letter-spacing: 0px;

  & h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
  }

  & h3 {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const BenefitsCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const GetInsuredSection = styled.section`
  display: flex;

  @media screen and (min-width: 1260px) {
    gap: 1rem;
  }
`;

export const GetInsuredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0px;
  color: #0e3b51;
  text-align: center;

  & > h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
  }

  & > h3 {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 2rem;
  }
`;

export const GetInsuredSteps = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  letter-spacing: 0px;
  color: #0e3b51;
`;
