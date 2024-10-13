import { NavigationContainer } from "@react-navigation/native";
import SignoutStack from "./SignoutStack";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <SignoutStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
