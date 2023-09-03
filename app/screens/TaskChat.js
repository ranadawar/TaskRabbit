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
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
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
            <AntDesign
              name="phone"
              size={24}
              color={COLORS.white}
              style={{ marginHorizontal: 12 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="photo-camera"
              size={24}
              color={COLORS.white}
              style={{ marginHorizontal: 12 }}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <Ionicons name="send" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  chatContainer: {
    padding: 16,
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
  },
  iconContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: COLORS.border,
    padding: 8,
    backgroundColor: COLORS.black,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: 8,
    backgroundColor: COLORS.white,
  },
});

export default TaskChat;
