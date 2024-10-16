import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import IgButton from "../components/ui/IgButton";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const screenWidth = Dimensions.get("window").width;

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required(),
  });

  const loginHandler = (values) => {
    dispatch(login(values));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../assets/images/ig_logo_text.png")}
          style={styles.logo}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={(values) => loginHandler(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              <TextInput
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={styles.formInput}
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
              <TextInput
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={styles.formInput}
                secureTextEntry
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <IgButton title="Log in" onPress={handleSubmit} />

              <View style={styles.registerContainer}>
                <Text style={styles.text}>Don't have an account?</Text>
                <Pressable
                  onPress={() => navigation.navigate("RegisterScreen")}
                >
                  <Text style={styles.link}>Register</Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 75,
    resizeMode: "contain",
  },
  formInput: {
    height: 40,
    width: screenWidth * 0.8,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 10,
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  text: {
    color: "grey",
  },
  link: {
    color: "#5a5aff",
    marginLeft: 5,
    fontWeight: "bold",
  },
});
