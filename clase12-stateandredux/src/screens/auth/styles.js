import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: '#726E97',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        height: 300,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        marginVertical: 5,
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginVertical: 5,
    },
    input: {
        borderBottomColor: '#726E97',
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Poppins-Regular',
        marginBottom: 10,
    },
    promptButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#726E97',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    prompt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 14,
        color: '#7698B3',
        fontFamily: 'Poppins-Regular',
    }
});