import React, { useState, useLayoutEffect, useCallback } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, database } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../colors";

const avatar_url = "https://i.pravatar.cc/300";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  const onSignOut = () =>
    signOut(auth).catch((error) => console.log("Error logging out: ", error));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.signOutBtn} onPress={onSignOut}>
          <AntDesign
            name="logout"
            size={24}
            color={colors.gray}
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsubscribe");
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={(messages) => onSend(messages)}
      messagesContainerStyle={styles.messageContainer}
      textInputStyle={styles.textInput}
      user={{
        _id: auth?.currentUser?.email,
        avatar: avatar_url,
      }}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  signOutBtn: {
    marginRight: 10,
  },
  logoutIcon: {
    marginRight: 10,
  },

  messageContainer: {
    backgroundColor: "#fff",
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 20,
  },
});
