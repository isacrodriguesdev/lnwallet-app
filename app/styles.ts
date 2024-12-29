import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 24px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    gap: 24px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin-bottom: 24px;
`;

export const FormContainer = styled.View`
  width: 100%;
  gap: 16px;
`;

export const FormInputContainer = styled.View`
  width: 100%;
  gap: 8px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  background-color: #f8f8f8;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 14px;
  background-color: #0147ff;
  border-radius: 50px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;
