import styled from "styled-components";

export const SCardWrapper = styled.div`
  width: 100%;
  min-width: 300px;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--beige);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(191, 167, 106, 0.08);
  transition:
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-within {
    box-shadow: 0 8px 24px rgba(191, 167, 106, 0.18);
    transform: scale(1.025);
    cursor: pointer;
  }

  // &::after {
  //   content: "";
  //   position: absolute;
  //   inset: 0;
  //   background: rgba(40, 30, 10, 0.18);
  //   opacity: 0;
  //   transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  //   pointer-events: none;
  //   z-index: 2;
  // }

  // &:hover::after,
  // &:focus-within::after {
  //   opacity: 1;
  // }

  // &::before {
  //   content: "View More";
  //   position: absolute;
  //   top: 40%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   font-size: 1.5rem;
  //   color: #fff;
  //   opacity: 0;
  //   z-index: 3;
  //   pointer-events: none;
  //   transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  //   font-family: inherit;
  //   font-weight: 600;
  //   letter-spacing: 0.04em;
  //   text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  // }

  // &:hover::before,
  // &:focus-within::before {
  //   opacity: 1;
  // }
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

    &:focus-visible {
      transform: rotate(-45deg) scale(1.1);
      outline: 2px solid var(--darkGrey);
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

    &:focus-visible {
      transform: scale(1.1);
      outline: 2px solid var(--darkGrey);
    }
  }
`;
