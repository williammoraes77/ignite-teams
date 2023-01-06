import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const AvatarContent = styled.View`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 174,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
