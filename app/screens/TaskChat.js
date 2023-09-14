import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons"; // Import the required icons
import { COLORS } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

const dummyMessages = [
  { id: 1, text: "Hello!", isMe: false, time: "10:00 am" },
  { id: 2, text: "Hi there!", isMe: true, time: "10:05 am" },
  { id: 3, text: "How are you?", isMe: false, time: "10:10 am" },
  { id: 4, text: "I'm good, thanks!", isMe: true, time: "10:15 am" },
  // ... add more dummy messages
];

const TaskChat = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [inputMessage, setInputMessage] = useState("");
  const flatListRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        isMe: true,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  const renderItem = ({ item }) => (
    <>
      <View
        style={[
          styles.messageContainer,
          { alignSelf: item.isMe ? "flex-end" : "flex-start" },
        ]}
      >
        {!item.isMe && (
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.profilePhoto}
          />
        )}
        <View
          style={[
            styles.messageBubble,
            { backgroundColor: item.isMe ? COLORS.danger : COLORS.white },
          ]}
        >
          <Text
            style={[
              styles.messageText,
              { color: item.isMe ? COLORS.white : COLORS.text },
            ]}
          >
            {item.text}
          </Text>
        </View>
      </View>
      <Text style={item.isMe ? styles.messageTimeMe : styles.messageTime}>
        {item.time}
      </Text>
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.chatContainer}
      />

      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/call.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={require("../../assets/icons/camra.png")}
              style={{
                width: 24,
                height: 24,
                marginLeft: 15,
                marginBottom: 3,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message..."
            value={inputMessage}
            onChangeText={setInputMessage}
          />
          <TouchableOpacity onPress={handleSendMessage}>
            <Image
              source={require("../../assets/icons/attach.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSendMessage}>
            <Image
              source={require("../../assets/icons/send.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <LinearGradient
        style={styles.absolute}
        colors={["#DFFFEE", COLORS.primaryGreen]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  chatContainer: {
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  profilePhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  messageBubble: {
    borderRadius: 10,
    padding: 10,
    alignSelf: "flex-start",
    maxWidth: "70%",
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    color: COLORS.text,
    marginTop: 4,
    fontSize: 12,
    marginBottom: 10,
  },
  messageTimeMe: {
    color: COLORS.text,
    marginTop: 4,
    fontSize: 12,
    textAlign: "right",
    marginBottom: 15,
  },
  iconContainer: {
    flexDirection: "row",
    marginRight: 8,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: COLORS.border,
    padding: 8,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
    paddingVertical: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: COLORS.white,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "73%",
    backgroundColor: COLORS.white,
    padding: 5,
    borderRadius: 25,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginHorizontal: 5,
  },
});

export default TaskChat;
