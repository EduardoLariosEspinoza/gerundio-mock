import BenefitsCard from "./components/BenefitsCard";
import ContactMedia from "./components/ContactMedia";
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
  ContactSection,
  ContactIntro,
  ContactLinks,
  ContactSuscribe,
  ContactSuscribeFormDiv,
  ContactLogos,
  ContactMediaDiv,
  Footer,
  FooterLinks,
  FooterCopyright,
} from "./styles/App.styles";
import { benefits } from "./data/BenefitsCards";
import { getInsuredSteps } from "./data/getInsuredSteps";
import hamburgerMenu from "/Hamburger_icon.png";
import mainImg from "/main_img.jpeg";
import insureContractImg from "/insureContract.png";
import emailLogo from "/emailLogo.png";
import facebookLogo from "/facebookLogo.png";
import phoneLogo from "/phoneLogo.png";
import twitterLogo from "/twitterLogo.png";

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

      <ContactSection>
        <ContactIntro>
          <h2>Shield Plus</h2>
          <p>
            Providing reliable coverage for health, life, travel, and assets
            with seamless claim processes and 24/7 support.
          </p>
        </ContactIntro>

        <ContactLinks>
          <h3>Quick Links</h3>
          <div>
            <a href="">Insurance Plans</a>
            <a href="">Customer Support</a>
            <a href="">Claims Assistance</a>
            <a href="">About Us</a>
          </div>
        </ContactLinks>

        <ContactSuscribe>
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Providing reliable coverage for health, life, travel, and assets
            with seamless claim processes and 24/7 support.
          </p>

          <ContactSuscribeFormDiv>
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </ContactSuscribeFormDiv>

          <ContactLogos>
            <img src={twitterLogo} alt="" />
            <img src={facebookLogo} alt="" />
          </ContactLogos>
        </ContactSuscribe>

        <ContactMediaDiv>
          <ContactMedia imgSrc={phoneLogo}>+(123) 456-7890</ContactMedia>
          <ContactMedia imgSrc={emailLogo}>
            support@Shield Plus.com
          </ContactMedia>
        </ContactMediaDiv>
      </ContactSection>

      <Footer>
        <FooterLinks>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Licensing</a>
        </FooterLinks>

        <FooterCopyright>
          <p>© 2025 Shield Plus. All Rights Reserved.</p>
        </FooterCopyright>
      </Footer>
    </Container>
  );
}

export default App;
