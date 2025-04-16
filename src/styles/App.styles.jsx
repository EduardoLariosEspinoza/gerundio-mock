import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (min-width: 1260px) {
    gap: 5rem;
  }
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

  @media screen and (min-width: 1260px) {
    & h4 {
      font-weight: 600;
      font-size: 28px;
      line-height: 42px;
      letter-spacing: 0px;
    }

    & #login {
      height: 100%;
      border: none;
      border-bottom: 2px solid #0e3b51;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0px;
    }

    & #get-started {
      width: 141px;
      height: 47px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const NavOptions = styled.div`
  display: flex;
  gap: 1rem;

  & a {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #0e3b51;
    text-decoration: none;
  }
`;

export const NavButtons = styled.div`
  @media screen and (min-width: 1260px) {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const MainSection = styled.section`
  display: flex;

  @media screen and (min-width: 1260px) {
  }
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

  @media screen and (min-width: 1260px) {
    width: 50%;
    align-items: flex-start;
    text-align: left;
  }
`;

export const MainSectionImg = styled.div`
  @media screen and (min-width: 1260px) {
    width: 50%;
    display: flex;
    justify-content: flex-end;

    & img {
      border-radius: 18px;
    }
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

  @media screen and (min-width: 1260px) {
    flex-direction: row;
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

  @media screen and (min-width: 1260px) {
    align-items: flex-start;
    width: 48%;
    text-align: left;

    & h2 {
      font-size: 38px;
      line-height: 57px;
    }
  }
`;

export const BenefitsCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width: 1260px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`;

export const GetInsuredSection = styled.section`
  display: flex;

  @media screen and (min-width: 1260px) {
    gap: 1rem;
  }
`;

export const GetInsuredImg = styled.div`
  @media screen and (min-width: 1260px) {
    display: flex;
    align-items: center;
    width: 48%;
    padding-right: 1rem;

    & img {
      width: 100%;
    }
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

  @media screen and (min-width: 1260px) {
    justify-content: space-evenly;
    width: 52%;
    text-align: left;
    align-items: flex-start;

    & > h2 {
      font-size: 38px;
      line-height: 57px;
    }
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

  @media screen and (min-width: 1260px) {
    margin-top: 0;
  }
`;

export const ContactSection = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 2rem;

  @media screen and (min-width: 1260px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 3rem;
    padding: 2rem 0;
  }
`;

export const ContactIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  letter-spacing: 0px;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #1ba986;
  }

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    color: #0e3b51;
  }

  @media screen and (min-width: 1260px) {
    text-align: left;
    align-items: flex-start;

    h2 {
      height: 57px;
    }
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  letter-spacing: 0px;

  & h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #1ba986;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #0e3b51;
  }

  & div a {
    text-decoration: none;
    color: #0e3b51;
  }

  @media screen and (min-width: 1260px) {
    text-align: left;
    align-items: flex-start;

    h3 {
      height: 57px;
    }

    & div {
      text-align: left;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      gap: 2rem;
      grid-row: 1 / 3;
    }
  }
`;

export const ContactSuscribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
  letter-spacing: 0px;

  & > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #1ba986;
  }

  & > p {
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: #0e3b51;
  }

  @media screen and (min-width: 1260px) {
    text-align: left;
    align-items: flex-start;
  }
`;

export const ContactSuscribeFormDiv = styled.div`
  position: relative;
  width: 80%;
  height: 38px;
  display: flex;
  align-items: center;

  & input {
    width: 100%;
    height: 100%;
    border: 1px solid #0e3b51;
    border-radius: 4px;
    padding-left: 0.5rem;
  }

  & input::placeholder {
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0px;
    color: #0e3b51;
  }

  & button {
    width: 28%;
    height: 80%;
    position: absolute;
    right: 0.2rem;
    border: none;
    background: #1ba986;
    color: white;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;
    border-radius: 4px;
  }
`;

export const ContactLogos = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  & img {
    height: 36px;
  }

  @media screen and (min-width: 1260px) {
    text-align: left;
    justify-content: flex-start;
    gap: 5rem;
  }
`;

export const ContactMediaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media screen and (min-width: 1260px) {
    width: 100%;
    align-items: flex-start;
    margin-top: 2rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 1260px) {
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #0e3b51;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;

  & a {
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #0e3b51;
  }

  @media screen and (min-width: 1260px) {
    gap: 4rem;
    align-items: flex-end;
    padding: 0;

    & a {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const FooterCopyright = styled.div`
  padding-top: 2.5rem;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0px;
  color: #0e3b51;
  border-top: 1px solid #0e3b51;

  @media screen and (min-width: 1260px) {
    border: none;
  }
`;
