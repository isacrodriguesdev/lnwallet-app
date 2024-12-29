import styled from "styled-components/native";

export default styled.View`
  flex: 1;
  gap: 24px;
`;

export const HeaderRoot = styled.View`
  display: flex;
  flex-direction: column;
  /* gap: 24px; */
  padding: 0px 20px 0px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
  padding-bottom: 24px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: black;
  font-family: "Nunito_800ExtraBold";
`;

export const HeaderActions = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const HeaderAction = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 14px;
  background-color: #f0f0f0;
`;

export const ProfileContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 50px;
`;

export const ProfileName = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: 600;
`;

export const BalanceViewCard = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BalanceTitle = styled.Text`
  font-size: 14px;
  color: #666;
  font-family: "Inter_400Regular";
`;

// receber parametro de cor
export const BalanceText = styled.Text<{ color?: string, size?: string, weight?: number }>`
  font-size: ${(props) => props.size || "28px"};
  color: ${(props) => props.color || "black"};
  font-family: "Inter_700Bold";
`;

// quanto bitcoin tem
export const BalanceValue = styled.Text`
  font-size: 13px;
  color: black;
  font-family: "Inter_400Regular";
`;

export const BalanceViewActions = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
`;

export const BalanceView = styled.View`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

// um circulo com um icone
export const ActionButtonIconContent = styled.View<{ backgroundColor?: string, color?: string }>`
  border-radius: 50px;
  padding: 7px;
  background-color: ${(props) => props.backgroundColor || "#e3e5e8"};
  color: ${(props) => props.color || "black"};
`;

export const ActionButton = styled.TouchableOpacity<{ backgroundColor?: string, color?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  flex: 1;
  padding: 7px 8px;
  border-radius: 50px;
  background-color: ${(props) => props.backgroundColor || "#f4f5f6"};
  color: ${(props) => props.color || "black"};
`;

// button text
export const ActionButtonText = styled.Text<{ color?: string }>`
  font-size: 15px;
  color: ${(props) => props.color || "black"};
  font-weight: 500;
  font-family: "Inter_500Medium";
`;

export const OutherActionsContainer = styled.ScrollView`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const OutherActionItem = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-right: 16px;
`;

export const OutherActionButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
  border-radius: 20px;
  background-color: #f0f0f0;
`;

export const OutherActionButtonText = styled.Text`
  font-size: 13px;
  color: black;
  font-weight: 400;
  letter-spacing: 0.2px;
`;

// history

export const HistoryRoot = styled.View`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 20px;
  padding-bottom: 24px;
`;

export const HistoryTitle = styled.Text`
  font-size: 18px;
  color: black;
  font-family: "Lato_700Bold";
`;

export const HistoryList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HistoryItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HistoryItemRow = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const HistoryItemIconRoot = styled.View<{ color?: string; }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 12px;
  background-color: ${(props) => props.color || "#f0f0f0"};
`;

export const HistoryItemColumn = styled.View`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const HistoryItemTitle = styled.Text`
  font-size: 15px;
  color: black;
  font-family: "Roboto_500Medium";
`;

export const HistoryItemValue = styled.Text`
  font-size: 15px;
  color: black;
  align-self: flex-end;
  font-family: "Roboto_700Bold";
`;

export const HistoryItemTypeText = styled.Text`
  font-size: 12px;
  color: #666;
  font-family: "Roboto_400Regular";
`;

export const HistoryItemDate = styled.Text`
  font-size: 13px;
  color: #666;
  font-family: "Roboto_400Regular";
`;

// box de info
export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 0px 20px;
`;

export const InfoRow = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
`;

export const InfoBox = styled.View`
  flex: 1;
  background-color: #f4f5f6;
  justify-content: center;
  //align-items: center;
  border-radius: 16px;
  padding: 16px;
  min-height: 100px;
  gap: 9px;
`;

export const InfoBoxTitle = styled.Text`
  font-size: 14px;
  color: #555;
  font-family: "Lato_500Medium";
`;

export const InfoBoxValue = styled.Text`
  font-size: 15px;
  color: #333345;
  font-family: "Lato_900Black";
`;