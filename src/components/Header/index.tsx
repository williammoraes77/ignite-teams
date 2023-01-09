import { useNavigation } from "@react-navigation/native";

import { BackButton, BackIcon, Container, LogoContent, Logo } from "./styles";

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
  destination?: string;
};

export function Header({ showBackButton = false, destination }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleDestination() {
    navigation.navigate(destination);
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={destination ? handleDestination : handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <LogoContent>
        <Logo source={logoImg} />
      </LogoContent>
    </Container>
  );
}
