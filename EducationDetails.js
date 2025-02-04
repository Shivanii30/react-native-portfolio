import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const EducationDetails = () => {
  const [text, setText] = useState('');
  const opacity = useSharedValue(0);
  const cursorOpacity = useSharedValue(1);

  const educationDetails = `
    $ ST. Thomas English Medium School, Solapur (ICSE) 86.7%
    $ Diploma in Computer Engineering, AGPPI Solapur - 90.97%
    $ BTech. in Artificial Intelligence and Data Science, VIT Pune - 8.4
  `;
  const requestPermissions = async () => {
  const { status } = await Audio.requestPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access audio was denied');
  }
};
useEffect(() => {
  requestPermissions();
}, []);

  // Sound effect function
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'https://www.soundjay.com/communication/sounds/typewriter-1.mp3' }
    );
    await sound.playAsync();
  };

  // Blinking cursor animation
  useEffect(() => {
    cursorOpacity.value = withRepeat(
      withSequence(
        withTiming(0, { duration: 500 }),
        withTiming(1, { duration: 500 })
      ),
      -1,
      true
    );
  }, []);

  // Typewriter effect with haptics and sound
  useEffect(() => {
    let index = 0;
    vibrate(); // Initial haptic feedback
    const interval = setInterval(() => {
      if (index < educationDetails.length) {
        setText((prev) => prev + educationDetails[index]);
        playSound(); // Play typewriter sound
        index++;
      } else {
        clearInterval(interval);
        opacity.value = withTiming(1, { duration: 500, easing: Easing.ease });
        vibrate(); // Final haptic feedback
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const cursorStyle = useAnimatedStyle(() => {
    return {
      opacity: cursorOpacity.value,
    };
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.terminalHeader}>
        <View style={styles.terminalButtons}>
          <View style={[styles.terminalButton, styles.closeButton]} />
          <View style={[styles.terminalButton, styles.minimizeButton]} />
          <View style={[styles.terminalButton, styles.maximizeButton]} />
        </View>
        <Text style={styles.terminalTitle}>user@portfolio: ~/education</Text>
      </View>

      <Text style={styles.cliText}>
        {text.split('\t').map((line, index) => (
          <Text key={index}>
            <Text style={styles.promptSymbol}>$ </Text>
            <Text style={styles.lineText}>{line}</Text>
            {'\n'}
          </Text>
        ))}
      </Text>

      <Animated.View style={[styles.cursor, cursorStyle]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  terminalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  terminalButtons: {
    flexDirection: 'row',
    marginRight: 10,
  },
  terminalButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  closeButton: {
    backgroundColor: '#ff5f56',
  },
  minimizeButton: {
    backgroundColor: '#ffbd2e',
  },
  maximizeButton: {
    backgroundColor: '#27c93f',
  },
  terminalTitle: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'monospace',
  },
  cliText: {
    fontSize: 16,
    color: '#c9d1d9',
    fontFamily: 'monospace',
    lineHeight: 24,
  },
  promptSymbol: {
    color: '#58a6ff',
  },
  lineText: {
    color: '#c9d1d9',
  },
  cursor: {
    width: 8,
    height: 20,
    backgroundColor: '#58a6ff',
    marginLeft: 4,
  },
});

export default EducationDetails;
