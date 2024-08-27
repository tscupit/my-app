import {WebView} from 'react-native-webview';

const VideoDetail = ({route}) => {
    const {vidId} = route.params;

    let tubeUrl = `https://www.youtube.com/embed/${vidId}`;

    return (
        <WebView
            style={{marginTop: 20}}
            javaScriptEnabled={true}
            source={{uri: tubeUrl}}        
        />
    )
};

export default VideoDetail;