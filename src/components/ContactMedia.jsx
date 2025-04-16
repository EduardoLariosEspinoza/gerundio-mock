import styled from "styled-components";

export const MediaDiv = styled.div`
  width: 90%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 38px 1fr;
  grid-template-rows: auto;
  align-items: center;

  & img {
    width: 38px;
  }

  & p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0px;
    color: #0e3b51;
  }
`;

function ContactMedia({ imgSrc, children }) {
  return (
    <MediaDiv>
      <img src={imgSrc} alt="" />
      <p>{children}</p>
    </MediaDiv>
  );
}

export default ContactMedia;
