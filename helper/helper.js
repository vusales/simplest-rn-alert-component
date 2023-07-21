import React from "react";
import { 
    Dimensions,  
} from 'react-native';

const helper = {
    capitalize: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
}

export default helper ; 