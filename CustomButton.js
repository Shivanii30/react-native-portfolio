// components/CustomButton.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CustomButton = ({ onPress }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isHovered && styles.buttonHovered,
      ]}
      onPress={onPress} // Use the onPress prop here
      onPressIn={handleHover}
      onPressOut={handleHover}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, isHovered && styles.textHovered]}>
        View on GitHub
      </Text>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.547 1.376.202 2.394.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          fill={isHovered ? '#181717' : 'white'}
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 15,
    backgroundColor: '#181717',
    borderWidth: 3,
    borderColor: '#181717',
    borderRadius: 5,
  },
  buttonHovered: {
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textHovered: {
    color: '#181717',
  },
});

export default CustomButton;
