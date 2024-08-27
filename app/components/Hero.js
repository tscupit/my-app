import { StyleSheet, Image } from "react-native";

const Hero = () => {
  return (
    <Image
      style={styles.heroImage}
      source={require("./img/laptop2.jpg")}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  heroImage: {
    height: "100%",
    width: "100%",
    flex: 6,
  },
});

export default Hero;