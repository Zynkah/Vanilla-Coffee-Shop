import { SCardFooter, SCardImage, SCardWrapper } from "./styles";

export const Card = () => {
  return (
    <SCardWrapper>
      <SCardImage src="/vanilla.jpg" alt="Vanilla Coffee" width={350} />
      <SCardFooter>CARD COMPONENT</SCardFooter>
    </SCardWrapper>
  );
};
