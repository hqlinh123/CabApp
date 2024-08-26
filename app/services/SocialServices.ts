// import {appleAuth} from '@invertase/react-native-apple-authentication';
import {LoginManager, AccessToken, Settings} from 'react-native-fbsdk-next';
import {requestTrackingPermissionsAsync} from 'expo-tracking-transparency';
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';
import * as AppleAuthentication from 'expo-apple-authentication';
GoogleSignin.configure({
  iosClientId: '88076204832-ehrskqmtvsbnihdvjiqttdjt2tvicvf2.apps.googleusercontent.com',
});
export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken, user} = await GoogleSignin.signIn();
    console.log('user', user);
    console.log('idToken', idToken);
    // Create a Google credential with the token
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('Google Sign-In cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('Google Sign-In in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Play Services not available');
    } else {
      console.log('Google Sign-In Error:', error);
    }
  }
};

export const signInWithApple = async () => {
  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });
    console.log('credential', credential);
    // signed in
  } catch (e) {
    if (e.code === 'ERR_REQUEST_CANCELED') {
      // handle that the user canceled the sign-in flow
    } else {
      // handle other errors
    }
  }
};

export const signInWithFacebook = async () => {
  try {
    const {status} = await requestTrackingPermissionsAsync();

    Settings.initializeSDK();

    if (status === 'granted') {
      await Settings.setAdvertiserTrackingEnabled(true);
    }

    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  } catch (error) {
    console.error('Facebook Login Error:', error);
  }
};
