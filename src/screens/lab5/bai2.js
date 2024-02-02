import { ImageBackground,StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const MyLab5B2 = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                source={require('../lab5/imageLab5/png.png')}
                style={styles.image}>
                <View style={styles.details}>
                    <Text style={styles.text}>
                        <Text style={styles.firstLine}> Welcom To {'\n'} </Text>

                    </Text>
                    <Text style={styles.text}> React là một thư viện JavaScript phổ biến
                        cho việc xây dựng giao diện người dùng động và hiệu quả. Phát triển bởi
                        Facebook, React sử dụng cú pháp JSX để tạo các thành phần tái sử dụng
                        và sử dụng Virtual DOM để cải thiện hiệu suất. Được ưa chuộng với cộng
                        đồng lớn, React thúc đẩy mô hình phát triển gồm các thành phần, giúp tạo ứng dụng web
                        linh hoạt, dễ duy trì và có trải nghiệm người dùng tốt. </Text>
                    <TouchableOpacity style={styles.button}
                    
                    >
                        <Text style={styles.buttonText}> Get Stated </Text>
                
                    </TouchableOpacity>
                    
                </View>
            </ImageBackground>
        </View>
    )
}

export default MyLab5B2

const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center'
    },
    details: {
        marginLeft: 81,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'left',
        paddingBottom: 20,
        paddingRight:20,
        color:'white',
       
    },
    
    firstLine: {
        color: 'white',
        fontSize: 50,
        textShadowColor: 'red', // Màu đổ bóng (đen) với độ trong suốt 0.75
        textShadowOffset: { width: 5, height: 3 }, // Độ dịch chuyển của đổ bóng
        textShadowRadius: 5, // Bán kính của đổ bóng
    },
    secondLine: {
        color: 'white',
        fontSize: 50,
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: '#FFCCFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
});