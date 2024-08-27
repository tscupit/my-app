import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const TubeItem = (props) => {
  const videoChoice = () => {
    props.chooseVid(props.id);
  };

  return (
    <TouchableWithoutFeedback onPress={videoChoice}>
      <View
        style={{
          paddingTop: 20,
          alignItems: "center",
          borderTopColor: "#000000",
          borderTopWidth: 2,
        }}
      >
        <Image
          style={{ width: "100%", height: 200 }}
          source={{ uri: props.imageSrc }}
        />
        <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Video = ({ navigation }) => {
  const [listLoaded, setListLoaded] = useState(false);
  const [videoList, setVideoList] = useState([]);

  const getVids = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyAv7imuLklYHkfs1mCOyYx-bUz0jMTyXLo"
      );
      const vids = await response.json();
      setVideoList(Array.from(vids.items));
    } catch (error) {
      console.error(error);
    } finally {
      setListLoaded(true);
    }
  };

  useEffect(() => {
    getVids();
  }, []);

  const selectVid = (vidID) => {
    navigation.navigate("VideoDetail", { vidId: vidID });
  };

  return (
    <View>
      {listLoaded && (
        <View style={{ paddingTop: 30 }}>
          <FlatList
            data={videoList}
            renderItem={({ item }) => (
              <TubeItem
                id={item.id.videoId}
                title={item.snippet.title}
                imageSrc={item.snippet.thumbnails.high.url}
                chooseVid={selectVid}
              />
            )}
          />
        </View>
      )}

      {!listLoaded && (
        <View style={{ paddingTop: 30 }}>
          <Text>LOADING</Text>
        </View>
      )}
    </View>
  );
};

export default Video;
