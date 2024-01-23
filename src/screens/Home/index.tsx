import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Counter } from "../../components/Counter";
import { Task } from "../../components/Task";
import { useState } from "react";


export default function Home() {
    const [tasks, setTasks] = useState<string[]>([])
    const [taskName, setTaskname] = useState("")

    // criar função para adicionar um novo task
    const handleAddTask = () => {
        if (taskName.length === 0) {
            return Alert.alert("Atenção", "Por favor, insira um nome para a tarefa!")
        }
        setTasks(prevState => [...prevState, taskName])
        setTaskname("")
    }

    // criar função para remover um task
    const handleRemoveTask = (index: number) => {
        setTasks(prevState => prevState.filter((_, i) => i!== index))
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.bgHeader}>
                <Image source={require('../../../assets/Logo.png')} />
            </View>

            <View style={styles.bgTasks}>
                <View style={styles.form}>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Adicione uma nova tarefa"
                            placeholderTextColor="#808080"
                            value={taskName}
                            onChangeText={setTaskname}
                        />
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={handleAddTask}
                        >
                            <Text style={styles.buttonText}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.counterContainer}>
                        <Counter text="Criadas" color="#4EA8DE" counter={0} />
                        <Counter text="Concluídas" color="#8284FA" counter={0} />
                    </View>
                    {/* <View style={styles.divider} /> */}
                    <FlatList
                        data={tasks}
                        keyExtractor={ (index)  => index }
                        renderItem={({ item, index }) => (
                            <Task
                                key={index} 
                                text={item}
                                onPress={() => handleRemoveTask(index)}
                                index={index}
                            />
                        )}
                    />   
                </View>
            </View>
        </View>
    )
}