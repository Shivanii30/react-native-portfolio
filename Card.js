import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Card = ({ title, description, imageUrl, onVerify }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardDetails}>
        {imageUrl && <Image source={imageUrl} style={styles.image} />}
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textBody}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.cardButton} onPress={onVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 390,
    height: 254,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    padding: 18,
    borderWidth: 2,
    borderColor: '#c3c6ce',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20, // Add margin for spacing between cards
  },
  cardDetails: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  image: {
    width: 290,
    height: 254,
    borderRadius: 10,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  textBody: {
    fontSize: 14,
    color: '#868686',
    textAlign: 'center',
  },
  cardButton: {
    width: '60%',
    borderRadius: 10,
    backgroundColor: '#008bf8',
    padding: 10,
    position: 'absolute',
    bottom: -20,
    left: '20%',
    opacity: 1, // Make button visible
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Card;
