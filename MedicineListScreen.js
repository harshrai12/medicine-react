import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import medicines from './medicines.json';

const MedicineListScreen = () => {
  const navigation = useNavigation();

  const handleMedicinePress = (id) => {
    // Navigate to MedicineDetailScreen with the selected medicine ID
    navigation.navigate('MedicineDetail', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List of Medicines:</Text>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={medicines}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMedicinePress(item.id)}>
            <View style={styles.medicineContainer}>
              <Image
                source={{ uri: item.logo }}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.medicineName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Center text horizontally
  },
  listContainer: {
    alignItems: 'center', // Center FlatList content
  },
  medicineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  medicineName: {
    fontSize: 16,
  },
});

export default MedicineListScreen;





