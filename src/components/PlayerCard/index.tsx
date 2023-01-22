import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerAvatarDTO } from "@storage/player/PlayerAvatarDTO";
import { Text, TouchableOpacityProps } from "react-native";
import { BigHead } from "react-native-bigheads";

import { Container, Icon, Name } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
  avatar?: PlayerAvatarDTO;
  onRemove: () => void;
};

export function PlayerCard({ name, avatar, onRemove, ...rest }: Props) {
  return (
    <Container {...rest}>
      {avatar ? (
        <BigHead
          accessory={avatar.acessory}
          bgColor={avatar.bgColor}
          bgShape="circle"
          body={avatar.body}
          clothing={avatar.cloth}
          clothingColor={avatar.clothColor}
          eyebrows={avatar.eyeBrow}
          eyes={avatar.eye}
          facialHair={avatar.facialHair}
          graphic={avatar.accessory}
          hair={avatar.hair}
          hairColor={avatar.hairColor}
          hat={avatar.hat}
          hatColor={avatar.hatColor}
          lashes={false}
          lipColor={avatar.lipColor}
          mouth={avatar.mouth}
          showBackground={true}
          size={50}
          skinTone={avatar.skinTone}
        />
      ) : (
        <Icon name="person" />
      )}
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
