import React, { Component } from 'react';
import colors from '/Users/omerturkoglu/Apps/airbnb/src/styles/colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class LoggedOut extends Component {
  onFacebookPress()  {
    alert('Facebook button pressed');
  }
  onCreateAccountPress()  {
    alert('Create Account button pressed');
  }
  onMoreOptionsPress(){
    alert('More options button pressed');
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image 
            source={require('/Users/omerturkoglu/Apps/airbnb/src/img/Pro.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>welcome to ProDesigners</Text>
          <RoundedButton
            text="Continue with Facebook"
            textColor= {colors.green01}
            background = {colors.white}
            icon= {<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
            handleOnPress= {this.onFacebookPress}
          />
          <RoundedButton
            text=" Create Account "
            textColor= {colors.white}
            handleOnPress= {this.onCreateAccountPress}
          />

          <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress= {this.onMoreOptionsPress}
          >
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableHighlight>

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>By tapping Continue, Create Account or More </Text>
            <Text style={styles.termsText}>options,</Text>
            <Text style={styles.termsText}>I agree to Prodesigners' </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Payments Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Nondiscrimination Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
  welcomeWrapper:{
    flex: 1,
    display: 'flex',
    marginTop:30,
    padding: 20,

  },
  logo: {
    width: 130,
    height: 70,
    marginTop: 40,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
  moreOptionsButton:{
    marginTop: 10,
  },
  moreOptionsButtonText:{
    color: colors.white,
    fontSize: 16,
  },
  termsAndConditions:{
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  termsText:{
    color: colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
  linkButton:{
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,

   
  }


});