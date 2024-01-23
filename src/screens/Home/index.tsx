import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Counter } from "../../components/Counter";
import { Task } from "../../components/Task";
import { useState } from "react";


export default function Home() {
    const [tasks, setTesks] = useState<string[]>([])
    const [taskName, setTaskname] = useState("")

    // criar função para adicionar um novo task
    const handleAddTask = () => {
        setTaskname("")
        setTesks([...tasks, taskName])
        console.log(tasks)
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
                        keyExtractor={ item  => item }
                        renderItem={({ item }) => (
                            <Task 
                                key={item}
                                text={item} 
                            />
                        )}
                    />   
                </View>
            </View>
        </View>
    )
}