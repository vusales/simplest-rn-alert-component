/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,  {
  useRef , 
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Alert from './components/Alert';
import helper from './helper/helper';



function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const alertRef =  useRef(); 

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            alignItems: "center" , 
            justifyContent: "center",
            height:helper.screenHeight ,
          }}>
        
          <TouchableOpacity
          style={styles.button}
          onPress={()=>alertRef.current.alert(true , "error" , "This is error alert!!" )}
          >
            <Text style={{color:"#fff"}}>Click here to see the alert </Text>
          </TouchableOpacity>


          {/* here */}
          <Alert
          ref={alertRef}
          />
      
          
        </View>
      </ScrollView>


      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    borderRadius: 10 , 
    color: "#000" , 
    paddingVertical: 12 , 
    paddingHorizontal: 24 , 
    backgroundColor: "black", 
    marginHorizontal: 16,
  }
});

export default App;
