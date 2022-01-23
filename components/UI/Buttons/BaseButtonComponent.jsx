import { Pressable, StyleSheet, Text } from "react-native"

export const ButtomStyles = StyleSheet.create({
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      width: "40%",
    },
    buttonPrimary: {
      backgroundColor: "#3936f3",
    },
    buttonSecundary: {
      backgroundColor: "transparent",
      borderWidth: 1,
    },
    textStyle: {
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase"
    },
    textPrimary: {
      color: "white",
    },
    textSecundary: {
      color: "black",
    }
  });

const BaseButtomComponent = ({ text, callback,  buttonStyles, textStyles}) => {
    return (
        <Pressable
        style={buttonStyles}
        onPress={callback}
        >
        <Text style={textStyles}>{text}</Text>
      </Pressable>
    )
}

export default BaseButtomComponent;
