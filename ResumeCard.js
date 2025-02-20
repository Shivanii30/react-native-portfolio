import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import Markdown from "react-native-markdown-display";

const markdownContent = `

# 👋 About Me
I write code, I break code, and then I fix it—sometimes 

in that exact order. It’s all part of the process, right?  

When I’m not debugging or optimizing, you’ll find me 

making time for what truly matters—because life isn’t 

just about writing great code; it’s about living well,

too.  Whether I’m meditating, relaxing, or joyfully

thinking outside the box (often with a cup of tea in 

hand), I’m always exploring ways to bring creativity,

balance, and a little bit of magic into everything I do.

After all, the best solutions often come when you step 

back, breathe, and let the ideas flow.  

Click the button below to check out my resume.
`;

const resumeUrl = "https://drive.google.com/uc?export=download&id=1oFOLo5ngn2glelTAYAf0kIdQdXP4p0pK"; // Replace with your actual resume link

const ResumeCard= () => {
  const handleViewResume = () => {
    Linking.openURL(resumeUrl).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <ScrollView style={styles.container}>
      <Markdown style={markdownStyles}>{markdownContent}</Markdown>
      <TouchableOpacity style={styles.resumeButton} onPress={handleViewResume}>
        <Text style={styles.buttonText}>📄 Hire Me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#0d1117",
  },
  resumeButton: {
    backgroundColor: "#238636",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

const markdownStyles = {
  body: { color: "#c9d1d9", fontSize: 16 },
  heading1: { fontSize: 24, fontWeight: "bold", color: "#58a6ff" },
  heading2: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  code_block: { backgroundColor: "#161b22", padding: 10, borderRadius: 5, color: "#c9d1d9" },
};


export default ResumeCard;
