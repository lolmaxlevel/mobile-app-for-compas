import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Pressable,
    Image,
    Modal,
    Alert,
    Touchable,
    TouchableHighlight
} from 'react-native';
import MainButton from "./MainButton";
import Settings from "./Settings";
import CopyCodeButton from "./CopyCodeButton";


export default function MainPage() {
    const [modalVisible, setModalVisible] = useState(false)

    let clickCount = 0;
    const countClicks = () => {
        setTimeout(() => {
            clickCount = 0;
        }, 1000);
        clickCount++;
        if (clickCount === 5) {
            setModalVisible(true)
        }
    }
    return (
        <View style={styles.main}>
            <Modal style={styles.modal}
                   customBackdrop={
                       <View
                           style={styles.backDropContainer}
                           onTouchEnd={() => setModalVisible(false)}
                       />
                   }
                animationType="fade"
                visible={modalVisible}
               >
                <View style={styles.centeredView}>
                    <TouchableHighlight
                        onPress={() => setModalVisible(!modalVisible)
                    }>
                        <Image source={require('../assets/close.png')} style={styles.close_btn}/>
                    </TouchableHighlight>
                    <View style={styles.modalView}>
                    <Settings/>
                </View>
                </View>
            </Modal>
            <Pressable onPress={() => countClicks()}>
                <Image source={require('../assets/icon.png')} style={styles.image}/>
            </Pressable>
            <CopyCodeButton/>
            <Text style={styles.text}>or</Text>
            <MainButton title={"paste the code"}/>
        </View>
    );
}
const styles = StyleSheet.create({
    backDropContainer: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.5,
    },
    close_btn: {
        position: "absolute",
        top: 0,
        right: -100,
        width: 18,
        height: 18,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    main: {
        width: "80%",
        rowGap: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
    },
    image: {
        marginBottom : 100,
        width: 100,
        height: 100,
        alignSelf: "center",
    },
    modal: {
        alignSelf: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    }
});
