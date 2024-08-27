import {
    StyleSheet, 
    Text,
    ScrollView,
    Image,
  } from "react-native";
  
  const aboutReact = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  
  const whatReact = `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  
  const AboutScreen = () => {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.pics}
          source={require("../components/img/arch640.jpg")}
        />
        <Text style={styles.aboutTitle}>Who We Are</Text>
        <Text style={styles.aboutText}>{aboutReact}</Text>
        <Image
          style={styles.pics}
          source={require("../components/img/computer640.jpg")}
        />
        <Text style={styles.aboutTitle}>What We Do</Text>
        <Text style={styles.aboutText}>{whatReact}</Text>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
    },
    pics: {
      height: 300,
    },
    aboutTitle: {
      paddingTop: 10,
      textAlign: "center",
    },
    aboutText: {
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },
  });
  
  export default AboutScreen;