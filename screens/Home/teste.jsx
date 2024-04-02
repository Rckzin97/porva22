import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { estilo } from "./estilo"
import Card from "../../components/Card/teste"
import Cabecalho from "../../components/Cabecalho/teste"

export default function Home(){

    const lista = ['teste','bruno','andre',
    'fabio',
    ]


    return(
        <View style={estilo.tela}>
            <Cabecalho />
            <View style={estilo.corpo}>
                <Text style={estilo.titulo}>Lista de presença</Text>
                <Text style={estilo.sub_titulo}>12, de março de 2024</Text>
                <View style={estilo.form}>
                    <TextInput
                        style={estilo.input_text}
                    />
                    <TouchableOpacity style={estilo.botao}>
                        <Text style={estilo.texto_botao}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList 
            style={estilo.lista}
                data={lista}
                keyExtractor={item => item}
                renderItem={({item}) =>(
                    <Card key={item} name={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}