import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from '../components/context';

import Users from '../model/users';

const SignUpScreen = ({navigation}) => {

    const { signUp } = React.useContext(AuthContext);

    const [data, setData] = React.useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        mobile_number: '',
        password: '',
        confirm_password: '',
        check_usernameChange: false,
        check_firstnameChange: false,
        check_lastnameChange: false,
        check_emailChange: false,
        check_mobileChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const username_Change = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_usernameChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_usernameChange: false
            });
        }
    }

    const first_name_Change = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                first_name: val,
                check_firstnameChange: true
            });
        } else {
            setData({
                ...data,
                first_name: val,
                check_firstnameChange: false
            });
        }
    }

    const last_name_Change = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                last_name: val,
                check_lastnameChange: true
            });
        } else {
            setData({
                ...data,
                last_name: val,
                check_lastnameChange: false
            });
        }
    }

    const email_Change = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                check_emailChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_emailChange: false
            });
        }
    }

    const mobile_Change = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                mobile_number: val,
                check_mobileChange: true
            });
        } else {
            setData({
                ...data,
                mobile_number: val,
                check_mobileChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const signupHandle = async (userName, firstName, lastName, user_email, phone_number, password, confirm_password) => {

        console.log(userName)

        if ( confirm_password != password ) {
            Alert.alert('Wrong Input!', 'Confirmed password does not match password',[
                {text: 'Okay'}
            ]);
            return;
        }

        const surl = 'http://10.0.2.2:8000' + '/user/signup/';

        const response = await fetch(surl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    'username': userName,
                    'password': password,
                    'first_name': firstName,
                    'last_name': lastName,
                    'email': user_email,
                    'mobile_number': phone_number 
                })
                });

        let res = await response.json();
        let stat = response.status;

        if ( stat == 400 ) {
            Alert.alert('Invalid registration!', res.message, [
                {text: 'Okay'}
            ]);
            return;
        }

        const token = res.token;
        
        console.log(token)
        console.log(token.length)
    //    const foundUser = Users.filter( item => {
     //       return userName == item.username && password == item.password;
      //  } );
        

        if ( userName.length == 0 || password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }


        const foundUser = { id: 1 , email:user_email  , username: userName , password: password , userToken: token.data };
        Users.push(foundUser)
        signUp(foundUser);
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => username_Change(val)}
                />
                {data.check_usernameChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={styles.text_footer}>First name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your first name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => first_name_Change(val)}
                />
                {data.check_firstnameChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={styles.text_footer}>Last name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your last name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => last_name_Change(val)}
                />
                {data.check_lastnameChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => email_Change(val)}
                />
                {data.check_emailChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={styles.text_footer}>Phone number</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your phone number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => mobile_Change(val)}
                />
                {data.check_mobileChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {signupHandle( data.username, data.first_name, data.last_name,data.email, data.mobile_number ,data.password , data.confirm_password)}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });