import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

import {
  Container,
  Content,
  AvatarContent,
  Icon,
  BackButton,
  BackIcon,
  HeaderContainer,
  LogoContent,
  Logo,
} from "./styles";

import logoImg from "@assets/logo.png";

import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { BigHead } from "react-native-bigheads";
import { AppError } from "@utils/AppError";
import { playerAddByGroupAvatar } from "@storage/player/playerAddByGroupAvatar";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { getAvatarOptions } from "@utils/Avatar";

type RouteParams = {
  player: PlayerStorageDTO;
  group: string;
  team: string;
};

export function PlayerAvatar() {
  const route = useRoute();

  const { player, group, team } = route.params as RouteParams;

  const [avatar, setAvatar] = useState("");
  const [avatarSelected, setAvatarSelected] = useState(false);
  const [playerName, SetPlayerName] = useState("");
  const [acessory, setAcessory] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [body, setBody] = useState("");
  const [cloth, setCloth] = useState("");
  const [clothColor, setClothColor] = useState("");
  const [eyeBrow, setEyeBrow] = useState("");
  const [eye, setEye] = useState("");
  const [facialHair, setFacialHair] = useState("");
  const [hair, setHair] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [hat, setHat] = useState("");
  const [hatColor, setHatColor] = useState("");
  const [lipColor, setLipColors] = useState("");
  const [mouth, setMouth] = useState("");
  const [skinTone, setSkinTone] = useState("");

  const navigation = useNavigation();

  async function handleGenerateAvatar() {
    setAvatarSelected(true);

    const {
      f_acessory,
      f_bgColor,
      f_body,
      f_cloth,
      f_clothesColor,
      f_eyesBrow,
      f_eye,
      f_facialHair,
      f_hair,
      f_hairColor,
      f_hat,
      f_hatColor,
      f_lipColor,
      f_mouth,
      f_skinTone,
    } = getAvatarOptions();

    setAcessory(f_acessory);
    setBgColor(f_bgColor);
    setBody(f_body);
    setCloth(f_cloth);
    setClothColor(f_clothesColor);
    setEyeBrow(f_eyesBrow);
    setEye(f_eye);
    setFacialHair(f_facialHair);
    setHair(f_hair);
    setHairColor(f_hairColor);
    setHat(f_hat);
    setHatColor(f_hatColor);
    setLipColors(f_lipColor);
    setMouth(f_mouth);
    setSkinTone(f_skinTone);
    setAvatar("avatar");
    // console.log("Gerar avatar acessory => " + acessory);
  }

  async function handleAddAvatar() {
    const newPlayer = {
      name: player.name,
      team,
      avatar: {
        acessory,
        bgColor,
        body,
        cloth,
        clothColor,
        eyeBrow,
        eye,
        facialHair,
        hair,
        hairColor,
        hat,
        hatColor,
        lipColor,
        mouth,
        skinTone,
      },
    };
    await removePlayer();
    try {
      await playerAddByGroupAvatar(newPlayer as PlayerStorageDTO, group);
      handlePlayers();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possível adicionar.");
      }
    }
  }

  async function removePlayer() {
    try {
      await playerRemoveByGroup(player.name, group);
    } catch (error) {
      console.log(error);

      Alert.alert("Remover pessoa", "Não foi possível remover essa pessoa.");
    }
  }

  function handlePlayers() {
    navigation.navigate("players", { group });
  }

  return (
    <Container>
      <HeaderContainer>
        <BackButton onPress={handlePlayers}>
          <BackIcon />
        </BackButton>

        <LogoContent>
          <Logo source={logoImg} />
        </LogoContent>
      </HeaderContainer>

      <Content>
        <Highlight title={player.name} subtitle="Selecione o avatar" />
        <Button
          title="Gerar Avatar"
          type="THIRD"
          onPress={handleGenerateAvatar}
        />
        <AvatarContent>
          {player.avatar && !avatarSelected && (
            <BigHead
              accessory={player.avatar.acessory}
              // bgColor="orange"
              bgColor={player.avatar.bgColor}
              bgShape="circle"
              // body="chest"
              body={player.avatar.body}
              clothing={player.avatar.cloth}
              clothingColor={player.avatar.clothColor}
              eyebrows={player.avatar.eyeBrow}
              eyes={player.avatar.eye}
              facialHair={player.avatar.facialHair}
              hair={player.avatar.hair}
              hairColor={player.avatar.hairColor}
              hat={player.avatar.hat}
              hatColor={player.avatar.hatColor}
              lashes={false}
              lipColor={player.avatar.lipColor}
              mouth={player.avatar.mouth}
              showBackground={true}
              skinTone={player.avatar.skinTone}
              size={350}
            />
          )}
          {avatarSelected && (
            <BigHead
              accessory={acessory}
              bgColor={bgColor}
              bgShape="circle"
              body={body}
              clothing={cloth}
              clothingColor={clothColor}
              eyebrows={eyeBrow}
              eyes={eye}
              facialHair={facialHair}
              hair={hair}
              hairColor={hairColor}
              hat={hat}
              hatColor={hatColor}
              lashes={false}
              lipColor={lipColor}
              mouth={mouth}
              showBackground={true}
              skinTone={skinTone}
              size={350}
            />
          )}
          {!player.avatar && !avatarSelected && <Icon name="person" />}
        </AvatarContent>

        {avatarSelected && (
          <Button title="Salvar" onPress={handleAddAvatar} type="PRIMARY" />
        )}
      </Content>
    </Container>
  );
}
