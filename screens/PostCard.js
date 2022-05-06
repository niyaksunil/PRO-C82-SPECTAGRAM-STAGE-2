import * as React from "react";
import {View, Text,StyleSheet,Image} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };

export default class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false
        };
    }
    
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    
    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        if (!this.state.fontsLoaded) {
          return <AppLoading />;
        } else {
          return (
            <View style={styles.container}>
              <View style={styles.cardContainer}>
                <View style = {styles.authorContainer}>
                    <View style = {styles.authorImageContainer}>
                        <Image 
                        source =  {require("../assetss/profile_img.png")}
                        style = {styles.profileImage}
                        ></Image>
                    </View>
                    <View style = {authorNameContainer}>
                        <Text style = {styles.authorname}>{this.props.post.author}</Text>
                    </View>
                </View>
                <Image source = {require("../assetss/post.jpeg")} 
                style = {styles.postImage}/>
                <View style = {styles.captionContainer}>
                    <Text style = {styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View>
                <View style = {styles.actionContainer}>
                    <View style = {styles.likeButton}>
                        <Ionicons name = {"heart"} size = {RFValue(30)} color = {'white'}/>
                        <Text style = {styles.likeText}>12k</Text>
                    </View>
                </View>
              </View>
            </View>
          );
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    authorImageContainer: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    captionContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    captionText: {
      fontSize: RFValue(25),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    authorname: {
      fontSize: RFValue(18),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    },
    postImage : {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(150)
    }
  });