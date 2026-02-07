import styled from "styled-components";

export const SHeroWrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    font-family: "Cormorant Garamond", serif;
    color: var(--brown);
    text-shadow: 1px 1px 0 #fff8e1;
  }
  h2 {
    font-family: "Dancing Script", cursive;
    color: var(--grey);
  }

  p {
    font-style: italic;
    color: var(--brown);
  }

  img {
    width: 100%;
    max-width: 250px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const SHeroContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const SMapWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-bottom: 1px solid var(--brown);
  background-size: cover;
  background-position: center;
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
    url("/map.jpg");
`;
