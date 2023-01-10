export type PlayerStorageDTO = {
  name: string;
  team: string;
  avatar?: {
    acessory:
      | "roundGlasses"
      | "tinyGlasses"
      | "shades"
      | "faceMask"
      | "hoopEarrings"
      | "none"
      | undefined;
    bgColor:
      | "blue"
      | "green"
      | "red"
      | "orange"
      | "yellow"
      | "turqoise"
      | "pink"
      | "purple"
      | undefined;
    body: "chest" | "breasts" | undefined;
    cloth:
      | "naked"
      | "shirt"
      | "dressShirt"
      | "vneck"
      | "tankTop"
      | "dress"
      | "denimJacket"
      | "hoodie"
      | "chequeredShirt"
      | "chequeredShirtDark"
      | undefined;
    clothColor: "blue" | "green" | "red" | "white" | "black" | undefined;
    eyeBrow:
      | "raised"
      | "leftLowered"
      | "serious"
      | "angry"
      | "concerned"
      | undefined;
    eye:
      | "normal"
      | "leftTwitch"
      | "happy"
      | "content"
      | "squint"
      | "simple"
      | "dizzy"
      | "wink"
      | "hearts"
      | "crazy"
      | "cute"
      | "dollars"
      | "stars"
      | "cyborg"
      | "simplePatch"
      | "piratePatch"
      | undefined;
    facialHair:
      | "none"
      | "stubble"
      | "mediumBeard"
      | "goatee"
      | "none2"
      | "none3"
      | undefined;
    hair:
      | "none"
      | "short"
      | "long"
      | "bun"
      | "pixie"
      | "balding"
      | "buzz"
      | "afro"
      | "bob"
      | "mohawk"
      | undefined;
    hairColor:
      | "blue"
      | "white"
      | "blonde"
      | "orange"
      | "pink"
      | "black"
      | "brown"
      | undefined;
    hat:
      | "none"
      | "none2"
      | "none3"
      | "beanie"
      | "turban"
      | "party"
      | "hijab"
      | "none4"
      | "none5"
      | undefined;
    hatColor: "blue" | "green" | "red" | "white" | "black" | undefined;
    lipColor: "green" | "red" | "turqoise" | "pink" | "purple" | undefined;
    mouth:
      | "serious"
      | "lips"
      | "grin"
      | "sad"
      | "openSmile"
      | "open"
      | "tongue"
      | "piercedTongue"
      | "vomitingRainbow"
      | undefined;
    skinTone:
      | "red"
      | "yellow"
      | "black"
      | "brown"
      | "light"
      | "dark"
      | undefined;
  };
};
