import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import GetInTouchPR from './GetInTouchPR';

  const handlePRSubmit = (pr) => {
    Alert.alert('Pull Request Submitted!', JSON.stringify(pr, null, 2));
  };

const PolaroidPhoto = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHero}>
        <Image source={require('./assets/trip-pic.jpg')} style={styles.image} />
        <Text style={styles.caption}>Travel far, code hard.</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.jobTitle}>Escape()!=Reality</Text>
        </View> <View>
      <GetInTouchPR onSubmit={handlePRSubmit} />
    </View> 
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    backgroundColor: '#fefefe',
    borderRadius: 16, // 1rem in CSS
    padding: 1,
    color: '#141417',
  },
  cardHero: {
    backgroundColor: '#fef4e2',
    borderRadius: 16, // 0.5rem in CSS (applied only on top for similar effect)
    padding: 24, // 1.5rem in CSS
  },
  image: {
    width: 300,
    height: 350,
    resizeMode: 'cover',
    borderRadius: 8, // Same as your original CSS for rounded corners
  },
  caption: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  cardFooter: {
    flexDirection: 'column',
    padding: 12, // 0.75rem in CSS
    rowGap: 1, // 1rem gap
    fontWeight: '700',
    fontSize: 14, // 0.875rem in CSS
  },
  jobTitle: {
    marginVertical: 20,
    fontSize: 32, // 2rem in CSS
    fontWeight: '600',
  },
});

export default PolaroidPhoto;
