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

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

export const SCardImage = styled.img`
  position: absolute;
  top: 0;
`;

export const SCardFooter = styled.div`
  background-color: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
