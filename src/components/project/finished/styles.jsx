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
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    @media only screen and (max-width: 320px) {
      margin: 0.5rem;
    }

    img {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      object-fit: cover

    }

    margin: 1rem;

    width: 90px;
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

    a {
      position: relative;

      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    :hover {
      p,
      h6 {
        opacity: 0;
      }
      img {
        opacity: 1;
      }
    }

    p {
      margin: 0.3rem 0 0 0;
      font-size: 5px;
      color: #fff;
    }
  }
`;
