import styled from "styled-components";

export const SNavbarWrapper = styled.div`
  width: 100svw;
  height: 60px;
  border-bottom: 1px solid var(--brown);
`;

export const SNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  &:hover a {
    cursor: pointer;
  }
`;

export const SNavUserLinks = styled.div`
  display: flex;
  gap: 32px;
`;
