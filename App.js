import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Octicons';
import EducationDetails from './EducationDetails'; 
import Card from './Card';
import CertificationsScreen from './CertificationsScreen'; 

// Home Screen
const HomeScreen = ({ navigation }) => {
  const projects = [
    { name: 'Education', icon: 'mortar-board', color: 'darkseagreen', screen: 'EducationDetails' },
    { name: 'Certifications', icon: 'file-badge', color: 'gold', screen:'CertificationsScreen' },
    { name: 'Tech Stack', icon: 'code-square' },
    { name: 'Problem Solving', icon: 'check-circle-fill', color: 'green', url: 'https://github.com/yourusername/project4' },
    { name: 'Blogs', icon: 'globe', color: 'orange', url: 'https://github.com/yourusername/project5' },
  ];

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>My Work</Text>
      {projects.map((project, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            if (project.screen) {
              navigation.navigate(project.screen);
            } else if (project.url) {
              handleLinkPress(project.url);
            }
          }}
        >
          <View style={styles.item}>
            <Icon name={project.icon} size={22} color={project.color || '#58a6ff'} style={styles.icon} />
            <Text style={styles.itemText}>{project.name}</Text>
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

// Stack Navigator for Home and EducationDetails
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EducationDetails" component={EducationDetails} />
      <Stack.Screen name = "CertificationsScreen" component ={CertificationsScreen}/>
    </Stack.Navigator>
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
          tabBarActiveTintColor: '#58a6ff',
          tabBarInactiveTintColor: '#c9d1d9',
          tabBarStyle: { backgroundColor: '#0d1117' },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
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
    backgroundColor: '#0d1117',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#c9d1d9',
    marginBottom: 20,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#c9d1d9',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#161b22',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 20,
    color: 'white',
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
