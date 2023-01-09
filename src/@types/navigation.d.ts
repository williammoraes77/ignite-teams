import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      new: undefined;
      players: {
        group: string;
      };
      playerAvatar: {
        player: {
          name: string;
          team: string;
          avatar?: {
            acessory: string;
            bgColor: string;
            body: string;
            cloth: string;
            clothColor: string;
            eyeBrow: string;
            eye: string;
            facialHair: string;
            hair: string;
            hairColor: string;
            hat: string;
            hatColor: string;
            lipColor: string;
            mouth: string;
            skinTone: string;
          };
        };
        group: string;
        team: string;
      };
    }
  }
}
