import styled from "styled-components";

export const Section = styled.section`
  img {
    width: 40px;
  }
  h3{
    margin-bottom: 3rem;
  }
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
  min-width: 25%;
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
