// components/ProjectCard.js
import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const ProjectCard = ({ title, description, repoUrl }) => {
  const handlePress = () => {
    if (repoUrl) {
      Linking.openURL(repoUrl); // Ensure repoUrl is a valid string
    } else {
      console.error('Invalid URL: repoUrl is undefined');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <CustomButton onPress={handlePress} /> {/* Pass handlePress to CustomButton */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
});

export default ProjectCard;
