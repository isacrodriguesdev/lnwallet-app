import styled from "styled-components/native";
// fonts

interface IContainerProps {
    justify?: "center" | "start" | "end" | "space-between" | "space-around" | "space-evenly";
    align?: "center" | "start" | "end" | "stretch" | "baseline";
}

export const Container = styled.View<IContainerProps>`
    flex: 1;
    padding: 20px;
    justify-content: ${(props) => props.justify || "flex-start"};
    align-items: ${(props) => props.align || "flex-start"};
`;