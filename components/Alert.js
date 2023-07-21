import React , {
    useState ,
    useEffect ,
    forwardRef ,  
    useImperativeHandle , 
} from 'react';
import {View, StyleSheet, Text ,  TouchableOpacity} from 'react-native';
import helper from '../helper/helper';


// used variables
let closeAlertTimeOut ;
let typeStyle; 

const Alert  = forwardRef ((
    {},
    ref 
) => {

    const [alert , setAlert ] = useState({
        showAlert :  false , 
        alertType: "" , 
        alertMessage: "" , 
    }); 


    useEffect(()=>{
        clearTimeout(closeAlertTimeOut); 
    }, []);
     

    useImperativeHandle(ref , ()=>({
        alert : ( showAlert , type , message ) => {
            clearTimeout(closeAlertTimeOut); 
            setAlert({
                showAlert : showAlert , 
                alertType: type , 
                alertMessage: message , 
            });
            closeAlertTimeOut = setTimeout( () => closeAlert() , 4000);
        }, 
    }) , [] ) ;

   
    const closeAlert =  () => {
        setAlert({
            showAlert : false , 
            alertType: "" , 
            alertMessage: "" , 
        });
    }

    switch (alert.alertType) {
        case "error":
                typeStyle = styles.error; 
            break;
        case "success":
                typeStyle = styles.success; 
            break;
        case "warning":
                typeStyle = styles.warning; 
            break;
        default: typeStyle = styles.default;
            break;
    }

    
    return (
        <>
            {
                alert.showAlert ? 
                <View style={{...styles.layoutAlert,...typeStyle}}>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>closeAlert()}
                    >
                        {/* use close icon here (instead of Text) */}
                        <Text style={{fontWeight:"700", color:"#fff"}}>✕</Text>
                    </TouchableOpacity>
                    {
                        alert.alertMessage ? 
                        <Text style={{...styles.message}}>{helper.capitalize(alert.alertMessage)}</Text> 
                        :null 
                    }
                </View>
                : null 
            }
        </>   
    )
}) ; 

const styles =  StyleSheet.create({
    layoutAlert: {
        width: helper.screenWidth-30, 
        paddingVertical:10,
        paddingHorizontal:16, 
        borderWidth:3, 
        alignSelf:"center",
        borderRadius: 20,
        alignItems: "flex-start", 
        justifyContent: "center",
        position: 'absolute', 
        zIndex: 5000, 
        top: 20,   
    }, 
    message:{
        fontWeight: "400" ,
        fontSize:14 , 
        lineHeight: 18,
        color:"#fff", 
        width: "90%",
    }, 
    default:{
        backgroundColor: "black",
        borderColor: "white",
    }, 
    error: {
        borderColor: "#FF7165" ,
        backgroundColor: "#E60023", 
    }, 
    success: {
        borderColor: "#48AF7C" ,
        backgroundColor: "#009100",
    }, 
    warning: {
        borderColor: "#FFBA54",
        backgroundColor: "#F56702",
    },
    button: {
        position: "absolute" , 
        right: 16, 
        top:7,
    }
}); 

export default Alert ;