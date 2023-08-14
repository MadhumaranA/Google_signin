import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';

const _sigiInWithGoogle = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess:false,
            webClientId:'865654632234-lct9i1baoihmc7q7ejr1e2e8804ta361.apps.googleusercontent.com',
            scopes: ['profile', 'email']
            
        })
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        const {idToken} = await GoogleSignin.signIn();
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        auth().signInWithCredential(googleCredentials);
        return userInfo;
        }catch (error) {
        console.log('=>Google Sign In',error)
        return null
    }
}

export default _sigiInWithGoogle;