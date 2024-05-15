import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./style";
const { width, height } = Dimensions.get('screen');

export const commonStyles = StyleSheet.create({
    inputbox1: {
        backgroundColor: Colors.whiteDark,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        elevation: 5,
        height: width * 0.14,
        width: '100%',
        marginVertical: 10,
        paddingHorizontal: 10,
        position: 'relative',
    },
    inputbox2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: width * 0.12,
        width: '100%',
        marginBottom: 15,
        borderBottomColor: Colors.gray2,
        borderBottomWidth: 1,
    },
})