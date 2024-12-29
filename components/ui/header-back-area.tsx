import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View } from "react-native";
import styled from "styled-components/native";

interface StateProps {
  title: string;
}

interface ActionProps {
  button?: () => JSX.Element;
}

type Props = StateProps & ActionProps;

export function HeaderBackArea({ title, button }: Props) {
  return (
    <Container>
      <Button
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="arrow-back" size={21} color="black" />
      </Button>
      <Title>{title}</Title>
      {button ? button() : <View />}
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 15px 20px;
  /* border bottom */
  border-bottom-width: 1px;
  border-bottom-color: #f4f5f6;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 20px;
  background-color: #f4f5f6;
`;
