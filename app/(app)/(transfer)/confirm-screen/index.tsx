import {
  AmountArea,
  AmountText,
  AmountTitle,
  ButtonArea,
  InfoBox,
  InfoRoot,
  InfoTitle,
  InfoValue,
  TransferButton,
  TransferButtonText,
} from "@/app/(app)/(transfer)/confirm-screen/styles";
import { Container } from "@/assets/styles/main";
import { HeaderBackArea } from "@/components/ui/header-back-area";
import { router } from "expo-router";
import { Fragment } from "react";

export default function TransferConfirmScreen() {
  return (
    <Fragment>
      <HeaderBackArea title="Confirmar transferência" />
      <Container justify="space-between" align="center">
        <AmountArea>
          <AmountTitle>Enviando</AmountTitle>
          <AmountText>760870 SAT</AmountText>
          <AmountTitle>Para</AmountTitle>
          <AmountTitle numberOfLines={1} ellipsizeMode="tail">
            lnbc2500n1p06csrypp5yajmg5yaeky65ftydw72cdsjuefd7cnjhsh74q79jrhlaf0pz7asdp6c6tu82nxqgrddhkszmt9va32yzyl3yygmukhr0jj2uxvrhxrpv6kww76k9m9qmncrhyqmlmw5r7mksmdhykz5gd0mu57mmu40yf0rpxnxjnljmdgxl6p5psecnynpnvxyfcjnghp30stth5jmkleqj4y43c3lwq550mca398ndsnpxxwa89467gp6jmq07q8qmtn9dcsrz
          </AmountTitle>
        </AmountArea>

        <ButtonArea>
          <InfoRoot>
            <InfoBox>
              <InfoTitle>Valor</InfoTitle>
              <InfoValue>$100,00</InfoValue>
            </InfoBox>
            <InfoBox>
              <InfoTitle>Taxa</InfoTitle>
              <InfoValue>268 SAT</InfoValue>
            </InfoBox>
          </InfoRoot>
          <TransferButton
            onPress={() => {
              router.push("/(app)");
            }}
          >
            <TransferButtonText>Enviar</TransferButtonText>
          </TransferButton>
        </ButtonArea>
      </Container>
    </Fragment>
  );
}
