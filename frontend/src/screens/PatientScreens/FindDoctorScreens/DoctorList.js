import React, { useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const doctorDataList = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Doctor Juan 1",
    image: require('../../../../doctor_images/doc1.jpg')
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Doctor Juan 2",
    image: require('../../../../doctor_images/doc2.jpg')
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Doctor Juan 3",
    image: require('../../../../doctor_images/doc3.jpg')
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
   <Image style={styles.image} source={(item.image)} />
    <Text style={styles.title}>{item.title}</Text>
   

  </TouchableOpacity>
);

const DoctorList = ( { navigation }) => {
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
        data={doctorDataList}
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
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 25,
  },
  image: {
    width: 75,
    height: 75,
  },
});

export default DoctorList;