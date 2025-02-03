import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons

// Home Screen
const HomeScreen = () => {
  const projects = [
    { name: 'Project 1', url: 'https://github.com/yourusername/project1' },
    { name: 'Project 2', url: 'https://github.com/yourusername/project2' },
    { name: 'Project 3', url: 'https://github.com/yourusername/project3' },
    { name: 'Project 4', url: 'https://github.com/yourusername/project4' },
    { name: 'Project 5', url: 'https://github.com/yourusername/project5' },
    { name: 'Project 6', url: 'https://github.com/yourusername/project6' },
  ];

  const certifications = [
    { name: 'Certification 1', url: 'https://example.com/cert1' },
    { name: 'Certification 2', url: 'https://example.com/cert2' },
    { name: 'Certification 3', url: 'https://example.com/cert3' },
    { name: 'Certification 4', url: 'https://example.com/cert4' },
  ];

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My GitHub Portfolio</Text>

      <Text style={styles.sectionTitle}>Projects</Text>
      {projects.map((project, index) => (
        <TouchableOpacity key={index} onPress={() => handleLinkPress(project.url)}>
          <View style={styles.item}>
            <Text style={styles.itemText}>{project.name}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Certifications</Text>
      {certifications.map((cert, index) => (
        <TouchableOpacity key={index} onPress={() => handleLinkPress(cert.url)}>
          <View style={styles.item}>
            <Text style={styles.itemText}>{cert.name}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Get in Touch</Text>
      <TouchableOpacity onPress={() => handleLinkPress('mailto:youremail@example.com')}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Email Me</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkPress('https://linkedin.com/in/yourprofile')}>
        <View style={styles.item}>
          <Text style={styles.itemText}>LinkedIn</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Projects Screen
const ProjectsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Projects</Text>
      <Text>This is the Projects screen.</Text>
    </View>
  );
};

// Resume Screen
const ResumeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Resume</Text>
      <Text>This is the Resume screen.</Text>
    </View>
  );
};

// Profile Screen
const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Profile</Text>
      <Text>This is the Profile screen.</Text>
    </View>
  );
};

// Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Projects') {
              iconName = focused ? 'folder' : 'folder-outline';
            } else if (route.name === 'Resume') {
              iconName = focused ? 'document' : 'document-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#58a6ff', // GitHub link color
          tabBarInactiveTintColor: '#c9d1d9', // GitHub light text color
          tabBarStyle: { backgroundColor: '#0d1117' }, // GitHub dark theme background
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Resume" component={ResumeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#0d1117', // GitHub dark theme background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#c9d1d9', // GitHub light text color
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#c9d1d9',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    padding: 15,
    backgroundColor: '#161b22', // GitHub dark theme card background
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#58a6ff', // GitHub link color
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1117',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c9d1d9',
    marginBottom: 20,
  },
});

export default App;
