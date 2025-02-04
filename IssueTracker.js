import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const issues = [
  {
    id: 1,
    title: 'React Native',
    status: 'closed', // mastered skill
    comments: [
      'Completed 5 projects using React Native.',
      'Learned state management with Redux.',
      'Currently exploring animations in React Native.',
    ],
  },
  {
    id: 2,
    title: 'Node.js',
    status: 'open', // learning in progress
    comments: [
      'Built a REST API with Express.js.',
      'Learning about authentication with JWT.',
      'Planning to build a real-time chat app.',
    ],
  },
  {
    id: 3,
    title: 'TypeScript',
    status: 'open', // learning in progress
    comments: [
      'Started learning TypeScript basics.',
      'Migrating a JavaScript project to TypeScript.',
      'Exploring advanced TypeScript features.',
    ],
  },
];

const IssueTracker = () => {
  const [expandedIssueId, setExpandedIssueId] = useState(null);

  const toggleComments = (id) => {
    setExpandedIssueId(expandedIssueId === id ? null : id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}></Text>
      {issues.map((issue) => (
        <View key={issue.id} style={styles.issueContainer}>
          <TouchableOpacity onPress={() => toggleComments(issue.id)}>
            <View style={styles.issueHeader}>
              <Icon
                name={issue.status === 'closed' ? 'issue-closed' : 'issue-opened'}
                size={20}
                color={issue.status === 'closed' ? 'green' : 'red'}
              />
              <Text style={styles.issueTitle}>{issue.title}</Text>
            </View>
          </TouchableOpacity>

          {expandedIssueId === issue.id && (
            <View style={styles.commentsContainer}>
              {issue.comments.map((comment, index) => (
                <View key={index} style={styles.comment}>
                  <Icon name="comment" size={16} color="#58a6ff" />
                  <Text style={styles.commentText}>{comment}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#0d1117',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c9d1d9',
    marginBottom: 20,
    textAlign: 'center',
  },
  issueContainer: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 6,
    backgroundColor: '#161b22',
    padding: 10,
  },
  issueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  issueTitle: {
    fontSize: 18,
    color: '#c9d1d9',
    marginLeft: 10,
  },
  commentsContainer: {
    marginTop: 10,
    paddingLeft: 30,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentText: {
    fontSize: 14,
    color: '#c9d1d9',
    marginLeft: 10,
  },
});

export default IssueTracker;
