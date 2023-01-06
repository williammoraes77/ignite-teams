import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "@screens/Groups";
import { Players } from "@screens/Players";
import { NewGroup } from "@screens/NewGroup";
import { PlayerAvatar } from "@screens/PlayerAvatar";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />

      <Screen name="new" component={NewGroup} />

      <Screen name="players" component={Players} />

      <Screen name="playerAvatar" component={PlayerAvatar} />
    </Navigator>
  );
}
