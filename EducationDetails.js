import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';

const EducationDetails = () => {
  const [text, setText] = useState('');
  const opacity = useSharedValue(0);

  const educationDetails = `
    $ School: XYZ High School
    $ College: ABC University
    $ Diploma: DEF Institute
  `;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < educationDetails.length) {
        setText((prev) => prev + educationDetails[index]);
        index++;
      } else {
        clearInterval(interval);
        opacity.value = withTiming(1, { duration: 500, easing: Easing.ease });
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(interval);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.cliText}>{text}</Text>
      <Animated.View style={[styles.prompt, animatedStyle]}>
        <Text style={styles.promptText}>$</Text>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#0d1117',
  },
  cliText: {
    fontSize: 18,
    color: '#c9d1d9',
    fontFamily: 'monospace',
  },
  prompt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  promptText: {
    fontSize: 18,
    color: '#58a6ff',
    fontFamily: 'monospace',
  },
});

export default EducationDetails;
