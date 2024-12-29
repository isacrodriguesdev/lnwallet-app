import styled from "styled-components/native";

export default () => null;

export const Container = styled.View`
    flex: 1;
    background-color: white;
    justify-content: space-between;
    gap: 24px;
    padding: 16px;
`;

export const ValueRoot = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const ValueText = styled.Text`
    font-size: 24px;
    font-weight: 800;
`;

export const AddressArea = styled.View`
    display: flex;
    flex-direction: column;
    gap: 42px;
`;

export const AddressBox = styled.View`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
  border-radius: 14px;
  background-color: #f4f5f6;
`;

export const AddressQRCodeRoot = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 14px;
`;

export const AddressQRCodeImage = styled.Image`
  width: 180px;
  height: 180px;
`;

export const AddressText = styled.Text`
    font-size: 13px;
    color: #484848;
    font-family: "Inter_400Regular";
`;

export const AddressValueRoot = styled.View`
    display: flex;
    flex-direction: row;
    gap: 8px;
    background-color: #f4f5f6;
    padding: 0px;
    border-radius: 8px;
    overflow: hidden;
    align-items: center;
`;

export const AddressValue = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: black;
    flex: 1; /* Permite ao texto ocupar o espaço restante */
    overflow: hidden; /* Garante que o texto não ultrapasse os limites */
    text-overflow: ellipsis; /* Adiciona os "..." ao truncar o texto */
    white-space: nowrap;
    bottom: 2px;
    font-family: "Inter_400Regular";
`;


// button de compartilhar
export const ShareButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 13px;
    border-radius: 50px;
    background-color: #0147ff;
`;

export const ShareButtonText = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: white;
    font-family: "Inter_500Medium";
`;

export const WarningText = styled.Text`
    font-size: 13px;
    font-weight: 400;
    color: #7B7B7B;
    text-align: center;
    margin-top: 16px;
    font-family: "Inter_400Regular";
`;

// invoice
export const InvoiceRoot = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
`;

export const InvoiceText = styled.Text`
    font-size: 13px;
    font-weight: 400;
    color: #484848;
    font-family: "Inter_400Regular";
`;

export const InvoiceValue = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: black;
    font-family: "Inter_700Bold";
`;

// invoice button to input value
export const InvoiceValueButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
    border-radius: 50px;
    border: 1px solid rgb(224, 229, 235);
`;

export const InvoiceValueButtonText = styled.Text`
    font-size: 13px;
    font-weight: 400;
    color: black;
    font-family: "Inter_500Medium";
`;