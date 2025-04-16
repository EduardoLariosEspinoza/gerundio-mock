import BenefitsCard from "./components/BenefitsCard";
import GetInsuredStepCard from "./components/GetInsuredStepCard";
import {
  Nav,
  Container,
  MainSection,
  MainSectionDiv,
  MainButtonsDiv,
  CardsSection,
  CardsTitle,
  BenefitsCards,
  GetInsuredSection,
  GetInsuredDiv,
  GetInsuredSteps,
} from "./styles/App.styles";
import { benefits } from "./data/BenefitsCards";
import { getInsuredSteps } from "./data/getInsuredSteps";
import hamburgerMenu from "/Hamburger_icon.png";
import mainImg from "/main_img.jpeg";
import insureContractImg from "/insureContract.png";
import "./App.css";

function App() {
  return (
    <Container>
      <Nav>
        <img src={hamburgerMenu} alt="Hamburger icon" />
        <h4>Shield Plus</h4>

        <div>
          <button className="desktop" id="login">
            Login
          </button>
          <button id="get-started">Get Started</button>
        </div>
      </Nav>

      <MainSection>
        <MainSectionDiv>
          <h1>
            Smart Insurance Solutions for a Worry <span>Free Life</span>
          </h1>

          <img src={mainImg} alt="" className="mobile" />

          <p>
            Stay protected with flexible coverage that safeguards your health,
            family, and assets. Choose the right plan and enjoy financial peace
            of mind.
          </p>

          <MainButtonsDiv>
            <button id="free-quote">Get a Free Quote</button>
            <button id="plans">View Our Plans</button>
          </MainButtonsDiv>
        </MainSectionDiv>

        <div className="desktop">
          <img src={mainImg} alt="" />
        </div>
      </MainSection>

      <CardsSection>
        <CardsTitle>
          <h2>Why Thousands Trust Us for Their Insurance Needs</h2>
          <h3>
            Reliable, affordable, and hassle-free insurance solutions tailored
            for you.
          </h3>
        </CardsTitle>

        <BenefitsCards>
          {benefits.map((benefit, index) => {
            return (
              <BenefitsCard
                imgSrc={benefit.imgSrc}
                title={benefit.title}
                text={benefit.text}
                key={index}
              />
            );
          })}
        </BenefitsCards>
      </CardsSection>

      <GetInsuredSection>
        <div>
          <img src={insureContractImg} alt="" className="desktop" />
        </div>

        <GetInsuredDiv>
          <h2>Getting Insured Is Simple & Fast</h2>
          <h3>Follow these easy steps to secure your insurance plan today. </h3>
          <img src={insureContractImg} alt="" className="mobile" />

          <GetInsuredSteps>
            {getInsuredSteps.map((step, index) => {
              return (
                <GetInsuredStepCard
                  title={step.title}
                  text={step.text}
                  index={index}
                  key={index}
                />
              );
            })}
          </GetInsuredSteps>
        </GetInsuredDiv>
      </GetInsuredSection>
    </Container>
  );
}

export default App;
