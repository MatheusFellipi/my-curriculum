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
  display: flex;
  list-style: none;
  li {
    margin: 0.2rem;
    position: relative;

    div {
      position: absolute;
      background: #181A1B;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      border: 2px solid #585858;
      top: 15px;
      left: -34px;
    }

    span {
      font-size: 12px;
    }

    p {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  img {
    width: 25px;
  }
`;
