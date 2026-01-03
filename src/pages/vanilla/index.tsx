import styled from "styled-components";
import { Card } from "../../components/card";
import { SPageWrapper } from "../../styles";

export const SProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
`;

export const VanillaPage = () => {
  return (
    <SPageWrapper>
      <h1>VANILLA PAGE</h1>
      <SProductsWrapper>
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} />
        ))}
      </SProductsWrapper>
    </SPageWrapper>
  );
};
