import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import IgButton from "../components/ui/IgButton";

const screenWidth = Dimensions.get("window").width;

const LoginScreen = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required(),
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : ""}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Image
            source={require("../assets/images/ig_logo_text.png")}
            style={styles.logo}
          />
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={(values) => console.log(values)}
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
                {errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
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
              </View>
            )}
          </Formik>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
});
