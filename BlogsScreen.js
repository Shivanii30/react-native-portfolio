import React, { useState, useRef } from 'react';
import { View, Text, FlatList, Image,TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PanGestureHandler} from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');


const blogs = [
  {
    id: '1',
    title: 'Security of Machine Learning Models',
    url: 'https://medium.com/@kshirsagarshivani1438/in-a-world-driven-by-data-the-security-of-machine-learning-models-is-no-longer-an-afterthought-acf09c2dcea1',
  },
  {
    id: '2',
    title: 'AI Ethics: Balancing Innovation & Responsibility',
    url: 'https://medium.com/example-ai-ethics',
  },
  {
    id: '3',
    title: 'Exploring Open Source in 2025',
    url: 'https://medium.com/example-open-source-2025',
  },
];

const BlogsScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const flatListRef = useRef(null);

  const handleSwipe = (event) => {
    if (event.nativeEvent.translationX < -50 && currentIndex < blogs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else if (event.nativeEvent.translationX > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blogs</Text>

      {/* Gesture-enabled blog list */}
      <PanGestureHandler onGestureEvent={handleSwipe} activeOffsetX={[-20, 20]}>
        <FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          data={blogs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.blogCard} onPress={() => setSelectedBlog(item.url)}>
      <Image source={{ uri: item.image }} style={styles.blogImage} />
              <Text style={styles.blogTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
            setCurrentIndex(newIndex);
          }}
        />
      </PanGestureHandler>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {blogs.map((_, index) => (
          <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
        ))}
      </View>

      {/* WebView Modal */}
      {selectedBlog && (
        <View style={styles.webViewContainer}>
          <View style={styles.webHeader}>
            <TouchableOpacity onPress={() => setSelectedBlog(null)}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.webHeaderText}>Reading Blog...</Text>
          </View>
          <WebView source={{ uri: selectedBlog }} style={{ flex: 1 }} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#c9d1d9',
    marginBottom: 15,
  },
  blogCard: {
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: '#161b22',
    padding: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  blogTitle: {
    fontSize: 29,
    color: 'white',
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#444',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#58a6ff',
  },
  webViewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    zIndex: 10,
  },
  webHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#161b22',
  },
  webHeaderText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
});

export default BlogsScreen;
