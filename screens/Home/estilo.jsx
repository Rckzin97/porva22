import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: ' #FF1493',
    },
    lista:{
        paddingLeft: 22,
        paddingRight: 22
    },
    corpo:{
        padding: 22
    },
    titulo: {
        marginTop: 5,
        fontSize: 36,
        fontWeight: 'bold'
    },
    sub_titulo:{
        fontSize: 22,
        color: ' #FF1493' 
    },
    form: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    input_text: {
        flex: 1,
        height: 80,
        color: ' #FF1493',
        fontSize: 26,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#8B0000'
    },
    botao:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 68,
        borderRadius: 10,
        fontSize: 50,
        backgroundColor: '#4DDA86',
        marginLeft: 16
    },
    texto_botao: {
        fontSize: 30
    }
})