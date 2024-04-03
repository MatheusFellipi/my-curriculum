import styled from "styled-components";

export const CardListComponent = ({ data }) => (
  <>
    <Ul>
      {data?.map((item) => (
        <li key={item.name}>
          <a href={item.url} target="_blank">
            <h6>{item.name}</h6>
            <p>{item.technology}</p>
            <img src={item.img} alt={item.name} />
          </a>
        </li>
      ))}
    </Ul>
  </>
);

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
      width: 50%;
      height: 50%;
      object-fit: cover;
    }

    margin: 1rem;

    width: 300px;
    height: 300px;
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
    h6 {
      font-size: 16px;
    }
    p {
      margin: 0.3rem 0 0 0;
      font-size: 12px;
      color: #fff;
    }
  }
`;
