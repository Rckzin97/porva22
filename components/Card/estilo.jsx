
import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container :{
        marginTop: 10,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#DC143C',
        borderRadius:10
    },
    texto :{
        flex: 1,
        padding: 12,
        fontSize: 20,
        color: '#fff',
    },
    botao: {
        height: 50,
        width: 80,
        backgroundColor: '#DC143C',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    texto_botao:{
        fontSize: 30,
        color: '#fff'
    }
})