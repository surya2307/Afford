import React from 'react';
import {  View, Image,TextInput,TouchableOpacity,Alert} from 'react-native';
import Display from 'react-native-display';

import {
  Button,
  Text,
  Fonts,
  Container,
  Header,
  Content,
  Footer,
  
} from "native-base";
import { Dropdown } from 'react-native-material-dropdown'; // 0.7.2
import Modal from "react-native-modal";
import Slider from 'react-native-slider';
import axios from 'axios';
import styles from '../css/afford';
export default class Afford extends React.Component {
  static navigationOptions = {
    header: null
  }
   constructor(props) {
    super(props);
    global.c1=0
    global.c2=0
   // global.c3=0
    this.state = {
      //quesetions being fetched from server
      //ques label is for questions
      //text label is for options for that question

      //question1
      ques1_ques:"",
      ques1_text1:"",
      ques1_text2:"",
     //question2
      ques2_ques:"",
      ques2_text1:"",
      ques2_text2:"",
      ques2_text3:"",
      ques2_text4:"",
      //question3
      ques3_ques:"",
      ques3_text1:"",
      ques3_text2:"",
      ques3_text3:"",
      ques3_text4:"",

      //question4
      ques4_ques:"",
      //question5
      ques5_ques:"",
      //question6
      ques6_ques:"",
      //question7
      ques7_ques:"",

      //question8
      ques8_ques:"",
      ques8_text1:"",
      ques8_text2:"",

      //question9
      ques9_ques:"",

      //question10
      ques10_ques:"",
      ques10_text1:"",
      ques10_text2:"",

      //question11
      ques11_ques:"",

      //question12
      ques12_ques:"",
      ques12_text1:"",
      ques12_text2:"",

      //question13
      ques13_ques:"",
      ques13_text1:"",
      ques13_text2:"",
      ques13_text3:"",
      ques13_text4:"",

      //question14
      ques14_ques:"",
      ques14_text1:"",
      ques14_text2:"",
      ques14_text3:"",
      ques14_text4:"",

      //validation for proper names
      validcity:false,
      validfname:false,
      validlname:false,
      //errormessages

      //error message for question 1
      errorvalue:"",
      //error message for question 2
      errorvalue1:"",
      //error message for question 3
      errorvalue2:"",
      //error message for question 8
      errorvalue3:"",
      //error message for question 9
      errorvalue4:"",
      //error message for question 10
      errorvalue5:"",
      //error message for question 11
      errorvalue6:"",
      //error message for question 12
      errorvalue7:"",
      //error message for question 13
      errorvalue8:"",
      errorvalue9:"",
      stateerrorvalue8:"",
      cityerrorvalue:"",
      //error message for question 14
      errorvalue10:"",
      errorvalue11:"",
      errorvalue13:"",
      errorvalue21:"",
      //error message
      errorvalue12:"",
      //called by a function, need to write a proper comment for these
      //are stored are data variable
      loanType_data:"",
      propertyType_data:"",
      credit_data:"",
      propertyValue_data:"",
      mortageBal_data:"",
      currIntRate_data:"",
      downPayament_data:"",
      bankrupt_data:false,
      desireLoanType_data:"",
      isVeteran_data:false,
      borrowAddCash_data:false,
      address_data:"",
      city_data:"",
      zip_data:"",
      fName_data:"",
      lName_data:"",
      email_data:"",
      phoneNumber_data:"",
      mortageRates_data:"",
      //back button , next button and submit button
      enable_back: false,
      enable_next: true,
      enable_submit:false,
      index: 0,
      privacy_enable:false,
      value: 75000,
      mortage_value:50000,
      current_interest_value: 75.50,
      down_payment_value:15.00,
      mainModal:false,
      isReady: false,
      loan_type:'',
      mortage_late:'',
      address:'',
      city:'',
      zip:'',
      property:'',
      fname:"",
      lname:"",
      phone:"",
      email:"",
     
      showimage1:false,
      showimage2:false,
      showimage3:false,
      showimage4:false,
      showimage5:false,
      showimage6:false,
      showimage7:false,
      showimage8:false,
      showimage9:false,
      showimage10:false,
      showimage11:false,
      showimage12:false,
      showimage13:false,
      showimage14:false,
      showimage15:false,
      showimage16:false,
    }
  }
  Terms(){
    this.setState({ mainModal: !this.state.mainModal });
  }
  Privacy(){
    this.setState({
      privacy_enable:true
    })
  }
  change(value) {
    this.setState( {
        value: parseFloat(value),
        propertyValue_data:value
    });
  }
  checkValidCity(str){
      let res=this.checkString(str);
      console.log(res);
      if(res==false){
      this.setState({
        cityerrorvalue:"Please Enter Valid City Name",
        validcity:res,
      });
    }
     else{
       this.setState({
         cityerrorvalue:"",
        validcity:res,
      });
     }    
  }
  checkValidfname(str){
      let res=this.checkString(str);
      console.log(res);
      if(res==false){
      this.setState({
        errorvalue10:"Please Enter a Valid Name",
        validfname:res,
      });
    }
     else{
       this.setState({
         errorvalue10:"",
        validfname:res,
      });
     }    
  }
  checkValidlname(str){
      let res=this.checkString(str);
      console.log(res);
      if(res==false){
      this.setState({
        errorvalue11:"Please Enter a Valid Name",
        validlname:res,
      });
    }
     else{
       this.setState({
         errorvalue11:"",
        validlname:res,
      });
     }    
  }
  checkString(str){
       var regex = new RegExp("^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$");
         
         if (regex.test(str)) {
            return true;
         }
       
         return false;
 }
  Mortage(value){
    this.setState( {
      mortage_value: parseFloat(value),
      mortageBal_data:value
    });
  }
  CurrentInterest(value){
    this.setState( {
      current_interest_value: value,
      currIntRate_data:value
    });
  }
  DownPayment(value){
    this.setState( {
      down_payment_value: value,
      downPayament_data:value
    });
  }
  SubmitButton(){
    if(!this.state.email.includes("@") || !this.state.email.includes(".")){
      this.setState({
        errorvalue21:"Enter valid Email.",
         
        //index:0,
        //enable_back:false
      })
    }
    if(this.state.index==13 && !this.state.fname ){
      this.setState({
        errorvalue10:"Please enter the First name.",
        //index:0,
        //enable_back:false
      })
    }
    if(this.state.index==13 && this.state.validfname==false ){
      this.setState({
        errorvalue10:"Please Enter a Valid Name",
        //index:0,
        //enable_back:false
      })
    }
    if(this.state.index==13 && !this.state.lname ){
      this.setState({
        errorvalue11:"Please enter the Last name.",
        //index:0,
        //enable_back:false
      })
    }
    if(this.state.index==13 && this.state.validlname==false ){
      this.setState({
        errorvalue11:"Please Enter a Valid Name",
        //index:0,
        //enable_back:false
      })
    }
    if(this.state.index==13 && !this.state.email.includes("@") &&  !this.state.email.includes(".")){
      this.setState({
        errorvalue12:"This field is required.",
        //index:0,
        //enable_back:false
      })
    }
    if(this.state.index==13 && !this.state.phone ){
      this.setState({
        errorvalue13:"Please enter the home phone.",
        //index:0,
        //enable_back:false
      })
    }
    if(this.state.index==13 && (this.state.fname && this.state.validfname && this.state.lname && this.state.validlname && this.state.email.includes("@") && this.state.email.includes(".")  && this.state.phone )){
      this.setState({
        errorvalue10:"",
        errorvalue11:"",
        errorvalue12:"",
        errorvalue13:"",
        
        //  index:13,
        //  enable_next: false,
        //  enable_submit:true
      })
       
      var data ={
        "loanType":this.state.loanType_data,
        "propertyType": this.state.propertyType_data,
        "credit": this.state.credit_data,
        "propertyValue": this.state.propertyValue_data,
        "mortageBalance": this.state.mortageBal_data,
        "currentInterestRate": this.state.currIntRate_data,
        "downPayament":this.state.downPayament_data,
        "bankruptcy":this.state.bankrupt_data,
        "desireLoanType": this.state.desireLoanType_data,
        "isVeteran": this.state.isVeteran_data,
        "mortageRates": this.state.mortageRates_data,
        "borrowAddCash": this.state.borrowAddCash_data,
        "propertyInfo":  {
                            "address": this.state.address_data ,
                            "city": this.state.city_data, 
                            "zip":this.state.zip_data
                          }
                        ,
        "firstName": this.state.fName_data,
        "lastName": this.state.lName_data,
        "emailId": this.state.email_data,
        "phoneNumber":this.state.phoneNumber_data
      }
      const self = this;
      const config = {
        url : 'http://69.55.49.121:3001/v1/userTemplates/register',

        
        data:data,
        method : 'post',
       
      };
      axios(config).then((response)=>{
        //this.props.navigation.navigate("Submit" )
        Alert.alert('Successfully Submitted.');
        this.setState({ 
          index: 0,
          enable_back: false,
          enable_next: true,
          enable_submit:false,
          showimage1:false,
          showimage2:false,
          showimage3:false,
          showimage4:false,
          showimage5:false,
          showimage6:false,
          showimage7:false,
          showimage8:false,
          showimage9:false,
          showimage10:false,
          showimage11:false,
          showimage12:false,
          showimage13:false,
          showimage14:false,
          showimage15:false,
          showimage16:false,
          value: 75000,
          mortage_value:50000,
          current_interest_value: 75.50,
          down_payment_value:15.00,
          bankrupt_data:false,
          loan_type:'',
          mortage_late:'',
          // mainModal:false,
          // isReady: false,
          address:'',
          city:'',
          zip:'',
          property:'',
          fname:"",
          lname:"",
          phone:"",
          email:"",
          errorvalue:"",
          errorvalue1:"",
          errorvalue2:"",
          errorvalue3:"",
          errorvalue4:"",
          errorvalue5:"",
          errorvalue6:"",
          errorvalue7:"",
          errorvalue8:"",
          errorvalue21:"",
          stateerrorvalue8:"",
          cityerrorvalue:"",
          errorvalue9:"",
          errorvalue10:"",
          errorvalue11:"",
          errorvalue12:"",
          errorvalue13:"",
          validcity:false,
          validfname:false,
          validlname:false,
        });
      }).catch((error) => {
         console.log(error.message);
      })
      
    }
  }
  Dismiss(){
    this.setState({ mainModal: !this.state.mainModal });
  }
  async componentWillMount() {
   
    this.setState({ isReady: false });
  }
  PrivacyPolicy(){
    this.props.navigation.navigate("Privacy")
    
  }
  changeMortageLates(value){
    this.setState({
      mortage_late:value
    })
  }
  Address(text){
    this.setState({
      address:text,
      address_data:text.toString()
    })
  }
  City(text){
    this.checkValidCity(text);
    this.setState({
      city:text,
      city_data:text.toString()
    })
  }
  Property(text){
    this.setState({
      property:text
    })
  }
  Zip(text){
      let len=0;
      if((text.toString().length)==5 ){
          len=5;
      }
      if(len==5){
        this.setState({
          zip:text,
          zip_data:text.toString(),
          errorvalue9:""
         })
      }
      else{
        this.setState({
          zip:text,
          zip_data:text.toString()
         })
      }  
  }
  FName(text){
    this.checkValidfname(text);
    this.setState({
      fname:text,
      fName_data:text.toString()
    })
  }
  LName(text){
    this.checkValidlname(text);
    this.setState({
      lname:text,
      lName_data:text.toString()
    })
  }
  Phone(text){
    this.setState({
      phone:text,
      phoneNumber_data:text
    })
  }
  Email(text){
    this.setState({
      email:text,
      email_data:text.toString()
    })
    
  }
  backButtonQuick() {
    if(this.state.index < 15 ) {
      this.setState({
        index: this.state.index-1,
        enable_next: true,
        enable_back:true,
        enable_submit:false
      });
    }
    if(this.state.index == 0) {
      this.setState({
        index: this.state.index,
        enable_next: true,
        enable_back:false,
        enable_submit:false
      });
    }
    if(this.state.index == 1) {
      this.setState({
        //index: this.state.index,
        enable_next: true,
        enable_submit:false,
        enable_back:false
      });
    }
  }
  nextButtonQuick() {
    
    if(this.state.index < 13) {
      if(this.state.index==0 && this.state.showimage1==false && this.state.showimage2==false){
        this.setState({
          errorvalue:"Please select an option to continue...",
          //index:0,
          //enable_back:false
        })
      }
      if(this.state.index==0 && (this.state.showimage1==true || this.state.showimage2==true)){
        this.setState({
          errorvalue:"",
          index:1,
          enable_back:true
        })
      }
      if(this.state.index==1 && this.state.showimage3==false && this.state.showimage4==false && this.state.showimage5==false && this.state.showimage6==false ){
        this.setState({
          errorvalue1:"Please select an option to continue...",
          //index:0,
        // enable_back:true
        })
      }
      if(this.state.index==1 && (this.state.showimage3==true || this.state.showimage4==true || this.state.showimage5==true || this.state.showimage6==true)){
        this.setState({
          errorvalue1:"",
          index:2
        })
      }
      if(this.state.index==2 && this.state.showimage7==false && this.state.showimage8==false && this.state.showimage9==false  && this.state.showimage10==false){
        this.setState({
          errorvalue2:"Please select an option to continue...",
          //index:0,
        // enable_back:true
        })
      }
      if(this.state.index==2 && (this.state.showimage7==true || this.state.showimage8==true || this.state.showimage9==true || this.state.showimage10==true)){
      this.setState({
        errorvalue2:"",
        index:3
      })
      }
      if(this.state.index==3 && this.state.value){
        this.setState({
          propertyValue_data:this.state.value,
          index:4
        })
      }
      if(this.state.index==4 && this.state.mortage_value){
        this.setState({
          mortageBal_data:this.state.mortage_value,
          index:5
        })
      }
      if(this.state.index==5 && this.state.current_interest_value){
        this.setState({
          currIntRate_data:this.state.current_interest_value,
          index:6
        })
      }
      if(this.state.index==6 && this.state.down_payment_value){
        this.setState({
          downPayament_data:this.state.down_payment_value,
          index:7
        })
      }
      if(this.state.index==7 && this.state.showimage11==false && this.state.showimage12==false){
        this.setState({
          errorvalue3:"Please select an option to continue...",
          //index:0,
          //enable_back:false
        })
      }
      if(this.state.index==7 && (this.state.showimage11==true || this.state.showimage12==true )){
      this.setState({
        errorvalue3:"",
        index:8
      })
      }
      if(this.state.index==8 && this.state.loan_type){
        this.setState({
          errorvalue4:"",
          index:9
        })
      }
      if(this.state.index==8 && !this.state.loan_type){
        this.setState({
          errorvalue4:"Please select an option to continue...",
          
        })
      }
      if(this.state.index==9 && this.state.showimage13==false && this.state.showimage14==false){
        this.setState({
          errorvalue5:"Please select an option to continue...",
          //index:0,
          //enable_back:false
        })
      }
      if(this.state.index==9 && (this.state.showimage13==true || this.state.showimage14==true )){
      this.setState({
        errorvalue5:"",
        index:10
      })
      }
      if(this.state.index==10 && this.state.mortage_late){
        this.setState({
          errorvalue6:"",
          index:11
        })
      }
      if(this.state.index==10 && !this.state.mortage_late){
        this.setState({
          errorvalue6:"Please select an option to continue...",
          
        })
      }
      if(this.state.index==11 && this.state.showimage15==false && this.state.showimage16==false){
        this.setState({
          errorvalue7:"Please select an option to continue...",
          //index:0,
          //enable_back:false
        })
      }
      if(this.state.index==11 && (this.state.showimage15==true || this.state.showimage16==true )){
      this.setState({
        errorvalue7:"",
        index:12
      })
      }
      if(this.state.index==12 && !this.state.address   ){
        this.setState({
          errorvalue8:"Please Enter Your Address",
          //index:0,
          //enable_back:false
        })
      }
      if(this.state.index==12 && !this.state.property   ){
        this.setState({
          stateerrorvalue8:"Please Select Your State",
          //index:0,
          //enable_back:false
        })
      }
      if(this.state.index==12 && !this.state.city   ){
        this.setState({
          cityerrorvalue:"Please Enter Valid City Name",
          //index:0,
          //enable_back:false
        })
      }
      if(this.state.index==12 && !this.state.zip ){
        this.setState({
          errorvalue9:"Please Enter Your Current Zip Code",
          //index:0,
          //enable_back:false
        })
      }
      if(this.state.index==12 && ((this.state.zip).toString().length)<5 ){
        this.setState({
          errorvalue9:"Enter Valid Zip Code",
          //index:0,
          //enable_back:false
        })
      }
      if(this.state.index==12 && (this.state.address && this.state.zip && this.state.validcity && ((this.state.zip.toString().length)<5)==false)){
        this.setState({
          errorvalue8:"",
          cityerrorvalue:"",
          errorvalue9:"",
          index:13,
          enable_next: false,
          enable_submit:true
        })
      }
    }
    if(this.state.index == 1) {
      this.setState ({
        enable_next: true,
        enable_back:true
      });
    }
  }
  handleChangeRefinance(){
    this.setState({
      showimage1:true,
      showimage2:false,
      loanType_data:"Refinance",
      index:1,
      enable_back:true
    })
    global.c1=global.c1+1
    if(global.c1>1){
      this.setState({
        showimage3:false,
        showimage4:false,
        showimage5:false,
        showimage6:false,
        showimage7:false,
        showimage8:false,
        showimage9:false,
        showimage10:false
      })
    }
  }
  handleChangePurchase(){
    this.setState({
      showimage2:true,
      showimage1:false,
      loanType_data:"Purchase",
      index:1,
      enable_back:true
    })
    global.c1=global.c1+1
    if(global.c1>1){
      this.setState({
        showimage3:false,
        showimage4:false,
        showimage5:false,
        showimage6:false,
        showimage7:false,
        showimage8:false,
        showimage9:false,
        showimage10:false
      })
    }

  }
  handleChangeSingle(){
    this.setState({
      showimage3:true,
      showimage4:false,
      showimage5:false,
      showimage6:false,
      propertyType_data:"Single Family",
      index:2,
      // enable_back:true
    })
    global.c2=global.c2+1
    if(global.c2>1){
      this.setState({
        showimage7:false,
        showimage8:false,
        showimage9:false,
        showimage10:false
      })
    }
  }
  handleChangeMulti(){
    this.setState({
      showimage4:true,
      showimage3:false,
      showimage5:false,
      showimage6:false,
      propertyType_data:"Multi Family",
      index:2,
      // enable_back:true
    })
    global.c2=global.c2+1
    if(global.c2>1){
      this.setState({
        showimage7:false,
        showimage8:false,
        showimage9:false,
        showimage10:false
      })
    }
  }
  handleChangeCando(){
    this.setState({
      showimage4:false,
      showimage3:false,
      showimage5:true,
      showimage6:false,
      propertyType_data:"Cando Family",
      index:2,
      // enable_back:true
    })
    global.c2=global.c2+1
    if(global.c2>1){
      this.setState({
        showimage7:false,
        showimage8:false,
        showimage9:false,
        showimage10:false
      })
  }
  }
  handleChangeTownHouse(){
    this.setState({
      showimage4:false,
      showimage3:false,
      showimage5:false,
      showimage6:true,
      propertyType_data:"Townhouse Family",
      index:2,
      // enable_back:true
    })
    global.c2=global.c2+1
    if(global.c2>1){
      this.setState({
        showimage7:false,
        showimage8:false,
        showimage9:false,
        showimage10:false
      })
  }
}
  handleChangeExcellent(){
    this.setState({
      showimage8:false,
      showimage9:false,
      showimage10:false,
      showimage7:true,
      credit_data:"Excellent",
      index:3,
      // enable_back:true
    })
  }
  handleChangeGood(){
    this.setState({
      showimage8:true,
      showimage9:false,
      showimage10:false,
      showimage7:false,
      credit_data:"Good",
      index:3,
      // enable_back:true
    })
  }
  handleChangeFair(){
    this.setState({
      showimage8:false,
      showimage9:true,
      showimage10:false,
      showimage7:false,
      credit_data:"Fair",
      index:3,
      // enable_back:true
    })
  }
  handleChangePoor(){
    this.setState({
      showimage8:false,
      showimage9:false,
      showimage10:true,
      showimage7:false,
      credit_data:"Poor",
      index:3,
      // enable_back:true
    })
  }
  handleChangeBankruptcyYes(){
    this.setState({
      bankrupt_data:true,
      showimage11:true,
      index:8,
      
    })
  }
  handleChangeBankruptcyNo(){
    this.setState({
      bankrupt_data:false,
      showimage12:true,
      index:8,
      
    })
  }
  handleChangeLoanType(value){
    this.setState({
      loan_type:value,
      index:9,
      desireLoanType_data:value.toString()
    })
  }
  handleChangeVeteranYes(){
    this.setState({
      showimage13:true,
      index:10,
      isVeteran_data:true
    })
  }
  handleChangeVeteranNo(){
    this.setState({
      showimage14:true,
      index:10,
      isVeteran_data:false
    })
  }
  handleChangeMortageLates(value){
    this.setState({
      mortage_late:value,
      mortageRates_data:value.toString(),
      index:11
    })
  }
  handleChangeBorrowYes(){
    this.setState({
      showimage15:true,
      index:12,
      borrowAddCash_data:true
    })
  }
  handleChangeBorrowNo(){
    this.setState({
      showimage16:true,
      index:12,
      borrowAddCash_data:false
    })
  }
   
   
   componentDidMount() {
     
    const self = this;
 
     const config = {
       url : "http://69.55.49.121:3001/v1/userTemplates/get-questions-list",
      
       method: 'post',
       
     };
     axios(config).then((res)=>{
         
      // console.log("test..", res.data.result)
        this.setState({
          ques1_text1 : res.data.result[0].Answers[0],
          ques1_text2 : res.data.result[0].Answers[1],
          ques1_ques:res.data.result[0].QuestionText,

          ques2_text1 : res.data.result[1].Answers[0],
          ques2_text2 : res.data.result[1].Answers[1],
          ques2_text3 : res.data.result[1].Answers[2],
          ques2_text4 : res.data.result[1].Answers[3],
          ques2_ques:res.data.result[1].QuestionText,

          ques3_text1 : res.data.result[2].Answers[0],
          ques3_text2 : res.data.result[2].Answers[1],
          ques3_text3 : res.data.result[2].Answers[2],
          ques3_text4 : res.data.result[2].Answers[3],
          ques3_ques:res.data.result[2].QuestionText,

          ques4_ques:res.data.result[3].QuestionText,
          ques5_ques:res.data.result[4].QuestionText,
          ques6_ques:res.data.result[5].QuestionText,
          ques7_ques:res.data.result[6].QuestionText,

          ques8_text1 : res.data.result[7].Answers[0],
          ques8_text2 : res.data.result[7].Answers[1],
          ques8_ques  :res.data.result[7].QuestionText,

          ques9_ques  :res.data.result[8].QuestionText,

          ques10_text1 : res.data.result[9].Answers[0],
          ques10_text2 : res.data.result[9].Answers[1],
          ques10_ques  :res.data.result[9].QuestionText,

          ques11_ques:res.data.result[10].QuestionText,

          ques12_text1 : res.data.result[11].Answers[0],
          ques12_text2 : res.data.result[11].Answers[1],
          ques12_ques  :res.data.result[11].QuestionText,

          ques13_text1 : res.data.result[12].Labels[0],
          ques13_text2 : res.data.result[12].Labels[1],
          ques13_text3 : res.data.result[12].Labels[2],
          ques13_text4 : res.data.result[12].Labels[3],
          ques13_ques:res.data.result[12].QuestionText,

          ques14_text1 : res.data.result[13].Labels[0],
          ques14_text2 : res.data.result[13].Labels[1],
          ques14_text3 : res.data.result[13].Labels[2],
          ques14_text4 : res.data.result[13].Labels[3],
          ques14_ques:res.data.result[13].QuestionText,
          isReady:true,
        })

        console.log("fgt...:",res.data.result[12])
              }).catch((error)=>{
                   console.log(error.message);
             });
  }
   
  render() {
    

     let loan_type_data=[ {
      value: "Fixed",
    }, {
      value: 'Adjustable',
    }
    ];
    let mortage_late_data=[ {
      value: "I'm not behind",
    }, {
      value: 'One',
    },{
      value: "One or Two",
    }, {
      value: 'Two or More',
    },
    {
      value: "Three or More",
    }
    ];
    let property_data=[     {
      value: "Alabama",
    }, {
      value: 'Alaska',
    },{
      value: "Arizona",
    }, {
      value: 'Arkansas',
    },
    {
      value: "California",
    },{
      value: "Colorado",
    }, {
      value: 'Connecticut',
    },
    {
      value: "Delaware",
    }, {
      value: 'Florida',
    },{
      value: "Georgia",
    }, {
      value: 'Hawaii',
    },
    {
      value: "Idaho",
    },{
      value: "Illinois",
    }, {
      value: 'Indiana',
    },
    {
      value: "Iowa",
    }, {
      value: 'Kansas',
    },{
      value: "Kentucky",
    }, {
      value: 'Louisiana',
    },
    {
      value: "Maine",
    },{
      value: "Maryland",
    }, {
      value: 'Massachusetts',
    },
    {
      value: "Michigan",
    }, {
      value: 'Minnesota',
    },{
      value: "Mississippi",
    }, {
      value: 'Missouri',
    },
    {
      value: "Montana",
    },{
      value: "Nebraska",
    }, {
      value: 'Nevada',
    },
    {
      value: "New Hampshire",
    }, {
      value: 'New Jersey',
    },{
      value: "New Mexico",
    }, {
      value: 'New York',
    },
    {
      value: "North Carolina",
    },{
      value: "North Dakota",
    }, {
      value: 'Ohio',
    },
    {
      value: "Oklahoma",
    }, {
      value: 'Oregon',
    },{
      value: "Pennsylvania",
    }, {
      value: 'Rhode Island',
    },
    {
      value: "South Carolina",
    },{
      value: "South Dakota",
    }, {
      value: 'Tennessee',
    },
    {
      value: "Texas",
    }, {
      value: 'Utah',
    },
    {
      value: "Vermont",
    },{
      value: "Virginia",
    }, {
      value: 'Washington',
    },
    {
      value: "West Virginia",
    }, {
      value: 'Wisconsin',
    },
    {
      value: "Wyoming",
    }
    ];
    // let arr1 = this.state.questions_list
    //console.log("opoppppp...:",this.state.questions_list.Text)
    if (this.state.isReady) {
      return (
        <Container>
          <Header style={styles.headerstyles}>
            <View style={{alignItems: 'center',flex: 1,justifyContent: 'center'}} >
              <Image 
                source={require('../assets/main.png')}
              />
            </View>
          </Header>
          <Content style={{}} >
            <View style={{flex: 1,flexDirection: 'column',justifyContent: "center"}}>
              {this.state.index===0 &&


                <View>

                
                  <View style={{ height: 100, backgroundColor: 'white',justifyContent: "center"}}>
                    <View style={{alignContent: 'center'}}>
                   
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                       {this.state.ques1_ques} 
                      </Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: "center",padding:"7%"}}>
                    <View style={{flexDirection:"row",width:300,alignSelf:"center"}}>
                      <View style={{alignItems: 'flex-start',backgroundColor: 'white'}}>
                        {this.state.showimage1 == false &&
                          <TouchableOpacity onPress={this.handleChangeRefinance.bind(this)}>
                            <Image
                              style={{ width: 130, height: 130 }}
                              source={require('../assets/refinance_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {( this.state.showimage1==true )&&
                          <Image
                          style={{ width: 130, height: 130 }}
                          source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View  style={{alignSelf: 'center',margin:5}}>
                          <Text style={{fontSize:15,textAlign:"center"}}>{this.state.ques1_text2.Text}</Text>
                        </View>
                      </View>
                      <View style={{alignItems: 'flex-end',position:"absolute",right:0}}>
                        {this.state.showimage2 == false &&
                          <TouchableOpacity 
                            onPress={this.handleChangePurchase.bind(this)}
                            >
                            <Image
                              style={{ width: 130, height: 130 }}
                              source={require('../assets/purchase_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {( this.state.showimage2==true )&&
                          <Image
                          style={{ width: 130, height: 130 }}
                          source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View  style={{alignSelf: 'center',margin:5}}>
                          <Text style={{fontSize:15,textAlign:"center"}}>{this.state.ques1_text1.Text}</Text>
                        </View>
                      </View>
                    </View>
                    {this.state.showimage1 == false && this.state.showimage2 == false ? 
                      <View  style={{alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                  </View>
                </View>
              }
              {this.state.index===1 &&
                <View>
                  <View style={{ height: 60, backgroundColor: 'white',justifyContent: "center"}}>
                    <View style={{alignContent: 'center'}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                      {this.state.ques2_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: "center",padding:"5%"}}>
                    <View style={{flexDirection:"row",width:300,alignSelf:"center"}}>
                      <View style={{alignItems: 'flex-start',backgroundColor: 'white',alignSelf:"center"}}>
                        {this.state.showimage3 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeSingle.bind(this)}
                          >
                          <Image
                            style={{ width: 110, height: 110 }}
                            source={require('../assets/single_final.png')}
                          />
                          </TouchableOpacity>
                        }
                        {( this.state.showimage3==true )&&
                          <Image
                          style={{ width: 110, height: 110 }}
                          source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View  style={{alignSelf: 'center',margin:5}}>
                          <Text style={{fontSize:15,textAlign:"center"}}>{this.state.ques2_text1.Text}</Text>
                        </View>
                      </View>
                      <View style={{alignItems: 'flex-end',position:"absolute",right:0}}>
                        {this.state.showimage4 == false &&
                          <TouchableOpacity 
                            onPress={this.handleChangeMulti.bind(this)}
                            >
                            <Image
                              style={{ width: 110, height: 110 }}
                              source={require('../assets/multifamily_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {( this.state.showimage4==true )&&
                            <Image
                            style={{ width: 110, height: 110 }}
                            source={require('../assets/Tick_mark.png')}
                            />
                        }
                        <View  style={{alignSelf: 'center',margin:5}}>
                          <Text style={{fontSize:15,textAlign:"center"}}>{this.state.ques2_text2.Text}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{flexDirection:"row",width:300,alignSelf:"center",marginTop:20}}>
                      <View style={{alignItems: 'flex-start',backgroundColor: 'white'}}>
                        {this.state.showimage5 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeCando.bind(this)}
                          >
                            <Image
                              style={{ width: 130, height: 110 }}
                              source={require('../assets/cando_final.png')}
                            />
                          </TouchableOpacity>
                        }
                        {( this.state.showimage5==true )&&
                          <Image
                          style={{ width: 130, height: 110 }}
                          source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View  style={{alignSelf: 'center',margin:5}}>
                          <Text style={{fontSize:15,textAlign:"center"}}>{this.state.ques2_text3.Text}</Text>
                        </View>
                      </View>
                      <View style={{alignItems: 'flex-end',marginLeft:50}}>
                        {this.state.showimage6 == false &&
                          <TouchableOpacity 
                            onPress={this.handleChangeTownHouse.bind(this)}
                            >
                            <Image
                              style={{ width: 110, height: 110 }}
                              source={require('../assets/townhouse_final.png')}
                            />
                            </TouchableOpacity>
                        }
                        {( this.state.showimage6==true )&&
                            <Image
                            style={{ width: 110, height: 110 }}
                            source={require('../assets/Tick_mark.png')}
                            />
                        }
                        <View  style={{alignSelf: 'center',margin:5}}>
                          <Text style={{fontSize:15,textAlign:"center"}}>{this.state.ques2_text4.Text}</Text>
                        </View>
                      </View>
                    </View>
                    {this.state.showimage3 == false && this.state.showimage4 == false && this.state.showimage5 == false  && this.state.showimage6 == false ? 
                      <View  style={{alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue1}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                  </View>
                </View>
              }
              {this.state.index===2 &&
                <View>
                  <View style={{ height: 80, backgroundColor: 'white',justifyContent: "center"}}>
                    <View style={{alignContent: 'center'}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                      {this.state.ques2_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: "center",padding:"5%"}}>
                    <View style={{flexDirection:"row",width:280,alignSelf:"center"}}>
                      <View style={{alignItems: 'flex-start',backgroundColor: 'white'}}>
                        {this.state.showimage7 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeExcellent.bind(this)}
                          >
                            <Image
                              style={{ width: 100, height: 100 }}
                              source={require('../assets/excellent_credit.png')}
                            />
                          </TouchableOpacity>
                        }
                        {( this.state.showimage7==true )&&
                          <Image
                          style={{ width: 100, height: 100 }}
                          source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View  style={{alignSelf: 'center',margin:5}}>
                          <Text style={{fontSize:15,textAlign:"center"}}>{this.state.ques3_text1.Text}</Text>
                        </View>
                      </View>
                      <View style={{alignItems: 'flex-end',position:"absolute",right:0}}>
                        {this.state.showimage8 == false &&
                          <TouchableOpacity 
                            onPress={this.handleChangeGood.bind(this)}
                            >
                            <Image
                              style={{ width: 100, height: 100 }}
                              source={require('../assets/good_credit.png')}
                            />
                          </TouchableOpacity>
                        }
                        {( this.state.showimage8==true )&&
                            <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../assets/Tick_mark.png')}
                            />
                        }
                        <View  style={{alignSelf: 'center',margin:5}}>
                          <Text style={{fontSize:15,textAlign:"center"}}>{this.state.ques3_text2.Text}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{flexDirection:"row",width:280,alignSelf:"center",marginTop:20}}>
                      <View style={{alignItems: 'flex-start',backgroundColor: 'white'}}>
                        {this.state.showimage9 == false &&
                          <TouchableOpacity
                            onPress={this.handleChangeFair.bind(this)}
                          >
                            <Image
                              style={{ width: 100, height: 100 }}
                              source={require('../assets/fair_credit.png')}
                            />
                          </TouchableOpacity>
                        }
                        {( this.state.showimage9==true )&&
                          <Image
                          style={{ width: 100, height: 100 }}
                          source={require('../assets/Tick_mark.png')}
                          />
                        }
                        <View  style={{alignSelf: 'center',margin:5}}>
                          <Text style={{fontSize:15,textAlign:"center"}}>{this.state.ques3_text3.Text}</Text>
                        </View>
                      </View>
                      <View style={{alignItems: 'flex-end',position:"absolute",right:0}}>
                        {this.state.showimage10 == false &&
                          <TouchableOpacity 
                            onPress={this.handleChangePoor.bind(this)}
                            >
                            <Image
                              style={{ width: 100, height: 100 }}
                              source={require('../assets/poor_credit.png')}
                            />
                          </TouchableOpacity>
                        }
                        {( this.state.showimage10==true )&&
                            <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../assets/Tick_mark.png')}
                            />
                        }
                        <View  style={{alignSelf: 'center',margin:5}}>
                          <Text style={{fontSize:15,textAlign:"center"}}>{this.state.ques3_text4.Text}</Text>
                        </View>
                      </View>
                    </View>
                    {this.state.showimage7 == false && this.state.showimage8 == false && this.state.showimage9 == false && this.state.showimage10 == false ? 
                      <View  style={{alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue2}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                  </View>
                </View>
              }
              {this.state.index===3 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
                    <View style={{alignContent: 'center',margin:"2%"}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                        {this.state.ques4_ques}(0-2000000)
                      </Text>
                    </View>
                  </View>
                  <View style={{ backgroundColor: '',justifyContent: "center",padding:"7%"}}>
                    <View>
                      <Slider
                        trackStyle={{height:20}}
                        thumbStyle={{width:30,height:30}}
                        minimumTrackTintColor="blue"
                        maximumTrackTintColor="green"
                        step={25000}
                        maximumValue={2000000}
                        onValueChange={this.change.bind(this)}
                        value={this.state.value}
                      />
                    </View>
                    <View style={{margin:"8%"}}>
                      <Text style={{fontSize:20,textAlign:"center"}}>{"$"+this.state.value}</Text>
                    </View>
                  </View>
                </View>
              }
              {this.state.index===4 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
                    <View style={{alignContent: 'center'}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                        {this.state.ques5_ques}(0-2000000)
                      </Text>
                    </View>
                  </View>
                  <View style={{ backgroundColor: '',justifyContent: "center",padding:"7%"}}>
                    <View>
                      <Slider
                        trackStyle={{height:20}}
                        thumbStyle={{width:30,height:30}}
                        minimumTrackTintColor="blue"
                        maximumTrackTintColor="green"
                        step={25000}
                        maximumValue={2000000}
                        onValueChange={this.Mortage.bind(this)}
                        value={this.state.mortage_value}
                      />
                    </View>
                    <View style={{margin:"8%"}}>
                      <Text style={{fontSize:20,textAlign:"center"}}>{"$"+this.state.mortage_value}</Text>
                    </View>
                  </View>
                </View>
              }
              {this.state.index===5 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
                    <View style={{alignContent: 'center'}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                      {this.state.ques6_ques}(0-100)
                      </Text>
                    </View>
                  </View>
                  <View style={{ backgroundColor: '',justifyContent: "center",padding:"7%"}}>
                    <View>
                      <Slider
                        trackStyle={{height:20}}
                        thumbStyle={{width:30,height:30}}
                        minimumTrackTintColor="blue"
                        maximumTrackTintColor="green"
                        step={0.50}
                        maximumValue={100}
                        onValueChange={this.CurrentInterest.bind(this)}
                        value={this.state.current_interest_value}
                      />
                    </View>
                    <View style={{margin:"8%"}}>
                      <Text style={{fontSize:20,textAlign:"center"}}>{this.state.current_interest_value +"%"}</Text>
                    </View>
                  </View>
                </View>
              }
              {this.state.index===6 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '',justifyContent: "center",marginTop:"2%"}}>
                    <View style={{alignContent: 'center',margin:"3%"}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                        {this.state.ques7_ques}(0-100)
                      </Text>
                    </View>
                  </View>
                  <View style={{ backgroundColor: '',justifyContent: "center",padding:"7%"}}>
                    <View>
                      <Slider
                        trackStyle={{height:20}}
                        thumbStyle={{width:30,height:30}}
                        minimumTrackTintColor="blue"
                        maximumTrackTintColor="green"
                        step={1.00}
                        maximumValue={100}
                        onValueChange={this.DownPayment.bind(this)}
                        value={this.state.down_payment_value}
                      />
                    </View>
                    <View style={{margin:"8%"}}>
                      <Text style={{fontSize:20,textAlign:"center"}}>{this.state.down_payment_value+"%"}</Text>
                    </View>
                  </View>
                </View>
              }
              {this.state.index===7 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
                    <View style={{alignContent: 'center'}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                         {this.state.ques8_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{padding:10}}>
                    <View style={{ width: 130 ,margin:"3%",alignSelf:"center"}} >
                      <Button block success rounded onPress={this.handleChangeBankruptcyYes.bind(this)}>
                        <Text style={{fontSize:15}}>{this.state.ques8_text1.Text}</Text>
                      </Button>
                    </View>
                    <View style={{ width: 130,margin:"3%",alignSelf:"center"}} >
                      <Button block danger rounded  onPress={this.handleChangeBankruptcyNo.bind(this)}> 
                        <Text style={{fontSize:15}}>{this.state.ques8_text2.Text}</Text>
                      </Button>
                    </View>
                  </View>
                  {this.state.showimage11 == false && this.state.showimage12 == false ? 
                    <View  style={{alignSelf:"center"}}>
                      <Text style={{color:"red"}}>
                        {this.state.errorvalue3}
                      </Text>
                    </View> :
                    <Text></Text>
                  }
                </View>
              }
              {this.state.index===8 &&
                <View style={{}}>
                  <View style={{ height: 120, backgroundColor: '',justifyContent: "center"}}>
                    <View style={{alignContent: 'center'}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                         {this.state.ques9_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{ alignSelf:"center",width:300}}>
                    <Dropdown inputContainerStyle={{borderBottomColor:"white"}}
                              baseColor={"black"}
                              containerStyle={{height:60,borderColor:"black",borderWidth:1,borderRadius:10,paddingLeft:15,paddingRight:15,justifyContent:"center"}}
                              label={!this.state.loan_type?'Select':''}
                              data={loan_type_data}
                              onChangeText={this.handleChangeLoanType.bind(this)}
                              value={this.state.loan_type}
                              itemColor={"blue"}
                              pickerStyle={{backgroundColor: 'rgba(255, 245, 235, 1)'}}
                              selectedItemColor={"black"}
                              dropdownPosition={1}
                              // overlayStyle={{opacity:0.5}}
                              
                    />
                  </View>         
                  {!this.state.loan_type ? 
                    <View  style={{alignSelf:"center"}}>
                      <Text style={{color:"red"}}>
                        {this.state.errorvalue4}
                      </Text>
                    </View> :
                    <Text></Text>
                  }
                </View>
              }
              {this.state.index===9 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
                    <View style={{alignContent: 'center'}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                      {this.state.ques10_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{padding:10}}>
                    <View style={{ width: 130 ,margin:"3%",alignSelf:"center"}} >
                      <Button block success rounded onPress={this.handleChangeVeteranYes.bind(this)}>
                        <Text style={{fontSize:15}}>{this.state.ques10_text1.Text}</Text>
                      </Button>
                    </View>
                    <View style={{ width: 130,margin:"3%",alignSelf:"center"}} >
                      <Button block danger rounded  onPress={this.handleChangeVeteranNo.bind(this)}> 
                        <Text style={{fontSize:15}}>{this.state.ques10_text2.Text}</Text>
                      </Button>
                    </View>
                  </View>
                  {this.state.showimage13 == false && this.state.showimage14 == false ? 
                    <View  style={{alignSelf:"center"}}>
                      <Text style={{color:"red"}}>
                        {this.state.errorvalue5}
                      </Text>
                    </View> :
                    <Text></Text>
                  }
                </View>
              }
              {this.state.index===10 &&
                <View style={{}}>
                  <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
                    <View style={{alignContent: 'center'}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                      {this.state.ques11_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{padding:20}}>
                    <View style={{ alignSelf:"center",width:300}}>
                      <Dropdown inputContainerStyle={{borderBottomColor:"white"}}
                                baseColor={"black"}
                                containerStyle={{height:60,borderColor:"black",borderWidth:1,borderRadius:5,paddingLeft:15,paddingRight:15,justifyContent:"center"}}
                                label={!this.state.mortage_late?'Select':''}
                                data={mortage_late_data}
                                onChangeText={this.handleChangeMortageLates.bind(this)}
                                value={this.state.mortage_late}
                                itemColor={"blue"}
                                selectedItemColor={"black"}
                                itemCount={6}
                                pickerStyle={{backgroundColor: 'rgba(255, 245, 235, 1)'}}
                                dropdownPosition={1}
                      />
                    </View>         
                  </View>
                  {!this.state.mortage_late ? 
                    <View  style={{alignSelf:"center"}}>
                      <Text style={{color:"red"}}>
                        {this.state.errorvalue6}
                      </Text>
                    </View> :
                    <Text></Text>
                  }
                </View>
              }
              {this.state.index===11 &&
                <View>
                  <View style={{ height: 100, backgroundColor: '',justifyContent: "center"}}>
                    <View style={{alignContent: 'center'}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                      {this.state.ques12_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{padding:10}}>
                    <View style={{ width: 130 ,margin:"3%",alignSelf:"center"}} >
                      <Button block success rounded onPress={this.handleChangeBorrowYes.bind(this)}>
                        <Text style={{fontSize:15}}>{this.state.ques12_text1.Text}</Text>
                      </Button>
                    </View>
                    <View style={{ width: 130,margin:"3%",alignSelf:"center"}} >
                      <Button block danger rounded  onPress={this.handleChangeBorrowNo.bind(this)}> 
                        <Text style={{fontSize:15}}>{this.state.ques12_text2.Text}</Text>
                      </Button>
                    </View>
                  </View>
                  {this.state.showimage15 == false && this.state.showimage16 == false ? 
                    <View  style={{alignSelf:"center"}}>
                      <Text style={{color:"red"}}>
                        {this.state.errorvalue7}
                      </Text>
                    </View> :
                    <Text></Text>
                  }
                </View>
              }
              {this.state.index===12 &&
                <View>
                  <View style={{ height: 90, backgroundColor: '',justifyContent: "center"}}>
                    <View style={{alignContent: 'center',padding:5}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                      {this.state.ques13_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{}}>
                    <TextInput  placeholder={this.state.ques13_text1.Text} placeholderTextColor={'black'} 
                          inputStyle={{fontFamily: 'Impact'}}
                          autoFocus = {true}
                           returnKeyType = {"next"}
                           onSubmitEditing={(event) => { 
                            this.refs.currentCity.focus(); 
                             }}
                          underlineColorAndroid='transparent' style={styles.password}
                          onChangeText={this.Address.bind(this) }
                            value={this.state.address}>
                    </TextInput>
                    {!this.state.address? 
                      <View  style={{width:250,alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue8}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <TextInput style={{marginTop:10}} placeholder={this.state.ques13_text2.Text} placeholderTextColor={'black'} 
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.City.bind(this) }
                      ref='currentCity'
                      autoCapitalize='none'
                      value={this.state.city}>
                    </TextInput>
                    {(!this.state.city || this.state.validcity==false)? 
                      <View  style={{width:250,alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.cityerrorvalue}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <View style={{ alignSelf:"center",width:250,marginTop:10}}>
                      <Dropdown inputContainerStyle={{borderBottomColor:"white"}}
                                fontSize={18}
                                baseColor={"black"}
                                
                                containerStyle={{height:60,borderColor:"black",borderWidth:1,borderRadius:5,paddingLeft:10,paddingRight:10,justifyContent:"center"}}
                                label={!this.state.property?this.state.ques13_text3.Text:''}
                                data={property_data}
                                onChangeText={this.Property.bind(this)}
                                value={this.state.property}
                                itemColor={"blue"}
                                pickerStyle={{backgroundColor: 'rgba(255, 245, 235, 1)'}}
                                selectedItemColor={"black"}
                                dropdownPosition={1}
                      />
                    </View>
                    {!this.state.property? 
                      <View  style={{width:250,alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.stateerrorvalue8}
                        </Text>
                      </View> :
                      <Text></Text>
                    }     
                    <TextInput  placeholder={this.state.ques13_text4.Text}
                      keyboardType="numeric" 
                      placeholderTextColor={'black'}
                      maxLength={5} 
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.Zip.bind(this) } value={this.state.zip} >
                    </TextInput>   
                    {(!this.state.zip || (this.state.zip<5)==false)? 
                      <View  style={{width:250,alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue9}
                        </Text>
                      </View> :
                      <Text></Text>
                    }         
                  </View>
                </View>
              }
              {this.state.index===13 &&
                <View>
                  <View style={{ height: 90, backgroundColor: '',justifyContent: "center"}}>
                    <View style={{alignContent: 'center',padding:5}}>
                      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}} >
                       {this.state.ques14_ques}
                      </Text>
                    </View>
                  </View>
                  <View style={{}}>
                    <TextInput  placeholder={this.state.ques14_text1.Text} placeholderTextColor={'black'} 
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.FName.bind(this) }
                                autoFocus = {true}
                           returnKeyType = {"next"}
                           onSubmitEditing={(event) => { 
                this.refs.lastName.focus(); 
              }}
                      value={this.state.fname}>
                    </TextInput>
                    {(!this.state.fname || this.state.validfname==false)? 
                      <View  style={{width:250,alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue10}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <TextInput  placeholder={this.state.ques14_text2.Text} placeholderTextColor={'black'} 
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.LName.bind(this) }
                      ref="lastName"
                           returnKeyType = {"next"}
                           onSubmitEditing={(event) => { 
                this.refs.email.focus(); 
              }}
                      value={this.state.lname}>
                    </TextInput>
                    {(!this.state.lname || this.state.validlname==false)? 
                      <View  style={{width:250,alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue11}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                    <TextInput  placeholder={this.state.ques14_text3.Text} placeholderTextColor={'black'} 
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.Email.bind(this) }
                      ref="email"
                           returnKeyType = {"next"}
                           onSubmitEditing={(event) => { 
                this.refs.PhNumber.focus(); 
              }}
                      value={this.state.email}>
                    </TextInput>
                    <View  style={{width:250,alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue21}
                        </Text>
                      </View>
                    {/* ate.email? 
                      <View  style={{width:250,alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue12}
                        </Text>
                      </View> :
                      <Text></Text>
                    */}
                    <TextInput  placeholder={this.state.ques14_text4.Text}
                      keyboardType="numeric" 
                      placeholderTextColor={'black'} 
                      underlineColorAndroid='transparent' style={styles.password}
                      onChangeText={this.Phone.bind(this) }
                      ref="PhNumber"
                      value={this.state.phone}>
                    </TextInput> 
                    {!this.state.phone? 
                      <View style={{width:250,alignSelf:"center"}}>
                        <Text style={{color:"red"}}>
                          {this.state.errorvalue13}
                        </Text>
                      </View> :
                      <Text></Text>
                    }
                  </View>
                </View>
              }
              <View style={{flexDirection:"row",width:"100%",justifyContent:"center",marginTop:"10%", height: 60 }}>
              
                <View >
                <Display
                      enable={this.state.enable_back}
                      >
                      <Button block
                        style={styles.back_btnstyle}
                        onPress={this.backButtonQuick.bind(this)}>
                        <Text>Back</Text>
                      </Button>
                    </Display>
                </View>
                <View style={this.state.index !=0 ? {width:30} :{ width: 0 }}>

                </View>
                <View >
                <Display
                      enable={this.state.enable_next}
                    >
                      <Button block
                        style={styles.next_btnstyle}
                        onPress={this.nextButtonQuick.bind(this)}>
                        <Text>Next</Text>
                      </Button>
                    </Display>
                </View>
                <View >
                <Display
                      enable={this.state.enable_submit}
                    >
                      <Button block 
                        style={styles.submit_btnstyle}
                        onPress={this.SubmitButton.bind(this)}>
                        <Text>Submit</Text>
                      </Button>
                    </Display>
                </View>
               
              </View>
              {/* <View style={{width:300,alignSelf:"center", height: 100,justifyContent: "flex-end",marginTop:"10%" }} >
                <View style={{flexDirection:"row",alignSelf: 'center'}}>
                  <View style={{alignItems:"flex-start",margin:"5%"}}>
                    <Display
                      enable={this.state.enable_back}
                      >
                      <Button block
                        style={styles.back_btnstyle}
                        onPress={this.backButtonQuick.bind(this)}>
                        <Text>Back</Text>
                      </Button>
                    </Display>
                  </View>
                  <View style={{alignItems:"flex-end",margin:"5%"}}>
                    <Display
                      enable={this.state.enable_next}
                    >
                      <Button block
                        style={styles.next_btnstyle}
                        onPress={this.nextButtonQuick.bind(this)}>
                        <Text>Next</Text>
                      </Button>
                    </Display>
                  </View>
                  <View style={{alignItems:"flex-end",margin:"5%"}}>
                    <Display
                      enable={this.state.enable_submit}
                    >
                      <Button block 
                        style={styles.submit_btnstyle}
                        onPress={this.SubmitButton.bind(this)}>
                        <Text>Submit</Text>
                      </Button>
                    </Display>
                  </View>
                </View>
              </View> */}
            </View>
          </Content>
          <Footer style={{elevation: 2,borderTopWidth:0.5,backgroundColor:"white",height:60}}>
            <View style={{alignItems: 'center',flex: 1,flexDirection:"row",justifyContent: 'center'}}>
              
                <TouchableOpacity style={styles.privacy}
                                  onPress={this.PrivacyPolicy.bind(this)}>
                  <Text style={{color:"white",}}>Privacy Policy</Text>
                </TouchableOpacity>
              
                <TouchableOpacity style={styles.terms}
                                  onPress={this.Terms.bind(this)}>
                  <Text style={{color:"white",}}>Terms & Conditions</Text>
                </TouchableOpacity>
              
            </View>
          </Footer>
          {this.state.mainModal == true &&
            <Modal isVisible={this.state.mainModal}>
              <View style={{ flex: 1,backgroundColor:"#ced7e5" ,width:"100%" }}>
                <View style={{alignSelf:"center",marginTop:50}}>
                  <Image
                    source={require('../assets/main.png')}
                  />
                </View>
                <View style={{marginTop:50}}>
                  <Text style={{fontSize:15,textAlign:"center",margin:10}} >
                    *For a Free quote. affordability.io is not associated with the government, and our service is not approved by the government or your lender; and even if you accept this offer and use our services, your lender may not agree to change your loan.    
                  </Text>
                  <Text style={{fontSize:15,textAlign:"center",margin:20}} >
                    Our goal is to provide an easy connection for homeowners seeking information on affordabilityprogram eligibility with a private mortgage broker or attorney who can assist you.
                  </Text>
                </View>
                <View style={{alignSelf:"center",marginTop:40}}>
                  <Button primary
                    onPress={this.Dismiss.bind(this)}>
                    <Text>Dismiss</Text>
                  </Button>
                </View>
              </View>
            </Modal>
          }
        </Container>
      );
    }
    
      return <Header style={styles.headerstyles}>
            <View style={{alignItems: 'center',flex: 1,justifyContent: 'center'}} >
              <Image 
                source={require('../assets/main.png')}
              />
            </View>
          </Header>
        ;
  
  }
}

