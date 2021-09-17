import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
} from "react-native";

export default function App() {
	var [erros, setErros] = useState([]);

	const [chances, setChances] = useState(6);
  
  const dicaInicial = "É um numero entre 1 e 100";
  const [dica, setDica] = useState(dicaInicial);

  var btnAgainVisivel = true;
  var btnJogarVisivel = false;

	var sorteado = Math.floor(Math.random() * 100) + 1;

	const [num, setNum] = useState("");

  const jogar= () => {
    if (num == 0 || num > 100 || isNaN(num)) {
			alert("Digite um numero valido");
			return;
		}

    if(num == sorteado){
      alert('Parabéns!!! Você acertou!!!');
      setDica("Parabéns!! Número sorteado: " + sorteado);
      btnAgainVisivel = false;
      btnJogarVisivel = true;
      setErros([]);
    }else{
      if(erros.indexOf(num) >= 0){
        alert("Você já apostou o número " + num + ". Tente outro.....");
      }else{
        erros.push(num);
        setErros(erros);
        setChances(chances - 1);
      }
      if(chances == 0){
				alert("Suas chances acabaram....");
        btnAgainVisivel = false;
        btnJogarVisivel = true;
        setDica(`Game Over!! Número sorteado: ${sorteado}`);
			}else{
        var dica = num < sorteado ? 'Maior' : 'Menor';
        setDica(`Tente um número ${dica} que o ${num}`)
      }
    }

    setNum('');
  }

  const again = () => {
    setNum('');
    setDica(dicaInicial);
    setErros('');
    setChances(6);
  }

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text>
				<h1>Tente Acertar o Número</h1>
			</Text>
			<TextInput
				style={styles.input}
				onChangeText={(text) => setNum(text)}
				value={num}
			/>
			<Button
				onPress={() => {
					jogar();
				}}
				disabled={btnJogarVisivel}
				title="Jogar"
				color="blue"
			/>

			<Button
				onPress={() => {
					again();
				}}
				disabled={btnAgainVisivel}
				title="Jogar Novamente"
				color="red"
			/>

			<Text>Erros: {erros.map((val) => {
        return ` ${val}`;
      })}</Text>

			<Text>Chances: {chances}</Text>

			<Text>Dica: {dica}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		padding: 16,
		marginTop: 50,
		borderBottomColor: "black",
		borderWidth: 2,
    marginBottom: 10,
	},
  
});
