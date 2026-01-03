import styled from "styled-components";

export const SNavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
`;
