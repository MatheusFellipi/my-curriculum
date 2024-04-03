import styled from "styled-components";

export const Section = styled.section`
  margin: 1rem;
  border: 1px solid #585858;
  padding: 20px;
  min-width: 25%;
  img {
    width: 40px;
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: 3rem;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 90px;
    padding: 10px;
    height: 90px;
    border: 1px solid #585858;
    cursor: pointer;
    background-image: repeating-linear-gradient(
      35deg,
      transparent,
      transparent 4px,
      #585858 1px,
      #000 5px
    );



    p {
      margin: 0.3rem 0 0 0;
      font-size: 5px;
      color: #fff;
    }
  }
`;
