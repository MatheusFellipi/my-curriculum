import styled from "styled-components";

export const Img = styled.img`
  border-radius: 1250px;
  width: 250px;
  border: 1rem solid #252525;
`;

export const Section = styled.section`
  border: 1px solid #585858;
  padding: 10px;
  margin: 1rem;
  p {
    color: #bdb7af;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  li {
    cursor: pointer;
    margin: 0.2rem;
  }
  img {
    width: 25px;
  }
`;
