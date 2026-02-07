import styled from "styled-components";

export const SPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100svh;
`;

export const SProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
`;

export const SSectionTitle = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  color: var(--brown);
  display: inline-block;
  padding: 0 12px;
  margin-bottom: 1rem;
`;