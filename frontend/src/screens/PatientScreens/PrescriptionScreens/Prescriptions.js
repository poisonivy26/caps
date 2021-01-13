import React, { useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";


import {AuthContext} from '../../../contexts/AuthContext';
import {useGet} from '../../../hooks/useGet';


const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.prescription_name}</Text>
   

  </TouchableOpacity>
);

const Prescriptions = ( { navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const prescriptions = useGet('get_prescription/')

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "coral" : "white";

    return (
      <Item
        item={item}
        onPress={() => {

          navigation.navigate('Prescription Details', {
            itemId: item.prescription_name,
          });
        }}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={prescriptions}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
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