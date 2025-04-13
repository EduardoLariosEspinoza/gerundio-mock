import {
  Nav,
  Container,
  MainSection,
  MainSectionDiv,
  MainButtonsDiv,
} from "./App.styles";
import hamburgerMenu from "/Hamburger_icon.png";
import mainImg from "/main_img.jpeg";
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
    </Container>
  );
}

export default App;
