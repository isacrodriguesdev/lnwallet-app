import {
  Container,
  TextInputAmount,
  ValueText,
  InputRoot,
} from "@/app/(app)/(transfer)/amount-screen/styles";

import {
  InputTitle,
  InputAreaRow,
  InputAddressTextPasteButton,
  InputAddressTextPaste,
  InputAreaColumn,
} from "@/app/(app)/(transfer)/styles";

import {
  ButtonContinue,
  ButtonContinueText,
} from "@/app/(app)/(transfer)/styles";
import { HeaderBackArea } from "@/components/ui/header-back-area";
import { router } from "expo-router";
import { Fragment, useState } from "react";
import { Text } from "react-native";

export default function TransferAmountScreen() {
  const [amount, setAmount] = useState("");

  return (
    <Fragment>
      <HeaderBackArea title="Transferir" />
      <Container>
        {/* <View /> */}
        <InputRoot>
          <InputAreaRow>
            <InputTitle>Total em conta</InputTitle>
            <InputAddressTextPasteButton onPress={() => {}}>
              <InputAddressTextPaste>200 SAT</InputAddressTextPaste>
            </InputAddressTextPasteButton>
          </InputAreaRow>
          <InputAreaColumn>
            <Text>Inserir valor</Text>
            <TextInputAmount
              placeholder="0"
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
            <ValueText>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(200)}
            </ValueText>
          </InputAreaColumn>
        </InputRoot>

        <ButtonContinue
          onPress={() => {
            router.push("/(app)/(transfer)/confirm-screen");
          }}
        >
          <ButtonContinueText>Continuar</ButtonContinueText>
        </ButtonContinue>
      </Container>
    </Fragment>
  );
}
