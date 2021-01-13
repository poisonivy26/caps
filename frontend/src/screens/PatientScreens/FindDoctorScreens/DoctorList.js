import React, { useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";


import {useGetDoctor} from '../../../hooks/useGetDoctor';




const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
   {/* <Image style={styles.image} source={(item.image)} /> */}
    <Text style={styles.title}>{item.first_name}</Text>
    <Text style={styles.title}>{item.bio}</Text>
    <Text style={styles.title}>{item.specialization}</Text>
  
   

  </TouchableOpacity>
);

const DoctorList = ( { route, navigation }) => {
  const { specialization } = route.params;

  const [selectedId, setSelectedId] = useState(null);
  const doctor = useGetDoctor('specialization/', '?specialization=', specialization)

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "coral" : "white";

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Doctor Information', {
          doctorName: item.first_name,

        })}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={doctor}
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