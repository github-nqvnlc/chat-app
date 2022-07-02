import { View, Text, StyleSheet } from "react-native";
import React from "react";

const myID = 'u1';

const Message = ({ message }) => {
  const isMe = message.user.id === myID;
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={{ color: isMe ? "#fff" : "#000" }}>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "70%",
  },
  leftContainer: {
    backgroundColor: "lightgrey",
    marginLeft: 10,
    marginRight: "auto",
    marginVertical: 1,
  },
  rightContainer: {
    backgroundColor: "#377682",
    marginLeft: "auto",
    marginRight: 10,
    marginVertical: 1,
  }
});

export default Message;
