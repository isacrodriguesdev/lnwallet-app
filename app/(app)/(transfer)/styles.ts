import styled from "styled-components/native";

export default () => null;

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    gap: 24px;
    justify-content: space-between;
`;

export const InputRoot = styled.View`
    gap: 16px;
`;

export const InputAreaRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const InputAreaColumn = styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3px;
`;

export const InputTitle = styled.Text`
    flex: 1;
    color: black;
    font-size: 16px;
    font-family: "Roboto_500Medium";
`;

export const InputAddressTextPasteButton = styled.TouchableOpacity`
    padding: 10px 10px;
    border-radius: 50px;
    background-color: white;
`;

export const InputAddressTextPaste = styled.Text`
    color: #0147ff;
    font-size: 14px;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    border-radius: 8px;
    padding: 14px 12px;
    background-color: #f4f5f6;
`;

// botão de ler qrcode
export const ButtonRead = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: white;
    border: 1px solid #EEEEEE;
    padding: 10px;
    border-radius: 50px;
`;

export const ButtonReadText = styled.Text`
    color: black;
    font-size: 13px;
    font-family: "Inter_500Medium";
`;

// botão de enviar
export const ButtonContinue = styled.TouchableOpacity`
    width: 100%;
    background-color: #0147ff;
    padding: 15px;
    border-radius: 50px;
    align-items: center;
`;

export const ButtonContinueText = styled.Text`
    color: white;
    font-size: 16px;
    font-family: "Inter_500Medium";
`;