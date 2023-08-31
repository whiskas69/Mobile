import { StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';

// ------------------  LAB 2.1  ------------------
export default function Lab2_1() {
    return (

        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    source={require('./img/IT_Logo.png')}
                    //resizeMode: 'contain' ให้รูปอยู่ในกรอบไม่ตัดออก
                    style={{ width: 300, height: 150, resizeMode: 'contain'}}
                />
                <Text style={styles.txtIt}>คณะเทคโนโลยีสารสนเทศ</Text>
                <Text style={styles.txtMo}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
            </View>

            <View style={styles.box}>
                <Button
                    title="PROGRAMS"
                />
                <Button
                    title="ABOUT US"
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewImg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtIt: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    txtMo: {
        fontSize: 16,
        marginBottom: 12,
    },
    box: {
        width: '60%',
        marginBottom: 12,
        gap: 10,
        flexDirection: 'column',
    },
});