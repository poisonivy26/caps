import React, { useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const messageList = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "You might have covid",
    author: 'Dr Juan 1',
    image: require('../../../../doctor_images/doc1.jpg')
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    author: 'Dr Juan 2',
    title: "Check the updated precsription",
    image: require('../../../../doctor_images/doc2.jpg')
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "You may reschedule at a later time",
    author: 'Dr Juan 3',
    image: require('../../../../doctor_images/doc3.jpg')
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
   <Image style={styles.image} source={(item.image)} />
    <Text style={styles.author}>{item.author}</Text>
    <Text style={styles.title}>{item.title}</Text>
   

  </TouchableOpacity>
);

const Messages = ( { navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "coral" : "white";

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Doctor Information')}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 9,
  },
  title: {
    fontSize: 15,
  },
  image: {
    width: 75,
    height: 75,
  },
  author: {
      fontSize: 16,
      color: '#19769f',
  }
});

export default Messages;