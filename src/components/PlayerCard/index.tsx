import { ButtonIcon } from "@components/ButtonIcon";
import { TouchableOpacityProps } from "react-native";
import { BigHead } from "react-native-bigheads";

import { Container, Icon, Name } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove, ...rest }: Props) {
  return (
    <Container {...rest}>
      {/* <Icon name="person" /> */}
      <BigHead
        accessory="shades"
        bgColor="blue"
        bgShape="circle"
        body="chest"
        clothing="tankTop"
        clothingColor="black"
        eyebrows="angry"
        eyes="wink"
        facialHair="mediumBeard"
        graphic="vue"
        hair="short"
        hairColor="black"
        hat="none"
        hatColor="green"
        lashes={false}
        lipColor="purple"
        mouth="open"
        showBackground={true}
        size={50}
        skinTone="brown"
      />

      <Name>{name}</Name>

      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
