import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { Container, Content, AvatarContent, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { BigHead } from "react-native-bigheads";

export function PlayerAvatar() {
  const [avatar, setAvatar] = useState("");
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

  function handleGenerateAvatar() {
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
    console.log("_______");
    const nAvatar = {
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
    };
    handleAddAvatar("William", "GrupoA", "TimeA");
  }

  function SortNumber(limit: number) {
    const RandomNumber = Math.floor(Math.random() * limit);
    console.log(RandomNumber);

    return RandomNumber;
  }

  async function handleAddAvatar(name: string, team: string, group: string) {
    const newAvatar = {
      name,
      team,
      group,
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

    console.log(newAvatar);
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Highlight title="William" subtitle="Selecione o avatar" />

        <AvatarContent>
          {avatar ? (
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
          ) : (
            <Icon name="person" />
          )}
        </AvatarContent>
        <Button title="Gerar Avatar" onPress={handleGenerateAvatar} />
      </Content>
    </Container>
  );
}
