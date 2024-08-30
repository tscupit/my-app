import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Config from 'react-native-config';
const apiKey = Config.YOUTUBE_API_KEY;

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
console.log(`apiKey: ${apiKey}`);
  const getVids = async () => {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=${apiKey}`
        );
        console.log()
        // const response = await fetch(
        //     "https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyAv7imuLklYHkfs1mCOyYx-bUz0jMTyXLo"
        // );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const vids = await response.json();
        console.log(vids); // Log the full response to check its structure

        if (!vids.items || vids.items.length === 0) {
            throw new Error('No videos found or items is undefined.');
        }

        setVideoList(Array.from(vids.items));
    } catch (error) {
        console.error('Error fetching videos:', error.message);
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
