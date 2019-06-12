import {Dimensions, StatusBar, StyleSheet,Platform} from 'react-native';
// import {  Platform } from 'react-native';

var deviceHeight = Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight : Dimensions.get('window').height;
module.exports = StyleSheet.create({
  headerstyles:{
    backgroundColor:"white",
    marginTop:Platform.OS === 'ios' ? 20 : 0,
    height:70,
    elevation: 2,
    marginBottom: 3,
    
  },
  imageStyle:{
    height:deviceHeight<=650?70 : 130,
    width:deviceHeight<=650?70 : 130
  },
  // mycont:{
  //   width:"100%",
  //   height:height*0.8
  // },
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  next_back_button_styles: {
    flexDirection: "row",
    //alignSelf: "center",
  },
  back_btnstyle: {
    borderRadius:10,
    padding:"3%",
    width:100,
    backgroundColor: "#82546d",
  },
  privacy: {
    height:"100%",
    width:"100%",
    borderRadius:2,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "red",
  },
  terms: {
    height:"100%",
    borderRadius:2,
    width:"100%",
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "green",
  },
  next_btnstyle: {
    borderRadius:10,
    padding:"3%",
    width:100,
    backgroundColor: "#695677",
  },
  submit_btnstyle: {
    padding:"3%",
    width: 100,
    backgroundColor: "red",
    borderRadius:10
  },
  ploicy_btnstyle: {
    margin: 8,
    width: 170,
    backgroundColor: "white"
  },
  password: {
    width:250,
    height:30,
    backgroundColor:'white',
    borderWidth: 1,
    fontSize:16,
    paddingLeft:10,
    marginTop:10,
    position:'relative',
    borderRadius:5,
    alignSelf:"center",
  },
  ViewPropertytype:{
    justifyContent: "center",
    padding:deviceHeight<=650?0:"5%"
  },
  singlefinalImage:{ 
    width: deviceHeight<=650?120:110,
    height: deviceHeight<=650?90:110
  },
  tickmark: { 
    width: deviceHeight<=650?100:110,
    height: deviceHeight<=650?100:110
   },
   page2style2:{
     flexDirection:"row",
     width:300,
      alignSelf:"center",
      marginTop:deviceHeight<=650?10:20
   },
   page2style3:{ 
    width: deviceHeight<=650?120:130,
    height: deviceHeight<=650?95:110
  },
  multifinalImage:{ 
    width: deviceHeight<=650?120:110,
    
    height: deviceHeight<=650?90:110,
    
  },
  credit:{ 
    width: deviceHeight<=650?80:100,
    height: deviceHeight<=650?80:100,
    
  },
  page3style2:{
    flexDirection:"row",
    width:deviceHeight<=650?260:280,
    alignSelf:"center",
    marginTop:deviceHeight<=650?0:20
  },
  multifinalview:{
    alignItems: 'flex-end',
    position:"absolute",
    right: deviceHeight<=650?10:0,
  },
  page3style1:{
    flexDirection:"row",
    width:deviceHeight<=650?260:280,
    alignSelf:"center"
    },
   buttoncss:{flexDirection:"row",width:"100%",justifyContent:"center",marginTop:deviceHeight<=650?"5%":"10%", height: 60 }
});
      