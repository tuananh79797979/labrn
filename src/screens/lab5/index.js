import { ImageBackground, StatusBar, View } from "react-native";
import { styles } from "../lab3/style";

const Lab5 = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0"/>
            <ImageBackground>
                source={require('../../assets/image/travel.png')}
                style={styles.image}
                <View style={styles.details}>
                    <Text>Texxxx</Text>
                </View>
            </ImageBackground>

        </View>
    );
};
export default Lab5;