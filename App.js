import React ,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Octicons';
import EducationDetails from './EducationDetails'; 
import Card from './Card';
import GetInTouchPR from './GetInTouchPR';
import CertificationsScreen from './CertificationsScreen'; 
import ProblemSolvingPopup from './ProblemSolvingPop';
import WebViewScreen from './WebViewScreen';
import BlogsScreen from './BlogsScreen';
import IssueTracker from './IssueTracker';
import PolaroidPhoto from './PolaroidPhoto';
import ResumeCard from './ResumeCard';
import ProjectCard from './Projects-Card'

// Home Screen
const HomeScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

  const projects = [
    { name: 'Education', icon: 'mortar-board', color: 'darkseagreen', screen: 'EducationDetails' },
    { name: 'Certifications', icon: 'file-badge', color: 'gold', screen:'CertificationsScreen' },
    { name: 'Tech Stack', icon: 'code-square', screen:'IssueTracker' },
    { name: 'Problem Solving', icon: 'check-circle-fill', color: 'green', action: () => setModalVisible(true)},
    { name: 'Blogs', icon: 'globe', color: 'orange', screen: 'BlogsScreen'},
  ];

  const handleLinkPress = (url) => {

    navigation.navigate('WebViewScreen', { url });
  };

  const handlePRSubmit = (pr) => {
    Alert.alert('Pull Request Submitted!', JSON.stringify(pr, null, 2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Know Me</Text>
      {projects.map((project, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            if (project.screen) {
              navigation.navigate(project.screen);
            }
            else if (project.url) {
              handleLinkPress(project.url);
            }
            else if(project.action){
              project.action();
            }
          }}
        >
          <View style={styles.item}>
            <Icon name={project.icon} size={22} color={project.color || '#58a6ff'} style={styles.icon} />
            <Text style={styles.itemText}>{project.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
            <ProblemSolvingPopup visible={modalVisible} onClose={() => setModalVisible(false)} />

             <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <GetInTouchPR onSubmit={handlePRSubmit} />
    </View> 




    </ScrollView>
  );
};


// Projects Screen
const ProjectsScreen = () => {
   const repositories = [
    {
      title: 'Brightbox',
      description: 'Generation of Rooftop Solar Mapping',
      repoUrl: 'https://github.com/Shivanii30/brightbox-solar-energy',
    },
    {
      title: 'Telegram Contract Bot',
      description: 'Designed to facilitate the reading and analysis of PDF documents and the comparison of contracts, all within the Telegram messaging platform.',
      repoUrl: 'https://github.com/Shivanii30/Telegram-Contract-Bot.git',
    },
    {
      title: 'Sort Metrics',
      description: 'Evaluate the performance of different sorting algorithms',
      repoUrl:'https://github.com/Shivanii30/sort-metrics.git'
    },
    {
      title:'Social Media Dashboard',
      description:'Analyze current trends',
      repoUrl:'https://github.com/Shivanii30/ISA-Project-social-media-trends.git'
    },
    {
      title:'Gesture Controlled Whiteboard',
      description:'Allow user for air drawing',
      repoUrl:'https://github.com/Shivanii30/Whiteboard-PPT-SignLang.git'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {repositories.map((repo, index) => (
        <ProjectCard
          key={index}
          title={repo.title}
          description={repo.description}
          repoUrl={repo.repoUrl}
        />
      ))}
    </ScrollView>
  );
};

// Resume Screen
const ResumeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}></Text>
      <Text>Click below to download my resume:</Text>
      <ResumeCard />
    </View>
  );
};

// Profile Screen
const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}></Text>

    <PolaroidPhoto imageSource={require('./assets/trip-pic.jpg')} 
        caption="Escape() != Reality" />
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
      <Stack.Screen name="WebViewScreen" component={WebViewScreen}/>
      <Stack.Screen name = "BlogsScreen" component={BlogsScreen}/> 
      <Stack.Screen name="IssueTracker" component ={IssueTracker}/>
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
    fontSize: 110,
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
