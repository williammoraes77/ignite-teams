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

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { BigHead } from "react-native-bigheads";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { AppError } from "@utils/AppError";
import { playerAddByGroupAvatar } from "@storage/player/playerAddByGroupAvatar";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";

type RouteParams = {
  player: string;
  group: string;
  team: string;
};

export function PlayerAvatar() {
  const route = useRoute();

  const { player, group, team } = route.params as RouteParams;

  const [avatar, setAvatar] = useState("");
  const [avatarSelected, setAvatarSelected] = useState(false);
  const [playerName, SetPlayerName] = useState("");
  const [acessory, setAcessory] = useState("roundGlasses");
  const [bgColor, setBgColor] = useState("blue");
  const [body, setBody] = useState("chest");
  const [cloth, setCloth] = useState("naked");
  const [clothColor, setClothColor] = useState("white");
  const [eyeBrow, setEyeBrow] = useState("raised");
  const [eye, setEye] = useState("normal");
  const [facialHair, setFacialHair] = useState("none");
  const [hair, setHair] = useState("short");
  const [hairColor, setHairColor] = useState("blonde");
  const [hat, setHat] = useState("none");
  const [hatColor, setHatColor] = useState("white");
  const [lipColor, setLipColors] = useState("red");
  const [mouth, setMouth] = useState("lips");
  const [skinTone, setSkinTone] = useState("light");

  const navigation = useNavigation();

  async function handleGenerateAvatar() {
    setAvatarSelected(true);
    const acessories = [
      "roundGlasses",
      "tinyGlasses",
      "shades",
      "faceMask",
      "hoopEarrings",
    ];
    const bgColor = [
      "blue",
      "green",
      "red",
      "orange",
      "yellow",
      "turqoise",
      "pink",
      "purple",
    ];
    const bories = ["chest", "breasts"];
    const clothes = [
      "naked",
      "shirt",
      "dressShirt",
      "vneck",
      "tankTop",
      "dress",
      "denimJacket",
      "hoodie",
      "chequeredShirt",
      "chequeredShirtDark",
    ];
    const clothesColors = ["white", "blue", "black", "green", "red"];
    const eyesBrows = [
      "raised",
      "leftLowered",
      "serious",
      "angry",
      "concerned",
    ];
    const eyes = [
      "normal",
      "leftTwitch",
      "happy",
      "content",
      "squint",
      "simple",
      "dizzy",
      "wink",
      "hearts",
      "crazy",
      "cute",
      "dollars",
      "stars",
      "cyborg",
      "simplePatch",
      "piratePatch",
    ];

    const facialHairs = ["none", "stubble", "mediumBeard", "goatee"];

    const hairs = [
      "none",
      "long",
      "bun",
      "short",
      "pixie",
      "balding",
      "buzz",
      "afro",
      "bob",
      "mohawk",
    ];
    const hairColors = [
      "blonde",
      "orange",
      "black",
      "white",
      "brown",
      "blue",
      "pink",
    ];
    const hats = ["none", "beanie", "turban", "party", "hijab", "none"];
    const hatColors = ["white", "blue", "black", "green", "red"];
    const lipColors = ["red", "purple", "pink", "turqoise", "green"];
    const mouths = [
      "grin",
      "sad",
      "openSmile",
      "lips",
      "open",
      "serious",
      "tongue",
      "piercedTongue",
      "vomitingRainbow",
    ];
    const skinTones = ["light", "yellow", "brown", "dark", "red", "black"];

    setAcessory(acessories[SortNumber(5)]);
    setBgColor(bgColor[SortNumber(8)]);
    setBody(bories[SortNumber(2)]);
    setCloth(clothes[SortNumber(10)]);
    setClothColor(clothesColors[SortNumber(5)]);
    setEyeBrow(eyesBrows[SortNumber(5)]);
    setEye(eyes[SortNumber(16)]);
    setFacialHair(facialHairs[SortNumber(4)]);
    setHair(hairs[SortNumber(10)]);
    setHairColor(hairColors[SortNumber(7)]);
    setHat(hats[SortNumber(6)]);
    setHatColor(hatColors[SortNumber(5)]);
    setLipColors(lipColors[SortNumber(5)]);
    setMouth(mouths[SortNumber(9)]);
    setSkinTone(skinTones[SortNumber(6)]);
    setAvatar("avatar");
  }

  function SortNumber(limit: number) {
    const RandomNumber = Math.floor(Math.random() * limit);

    return RandomNumber;
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
      await playerAddByGroupAvatar(newPlayer, group);
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
    // navigation.navigate("groups");
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
              // bgColor="orange"
              bgColor={bgColor}
              bgShape="circle"
              // body="chest"
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
