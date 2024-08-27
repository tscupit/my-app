import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/views/Home.js';
import AboutScreen from './app/views/About.js';
import RegisterScreen from './app/views/Register.js';
import LoginScreen from './app/views/Login.js';
import GloboHeader from './app/components/Header.js';
import Blog from './app/views/Blog.js';
import BlogDetail from './app/views/BlogDetail.js';
import Quiz from './app/views/Quiz.js';
import QuizFinish from './app/views/QuizFinish.js';
import Video from './app/views/Video.js';
import VideoDetail from './app/views/VideoDetail.js';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen
          name='VideoDetail'
          component={VideoDetail}
          options={{title: 'Watch Lesson'}}
        />
        <Stack.Screen
          name='Videos'
          component={Video}
          options={{title: 'Video Lessons'}}
        />
        <Stack.Screen 
          name='QuizFinish' 
          component={QuizFinish} 
          options={{headerShown: false}}
        /> 
        <Stack.Screen 
          name='Quiz'
          component={Quiz}
          options={{title:''}}
        /> 
        <Stack.Screen 
          name='BlogDetail' 
          component={BlogDetail} 
          options={{headerShown: false}}
        />  
        <Stack.Screen 
          name='Blog' 
          component={Blog} 
          options={{title: 'Globo Blog'}}
        />  
        <Stack.Screen 
          name='Register' 
          component={RegisterScreen} 
          options={{headerShown:false}}
        />  
        <Stack.Screen 
          name='Login' 
          component={LoginScreen} 
          options={{headerShown: false}}
        />  
        <Stack.Screen 
          name='About'
          component={AboutScreen}
          options={{title: 'About Us'}} 
        />
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{header: ()=><GloboHeader />}}
        />
      </Stack.Navigator>    
    </NavigationContainer>    
  );  
};

export default App;
