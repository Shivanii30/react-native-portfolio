import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const ResumeScreen = () => {
  const handleViewResume = () => {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1oFOLo5ngn2glelTAYAf0kIdQdXP4p0pK'; // Replace with your Google Drive link
    Linking.openURL(resumeUrl).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <TouchableOpacity style={styles.cloneButton} onPress={handleViewResume}>
        <Icon name="repo-clone" size={20} color="#fff" />
        <Text style={styles.buttonText}>View Resume</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1117',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c9d1d9',
    marginBottom: 20,
  },
  cloneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#238636',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
});

export default ResumeScreen;
