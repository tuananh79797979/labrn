import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons';


const MyLab5b3 = () => {
    const windownWith = Dimensions.get('window').width;
    const windownHeght = Dimensions.get('window').height;
    return (
        <ImageBackground style={{ flex: 1 ,width:'100%'}}
            source={require('../lab5/imageLab5/hoiAn1.jpg')}>


            <View style={{ marginTop: 0.07 * windownHeght, height: 30, marginLeft: 20, marginRight: 20, flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start' }}>
                    <View>
                        <Text><Icon name="arrow-back" size={30} color="#F0F0F0" /></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                    <View>
                        <Icon name="ellipsis-vertical" size={30} color="#F0F0F0" />
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{flexDirection:'row',flex:1,alignItems:'flex-end'}}>
                <Text style={{
                    color: 'white', fontWeight: 'bold', fontSize: 30,
                     paddingLeft: 30,flex:5,
                }}>
                    PHỐ CỔ HỘI AN
                </Text>
                <Text style={{flex:1,fontSize:20,fontWeight:'bold',color:'white',top:-17}}><Icon name="star" size={30} color="yellow" />5.0</Text>
            </View>
            <View style={styles.fontText}>
                <View style={styles.text}>
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'white',
                            top: -20,
                            left: '90%',
                            borderRadius: 50,
                            shadowColor: 'black',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                            elevation: 5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{ alignContent: 'center' }}>
                            <Icon name="heart" size={30} color="red" />
                        </Text>
                    </View>
                    <Text style={{ color: '#155699', fontSize: 23, fontWeight: 'bold', top:-30}}>
                        <Icon name="location" size={30} color="#155699" />Quảng Nam
                    </Text>
                    <Text style={{ color: 'black', fontSize: 23, fontWeight: 'bold',top:-20}}>
                        Thông tin chuyến đi
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                        Phố cổ Hội An, tọa lạc tại tỉnh Quảng Nam, Việt Nam,
                        là một điểm đến lịch sử và văn hóa độc đáo. Với kiến
                        trúc cổ kính, đèn lồng lung linh, và những con đường
                        đá xanh mướt, phố cổ Hội An hấp dẫn du khách bằng không
                        khí yên bình và sự lưu giữ văn hóa. Các cửa hàng lớn nhỏ,
                        nhà hàng truyền thống và chợ đêm tạo nên một bức tranh quyến rũ...
                        
                    </Text>
                </View>

                <View style={styles.stylePice}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 10 }}>$100<Text style={{ fontSize: 15 }}>/Ngày</Text></Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: 140, height: 45, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 19, color: '#014891' }}>Đặt ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default MyLab5b3

const styles = StyleSheet.create({
    fontText: {
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        marginTop: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex: 1,
        flexDirection: 'column',

    },
    text: {
        width: '90%',
        height: 'auto',
        flex: 1,
        paddingLeft: 20,
        justifyContent: 'flex-start'
    },
    stylePice: {
        height: 70,
        width: '100%',
        backgroundColor: '#014891',
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    }
})