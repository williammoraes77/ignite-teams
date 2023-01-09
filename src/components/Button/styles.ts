import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY" | "THIRD";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  /* background-color: ${({ theme, type }) =>
    type === "PRIMARY" && theme.COLORS.GREEN_700};

  background-color: ${({ theme, type }) =>
    type === "SECONDARY" && theme.COLORS.GREEN_700};

  background-color: ${({ theme, type }) =>
    type === "THIRD" && theme.COLORS.GREEN_700}; */

  ${({ theme, type }) =>
    type === "PRIMARY" &&
    css`
      background-color: ${theme.COLORS.GREEN_700};
    `};

  ${({ theme, type }) =>
    type === "SECONDARY" &&
    css`
      background-color: ${theme.COLORS.RED_DARK};
    `};

  ${({ theme, type }) =>
    type === "THIRD" &&
    css`
      background-color: ${theme.COLORS.BUTTON_AVATAR};
    `};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.TEXT_BUTTON};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
