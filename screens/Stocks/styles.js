import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import { AppColors, AppSizes } from '../../theme';
import {Fonts} from '../../assets/fonts';


export default StyleSheet.create({
    scrollView:{
        backgroundColor: AppColors.textBluish,
        padding:10
    },

    container: {
    flex: 1,
    backgroundColor: '#485775'
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    marginTop: 10,
  },
  imgBg: { 
    flex:1,
    width: width,
    height: height,
  },
  mainContainer:{
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center',
  },
  forgotView:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: -15,
    marginBottom: 15
  },
  forgotText:{
    color: AppColors.textWhite,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  forgotTextLine:{
    color: AppColors.textWhite,
    fontSize: 12,
    paddingLeft: 5,
    paddingRight: 5
  },
  loginSubView:{
    marginBottom: 15,
  },
  loginView:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonLogin:{
    backgroundColor: AppColors.brand.primary,
    opacity:0.9,
    borderRadius: 5,
    width:AppSizes.screen.width*0.8,
    height:50,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  buttonLogin2:{
    backgroundColor: AppColors.brand.third,
    opacity:0.9,
    borderRadius: 5,
    width:AppSizes.screen.width*0.8,
    height:50,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  touchableLogin:{
    color: AppColors.textWhite,
    fontSize: 15,
    fontWeight: '500',
  },
  textInput:{
      position: 'relative',
      backgroundColor: AppColors.primary,
      color: AppColors.textWhite,
      fontSize:15,
      height: 50,
      paddingLeft:10,
    },
    imgBg: { 
      flex:1,
      width: width,
      height: height,
    },
    loginTitle:{
      fontSize: 38,
      color: AppColors.textWhite,
      fontFamily: Fonts.MontserratLight
    },
    loginSubtitle:{
      fontSize: 25,
    },
    stateMessage:{
      fontSize: 14, 
      color: AppColors.brand.third, 
      padding: 5
    },
    loginButtonView:{
      flexDirection: 'row', 
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputView:{
      backgroundColor: 'rgba(255,2,102,0.2)',
      borderRadius: 5,
      marginBottom: 10,
    },
   welcome:{
     color: AppColors.textWhite,
     fontWeight: '300',
     fontSize: 22
   },
   welcomeUser:{
     color: AppColors.textWhite,
     fontWeight: '600',
     fontSize: 22
   },
   welcomeContainer:{
     marginTop: 40,
     textAlign:'center',
     justifyContent: 'center',
     alignItems: 'center'
   },
   mainContainerLogged:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
   },
   header:{
     backgroundColor: AppColors.brand.borderBg,
     height:200,
   },
   avatar: {
     width: 130,
     height: 130,
     borderRadius: 63,
     borderWidth: 4,
     borderColor: "white",
     marginBottom:10,
     alignSelf:'center',
     position: 'absolute',
     marginTop:130
   },

   body:{
     marginTop:40,
   },
   bodyContent: {
     flex:1,
     alignItems: 'center',
     backgroundColor: 'rgba(29,35,47,1)',

   },

   info:{
     fontSize:16,
     color: "#00BFFF",
     marginTop:10
   },
   description:{
     fontSize:16,
     color: "#696969",
     marginTop:10,
     textAlign: 'center'
   },
   buttonContainer: {
     marginTop:10,
     height:45,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom:20,
     width:250,
     borderRadius:30,
     backgroundColor: AppColors.brand.primary,
   },
   swipeStyle:{
     backgroundColor: 'transparent',
   },



       primaryTextDetails:{
         fontSize: 20,
         color: AppColors.textWhite,
         fontFamily: Fonts.MontserratLight,
         lineHeight: 20,
       },
       emailText:{
         fontSize: 16,
         color: AppColors.textPinkish,
         fontFamily: Fonts.MontserratLight,
         lineHeight: 16,
       },
       offlineContainer: {
         backgroundColor: '#b52424',
         height: 30,
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: 'row',
         width,
         position: 'absolute',
         top: 30
       },
       offlineText: { color: AppColors.textWhite },
       text: {
         backgroundColor: AppColors.textBluish
     },



     primaryText:{
      fontSize: 20,
      color: AppColors.textWhite,
      fontFamily: Fonts.MontserratLight,
      lineHeight: 60,
      marginLeft:20,
      width: width/3
    },
     flatview: {
      justifyContent: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomColor: 'rgba(0,0,0,0.5)',
      borderBottomWidth: 0.5,
     marginLeft: 20,
     marginRight:20
    },
     rowContainer:{
      flex:1,
      flexDirection: 'row',
     },
     lessGain:{
       backgroundColor: '#cc0000',
       height: 30,
       width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:5,
      flexGrow: 2,
      marginTop:15
     },
     moreGain:{
       backgroundColor: '#33cc33',
       height: 30,
       width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:5,
      flexGrow: 2,
      marginTop:15
     },
     priceText:{
      color: AppColors.textWhite,
      lineHeight:12,
      fontSize:12,
      textAlign:'center',
     },
     nameText:{
    flexGrow: 8
    },


    inputViewCentered:{
      backgroundColor: 'rgba(255,2,102,0.2)',
      borderRadius: 5,
      marginBottom: 10,
    },

    titleView:{
    },
    dateView:{
      backgroundColor: 'rgba(48, 59, 79, 0.5)',
      padding: 10,
      borderRadius:10
    },
    title:{
      color: AppColors.textWhite,
      fontSize: 30,      
    },
    subtitle:{
      color: AppColors.brand.fifth,
      fontSize: 14, 
    },
    name:{
      fontSize:14,
      color:"#efefef",
      fontWeight:'300',
    },
    topView:{
      marginTop:15,
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: AppSizes.screen.width*0.8,
      marginBottom:15
    },
    safeareaview:{
      backgroundColor: '#485775',
      flex: 1
    }
});