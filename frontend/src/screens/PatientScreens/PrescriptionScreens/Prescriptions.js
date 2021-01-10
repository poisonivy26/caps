import React, { useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const patientPrescriptionList = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Prescription 1",

  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Prescription 2",

  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Prescription 3",

  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
   

  </TouchableOpacity>
);

const Prescriptions = ( { navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "coral" : "white";

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Prescription Details')}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={patientPrescriptionList}
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
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: 75,
    height: 75,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#19769f',
    padding: 15,
  },
  buttonText: {
    color: 'white',
  },
});

export default Prescriptions;