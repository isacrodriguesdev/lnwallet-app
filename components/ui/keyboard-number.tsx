import { Feather, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import styled from "styled-components/native";

type StateProps = {};

type ActionProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

interface Props extends StateProps, ActionProps {}

export function Keyboard({ setValue }: Props) {
  function handlePress(value: string) {
    setValue((prev) => prev + value);
  }

  function handleDelete() {
    setValue((prev) => prev.slice(0, -1));
  }

  return (
    <KeyboardContainer>
      <KeyboardRow>
        <KeyboardButton onPress={() => handlePress("1")}>
          <KeyboardButtonText>1</KeyboardButtonText>
        </KeyboardButton>
        <KeyboardButton onPress={() => handlePress("2")}>
          <KeyboardButtonText>2</KeyboardButtonText>
        </KeyboardButton>
        <KeyboardButton onPress={() => handlePress("3")}>
          <KeyboardButtonText>3</KeyboardButtonText>
        </KeyboardButton>
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton onPress={() => handlePress("4")}>
          <KeyboardButtonText>4</KeyboardButtonText>
        </KeyboardButton>
        <KeyboardButton onPress={() => handlePress("5")}>
          <KeyboardButtonText>5</KeyboardButtonText>
        </KeyboardButton>
        <KeyboardButton onPress={() => handlePress("6")}>
          <KeyboardButtonText>6</KeyboardButtonText>
        </KeyboardButton>
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton onPress={() => handlePress("7")}>
          <KeyboardButtonText>7</KeyboardButtonText>
        </KeyboardButton>
        <KeyboardButton onPress={() => handlePress("8")}>
          <KeyboardButtonText>8</KeyboardButtonText>
        </KeyboardButton>
        <KeyboardButton onPress={() => handlePress("9")}>
          <KeyboardButtonText>9</KeyboardButtonText>
        </KeyboardButton>
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton onPress={() => handlePress(".")}>
          <Entypo name="dot-single" size={24} color="black" />
        </KeyboardButton>
        <KeyboardButtonDot onPress={() => handlePress("0")}>
          <KeyboardButtonText>0</KeyboardButtonText>
        </KeyboardButtonDot>
        <KeyboardButtonDot onPress={handleDelete}>
          <Feather name="delete" size={24} color="black" />
        </KeyboardButtonDot>
      </KeyboardRow>
    </KeyboardContainer>
  );
}

export const KeyboardContainer = styled.View`
  background-color: white;
`;

export const KeyboardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
`;

export const KeyboardButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.65,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 55px;
  background-color: #f1f1f1;
  margin: 5px;
  border-radius: 12px;
`;

export const KeyboardButtonText = styled.Text`
  font-size: 24px;
  color: #333;
  font-weight: 800;
`;

export const KeyboardButtonAction = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #0f50e9;
  margin: 5px;
`;

export const KeyboardButtonActionText = styled.Text`
  font-size: 20px;
  color: white;
`;

export const KeyboardButtonDelete = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #f1f1f1;
  margin: 5px;
`;

export const KeyboardButtonDeleteText = styled.Text`
  font-size: 20px;
  color: #333;
`;

// erdar de KeyboardButton
export const KeyboardButtonDot = styled(KeyboardButton)``;

export const KeyboardButtonDotText = styled.Text`
  font-size: 20px;
  color: #333;
`;
