import React, { Fragment } from "react";
import { HeaderBackArea } from "@/components/ui/header-back-area";
import {
  Container,
  ButtonContinue,
  ButtonRead,
  TextInput,
  ButtonReadText,
  ButtonContinueText,
  InputRoot,
  InputTitle,
  InputAreaRow,
  InputAddressTextPaste,
  InputAddressTextPasteButton,
} from "@/app/(app)/(transfer)/styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SendToAddressScreen() {
  return (
    <Fragment>
      <HeaderBackArea title="Transferir" />
      <Container>
        <InputRoot>
          <InputAreaRow>
            <InputTitle>
              Insira a chave Bitcoin Ligthning Network
            </InputTitle>
            <InputAddressTextPasteButton>
              <InputAddressTextPaste>Colar chave</InputAddressTextPaste>
            </InputAddressTextPasteButton>
          </InputAreaRow>
          <TextInput placeholder="ex: lnurl..." />
          <ButtonRead>
            <Ionicons name="camera-outline" size={20} color="black" />
            <ButtonReadText>Ler QR Code</ButtonReadText>
          </ButtonRead>
        </InputRoot>

        <ButtonContinue
          onPress={() => {
            router.push("/(app)/(transfer)/amount-screen");
          }}
        >
          <ButtonContinueText>Continuar</ButtonContinueText>
        </ButtonContinue>
      </Container>
    </Fragment>
  );
}
