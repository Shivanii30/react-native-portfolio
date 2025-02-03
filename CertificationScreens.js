import React from 'react';
import { View, ScrollView, StyleSheet, Linking } from 'react-native'
;
import Card from './Card'; // Import the Card component

const CertificationsScreen = () => {
  const certifications = [
    {
      title: 'NPTEL',
      description: 'Certified by XYZ Academy',
      imageUrl : 'https://drive.google.com/uc?export=view&id=1wZSauyLglrC2yzQv8yssOMmiReZdTxwO',
      verifyUrl: 'https://drive.google.com/file/d/1wZSauyLglrC2yzQv8yssOMmiReZdTxwO/view?usp=sharing',
    },
    {
      title: 'Meta',
      description: 'Certified by ABC Institute',
      url : 'https://drive.google.com/file/d/1wZSauyLglrC2yzQv8yssOMmiReZdTxwO/view?usp=sharing',
      verifyUrl: 'https://example.com/verify/javascript',
    },
     {
      title: 'DL',
      description: 'Certified by ABC Institute',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1rDn2vGyKVe9ZG_nXPCBeLR8EziK_Fwe8',
      verifyUrl: 'https://example.com/verify/javascript',
    },
     {
      title: 'LLM',
      description: 'Certified by ABC Institute',
      imageUrl: 'https://example.com/javascript-certificate.jpg',
      verifyUrl: 'https://example.com/verify/javascript',
    },


  ];

  const handleVerify = (url) => {
    // Open the verification URL in a browser
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {certifications.map((cert, index) => (
        <Card
          key={index}
          title={cert.title}
          description={cert.description}
          imageUrl={cert.imageUrl}
          onVerify={() => handleVerify(cert.verifyUrl)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#0d1117',
  },
});

export default CertificationsScreen;
