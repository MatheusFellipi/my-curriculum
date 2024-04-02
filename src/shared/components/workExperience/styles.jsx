import styled from "styled-components";

export const Section = styled.section`
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
      background: #000;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      border: 2px solid;
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
