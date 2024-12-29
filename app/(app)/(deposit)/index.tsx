import {
  Container,
  AddressBox,
  AddressQRCodeImage,
  AddressQRCodeRoot,
  AddressText,
  AddressValue,
  ShareButton,
  ShareButtonText,
  AddressArea,
  WarningText,
  AddressValueRoot,
  InvoiceRoot,
  InvoiceText,
  InvoiceValue,
  InvoiceValueButton,
  InvoiceValueButtonText,
} from "@/app/(app)/(deposit)/styles";
import { HeaderBackArea } from "@/components/ui/header-back-area";
import { Feather, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

export default function DepositScreen() {
  const [address, setAddress] = useState<string>(
    "lnurl1dp68gurn8ghj7mrww3hj6mrww4ejzumw9e3hxumpwvhxuamfdcskwvp"
  );

  const [value, setValue] = useState<number>(0);

  return (
    <>
      <HeaderBackArea title="Depositar" />
      <Container>
        <AddressArea>
          <AddressQRCodeRoot>
            <AddressQRCodeImage
              source={{
                cache: "force-cache",
                uri:
                  "https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=" +
                  address,
              }}
            />
          </AddressQRCodeRoot>

          <InvoiceRoot>
            <InvoiceText>Valor total a ser depositado</InvoiceText>
            {value === 0 ? (
              <InvoiceValueButton>
                <InvoiceValueButtonText>Adicionar valor</InvoiceValueButtonText>
              </InvoiceValueButton>
            ) : (
              <InvoiceValue>
                {new Intl.NumberFormat("en-US").format(value)} SAT
              </InvoiceValue>
            )}
          </InvoiceRoot>

          <AddressBox>
            <AddressText>Endereço de depósito</AddressText>
            <AddressValueRoot>
              <AddressValue>{address}</AddressValue>
              <Feather name="copy" size={15} color="black" />
            </AddressValueRoot>
          </AddressBox>
        </AddressArea>

        <WarningText>
          Envie apenas BTC (Lightning Network) para este endereço de depósito.
          Outras redes de Bitcoin não são suportadas e os fundos podem ser
          perdidos.
        </WarningText>

        <StatusBar backgroundColor="white" style="dark" />
      </Container>
    </>
  );
}
