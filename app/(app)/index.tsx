import { Feather, Ionicons } from "@expo/vector-icons";

import Container, {
  ActionButton,
  ActionButtonText,
  ProfileImage,
  BalanceText,
  BalanceTitle,
  BalanceView,
  BalanceViewActions,
  BalanceViewCard,
  Header,
  HeaderActions,
  HeaderTitle,
  ProfileContainer,
  ActionButtonIconContent,
  InfoContainer,
  InfoBox,
  InfoBoxTitle,
  InfoBoxValue,
  InfoRow,
  HeaderRoot,
  HistoryTitle,
  HistoryList,
  HistoryItem,
  HistoryItemRow,
  HistoryItemColumn,
  HistoryItemTitle,
  HistoryItemTypeText,
  HistoryItemValue,
  HistoryItemDate,
  HistoryRoot,
  HistoryItemIconRoot,
  BalanceValue,
} from "@/app/(app)/styles";
import { useEffect, useState } from "react";
import { Transaction } from "@/types/Transaction";
import { _transactions } from "@/data/_transactions";
import { ScrollView, Text, View } from "react-native";
import { useSession } from "@/contexts/SessionContext";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const { user, signOut } = useSession();

  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetch() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setTransactions(_transactions);
    setBalance(Math.floor(Math.random() * 1000000));
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <ScrollView>
      <Container>
        <HeaderRoot>
          <Header>
            <HeaderTitle>My Bank</HeaderTitle>
            <HeaderActions>
              <ProfileContainer
                onPress={() => {
                  signOut(() => {
                    router.push("/sign-in");
                  });
                }}
              >
                <ProfileImage source={{ uri: user.avatar }} />
              </ProfileContainer>
            </HeaderActions>
          </Header>

          <BalanceViewCard>
            <BalanceView>
              <BalanceTitle>Total em conta (SAT)</BalanceTitle>
              <BalanceText>
                {new Intl.NumberFormat("en-US").format(balance)}
              </BalanceText>
              {/* <BalanceValue>
                {(balance / 100000000).toFixed(8)} BTC
              </BalanceValue> */}
            </BalanceView>

            <BalanceViewActions>
              <ActionButton onPress={() => router.push("/(app)/(transfer)")}>
                <ActionButtonIconContent>
                  <Feather name="arrow-up" size={19} color="black" />
                </ActionButtonIconContent>
                <ActionButtonText>Enviar</ActionButtonText>
              </ActionButton>

              <ActionButton
                backgroundColor="#0147ff"
                onPress={() => {
                  router.push("/(app)/(deposit)");
                }}
              >
                <ActionButtonIconContent backgroundColor="#2664ffc8">
                  <Feather name="arrow-down" size={19} color="white" />
                </ActionButtonIconContent>
                <ActionButtonText color="white">Receber</ActionButtonText>
              </ActionButton>
            </BalanceViewActions>
          </BalanceViewCard>
        </HeaderRoot>

        <InfoContainer>
          <InfoRow>
            <InfoBox>
              <Ionicons name="wallet-outline" size={24} color="black" />
              <InfoBoxTitle>Saldo</InfoBoxTitle>
              <InfoBoxValue>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(875.92)}
              </InfoBoxValue>
            </InfoBox>

            <InfoBox>
              <Ionicons
                name="shield-checkmark-outline"
                size={24}
                color="black"
              />
              <InfoBoxTitle>Score</InfoBoxTitle>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <InfoBoxValue style={{ bottom: 1 }}>280</InfoBoxValue>
                <Text> / 1000</Text>
              </View>
            </InfoBox>
          </InfoRow>

          <InfoRow>
            <InfoBox>
              <Ionicons name="trending-up-outline" size={22} color="black" />
              <InfoBoxTitle>Entrada Total</InfoBoxTitle>
              <InfoBoxValue>
                {new Intl.NumberFormat("en-US").format(
                  Math.floor(Math.random() * 1000000)
                )}
              </InfoBoxValue>
            </InfoBox>

            <InfoBox>
              <Ionicons name="trending-down-outline" size={22} color="black" />
              <InfoBoxTitle>Saída Total</InfoBoxTitle>
              <InfoBoxValue>
                {new Intl.NumberFormat("en-US").format(
                  Math.floor(Math.random() * 1000000)
                )}
              </InfoBoxValue>
            </InfoBox>
          </InfoRow>
        </InfoContainer>

        <HistoryRoot>
          <HistoryTitle>Transações</HistoryTitle>

          <HistoryList>
            {transactions.map((transaction) => (
              <HistoryItem key={transaction.id}>
                <HistoryItemRow>
                  {transaction.type === "income" ? (
                    <HistoryItemIconRoot color="#2f7c573b">
                      <Ionicons name="arrow-down" size={19} color="#2F7C57" />
                    </HistoryItemIconRoot>
                  ) : (
                    <HistoryItemIconRoot color="#ffd1d981">
                      <Ionicons name="arrow-up" size={19} color="#B54548" />
                    </HistoryItemIconRoot>
                  )}
                  <HistoryItemColumn>
                    <HistoryItemTitle>
                      {transaction.type === "income" ? "Recebido" : "Enviado"}
                    </HistoryItemTitle>
                    <HistoryItemTypeText>
                      {transaction.createdAt.toLocaleTimeString()}
                    </HistoryItemTypeText>
                  </HistoryItemColumn>
                </HistoryItemRow>

                <HistoryItemColumn>
                  <HistoryItemValue>
                    {transaction.type === "income" ? "+" : ""}
                    {new Intl.NumberFormat().format(transaction.amount)}
                  </HistoryItemValue>
                  <HistoryItemDate>
                    {transaction.createdAt.toDateString()}
                  </HistoryItemDate>
                </HistoryItemColumn>
              </HistoryItem>
            ))}
          </HistoryList>
        </HistoryRoot>
      </Container>
    </ScrollView>
  );
}
