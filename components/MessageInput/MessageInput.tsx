import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Foundation,
  Ionicons
} from "@expo/vector-icons";
import React, { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    //send message
    console.warn('sending', message);
    setMessage('');
  }

  const onPlusClicked = () => {
    console.warn('on plus clicked');
  }

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  }
  return (
    <KeyboardAvoidingView 
    style={styles.root} 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <FontAwesome5
          name="smile"
          size={25}
          color="#7d7d7d"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Send message"
          value={message}
          onChangeText={setMessage}
        />
        <FontAwesome
          name="picture-o"
          size={20}
          color="#7d7d7d"
          style={styles.icon}
        />
        <Foundation
          name="microphone"
          size={25}
          color="#7d7d7d"
          style={styles.icon}
        />
      </View>
      <Pressable  onPress={onPress} style={styles.buttonContainer}>
        {message ? <Ionicons name="send" size={25} color="#fff" /> : <AntDesign name="plus" size={25} color="white" style={styles.icon} /> }
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  inputContainer: {
    backgroundColor: "lightgrey",
    flex: 1,
    marginRight: 5,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#377682",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
});

export default MessageInput;
