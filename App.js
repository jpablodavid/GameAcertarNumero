import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() { 
  const inputAccessoryViewID = "uniqueID";
	const initialText = "Placeholder Text";
	const [text, setText] = useState(initialText);

  return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text></Text>
			<TextInput
				style={{
					padding: 16,
					marginTop: 50,
				}}
				inputAccessoryViewID={inputAccessoryViewID}
				onChangeText={(text) => setText(text)}
				value={text}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
