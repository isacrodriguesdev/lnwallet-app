import styled from "styled-components/native";

export const AmountArea = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 12px;
`;

export const AmountTitle = styled.Text`
    font-size: 14px;
    color: #000;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    white-space: nowrap;
`;

export const AmountText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #000;
`;

export const InfoRoot = styled.View`
    gap: 16px;
    padding: 10px;
`;

export const InfoBox = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const InfoTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #363A3F;
`;

export const InfoValue = styled.Text`
    font-size: 16px;
    color: #000;
`;

export const TransferButton = styled.TouchableOpacity`
    width: 100%;
    background-color: #0147ff;
    padding: 15px;
    border-radius: 50px;
    align-items: center;
`;

export const TransferButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

export const ButtonArea = styled.View`
    width: 100%;
    gap: 36px;
`;