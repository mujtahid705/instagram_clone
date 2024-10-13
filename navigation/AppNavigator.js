import { NavigationContainer } from "@react-navigation/native";
import SignoutStack from "./SignoutStack";
import SigninStack from "./SigninStack";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const isLoggedin = useSelector((state) => state.user.isLoggedin);

  return (
    <NavigationContainer>
      {/* {!isLoggedin && <SignoutStack />}
      {isLoggedin && <SigninStack />} */}
      <SigninStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
