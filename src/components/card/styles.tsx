import styled from "styled-components";

export const SCardWrapper = styled.div`
  width: 100%;
  min-width: 300px;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--darkGrey);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const SCardImage = styled.img`
  position: absolute;
  top: 0;
  max-height: 240px;
`;

export const SCardHeartBanner = styled.div`
  position: absolute;
  top: -42px;
  left: 0px;
  background-color: #fff;
  width: 36px;
  height: 150px;
  z-index: 1;
  transform: rotate(45deg);

  img {
    transform: rotate(-45deg);
    position: absolute;
    top: 52px;
    left: 7px;
    cursor: pointer;
    transition: transform 0.2s ease;


    &:hover {
      transform: rotate(-45deg) scale(1.1);
  }
}
`;


export const SCardFooter = styled.div`
  width: -webkit-fill-available;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
