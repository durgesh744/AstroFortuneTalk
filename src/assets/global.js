import { StyleSheet } from "react-native";
import { Colors } from "./style";
import { SCREEN_WIDTH } from "../config/Screen";

export const commonStyles = StyleSheet.create({
    inputbox1: {
        backgroundColor: Colors.whiteDark,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        elevation: 5,
        height: SCREEN_WIDTH * 0.14,
        width: '100%',
        marginVertical: 10,
        paddingHorizontal: 10,
        position: 'relative',
    },
    inputbox2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: SCREEN_WIDTH * 0.12,
        width: '100%',
        marginBottom: 15,
        borderBottomColor: Colors.gray2,
        borderBottomWidth: 1,
    },
})