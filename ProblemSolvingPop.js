import React, { useState } from 'react';
import WebViewScreen from './WebViewScreen';
import { useNavigation } from '@react-navigation/native';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const ProblemSolvingPopup = ({ visible, onClose }) => {
  const navigation = useNavigation(); // Hook to access the navigation object

  const handleLinkPress = (url) => {
    navigation.navigate('WebViewScreen', { url }); // Navigate to WebViewScreen
    onClose(); // Close modal after opening link
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Open Problem Solving Profile</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLinkPress('https://leetcode.com/u/kshirsagarshivani1438/?theme=dark')}
          >
            <Text style={styles.buttonText}>LeetCode</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CNbutton}
            onPress={() => handleLinkPress('https://www.naukri.com/code360/profile/shivani_30/?theme=dark')}
          >
            <Text style={styles.buttonText}>Coding Ninjas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#161b22',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c9d1d9',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    padding: 12,
    marginVertical: 5,
    backgroundColor: 'saddlebrown',
    borderRadius: 6,
    alignItems: 'center',
  },
    CNbutton: {
    width: '100%',
    padding: 12,
    marginVertical: 5,
    backgroundColor: 'dodgerblue',
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#c9d1d9',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#0d1117',
    fontSize: 16,
  },
});

export default ProblemSolvingPopup;
