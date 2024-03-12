import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import medicines from './medicines.json';

const MedicineDetailScreen = ({ route }) => {
  const { id } = route.params;
  const selectedMedicine = medicines.find((medicine) => medicine.id === id);
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <Image
        source={{ uri: selectedMedicine.logo }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.medicineName}>{selectedMedicine.name}</Text>
      <Image
        source={{ uri: selectedMedicine.description }}
        style={styles.desc}
        resizeMode="contain"
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center', // Center content horizontally
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  desc: {
    width: 400, // Adjust the margin
    height: 400, // Adjust the height as needed
    marginBottom: 20,
  },
  medicineName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default MedicineDetailScreen;

