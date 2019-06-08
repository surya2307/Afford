import {StyleSheet,Platform} from 'react-native';
module.exports = StyleSheet.create({
  headerstyles:{
    backgroundColor:"white",
    marginTop:Platform.OS === 'ios' ? 20 : 0,
    height:70,
    elevation: 2,
    marginBottom: 3,
    
  },
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
    height:60,
    backgroundColor:'white',
    borderWidth: 1,
    fontSize:16,
    paddingLeft:10,
    marginTop:10,
    position:'relative',
    borderRadius:5,
    alignSelf:"center",
  },dropdown_2: {
    // alignSelf: 'flex-end',
    width: 200,
    marginTop: 32,
    right: 8,
    borderWidth: 0,
    borderRadius: 3,
    backgroundColor: 'cornflowerblue',
  },
  dropdown_2_text: {
    width:200,
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 200,
    height: 300,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
});
      