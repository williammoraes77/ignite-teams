function getAvatarOptions() {
  const acessories = [
    "roundGlasses",
    "tinyGlasses",
    "shades",
    "faceMask",
    "hoopEarrings",
  ];
  const bgColors = [
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
  const eyesBrows = ["raised", "leftLowered", "serious", "angry", "concerned"];
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

  const f_acessory = acessories[SortNumber(5)];
  const f_bgColor = bgColors[SortNumber(8)];
  const f_body = bories[SortNumber(2)];
  const f_cloth = clothes[SortNumber(10)];
  const f_clothesColor = clothesColors[SortNumber(5)];
  const f_eyesBrow = eyesBrows[SortNumber(5)];
  const f_eye = eyes[SortNumber(16)];
  const f_facialHair = facialHairs[SortNumber(4)];
  const f_hair = hairs[SortNumber(10)];
  const f_hairColor = hairColors[SortNumber(7)];
  const f_hat = hats[SortNumber(6)];
  const f_hatColor = hatColors[SortNumber(5)];
  const f_lipColor = lipColors[SortNumber(5)];
  const f_mouth = mouths[SortNumber(9)];
  const f_skinTone = skinTones[SortNumber(6)];

  return {
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
  };
}

function SortNumber(limit: number) {
  const RandomNumber = Math.floor(Math.random() * limit);

  return RandomNumber;
}

export { getAvatarOptions };
