import styled from "styled-components/native";
import { 
  TextInput, InputRoot as MainInputRoot
} from "@/app/(app)/(transfer)/styles";

export default () => null;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const InputRoot = styled(MainInputRoot)`
  flex: 1;
  gap: 48px;
`;

// teclado numérico
export const TextInputAmount = styled(TextInput).attrs({
  keyboardType: "numeric",
})`
  font-size: 36px;
  font-weight: 700;
  background-color: white;
  padding: 0;
  text-align: center;
`;

export const ValueText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color:rgb(58, 58, 58);
  text-align: center;
  font-family: "Inter_500Medium";
`;