import styled from "styled-components";

export const Section = styled.section`
  margin: 1rem;

  img {
    width: 40px;
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: 3rem;
  }
  border: 1px solid #585858;
  padding: 20px;
`;

export const Ul = styled.ul`
  li {
    margin-top: 4rem;
    position: relative;
    div {
      position: absolute;
      background: #181a1b;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      border: 2px solid #585858;
      top: 0px;
      left: -34px;
    }
    p {
      margin: 1rem 0 1rem 0;
      text-transform: capitalize;
    }
    p.description {
      color: #bdb7af;
    }
  }
`;
