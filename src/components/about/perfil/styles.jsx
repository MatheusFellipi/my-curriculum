import styled from "styled-components";

export const Img = styled.img`
  border-radius: 250px;
  width: 250px;
  border: 1rem solid #252525;
`;

export const Section = styled.section`
  background-image: repeating-linear-gradient(
    35deg,
    transparent,
    transparent 4px,
    #585858 1px,
    #000 5px
  );

  border: 1px solid #585858;
  padding: 10px;
  margin: 1rem;

  p {
    color: #bdb7af;
    margin-top: 10px;
    margin-bottom: 1rem;
  }
  a {
    color: #bdb7af;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
