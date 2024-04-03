import styled from "styled-components";

export const Img = styled.img`
  border-radius: 1250px;
  width: 250px;
  border: 1rem solid #252525;
`;

export const Section = styled.section`
  img {
    width: 40px;
  }
  border: 1px solid #585858;
  padding: 10px;
  margin: 1rem;
  max-height: 500px;

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  li {
    margin: 0.2rem;
  }
  img {
    width: 25px;
  }
`;
