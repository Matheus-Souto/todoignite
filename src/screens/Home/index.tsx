import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Counter } from "../../components/Counter";
import { Task } from "../../components/Task";
import { useState } from "react";
import { Empty } from "../../components/Empty";


export default function Home() {
    type Task = {
        id: number;
        taskName: string;
        isCompleted: boolean;
    }

    const [tasks, setTasks] = useState<Task[]>([])
    const [taskName, setTaskname] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)
    const [completedCount, setCompletedCount] = useState(0)

    const handleAddTask = () => {
        if (taskName.length === 0) {
            return Alert.alert("Atenção", "Por favor, insira um nome para a tarefa!")
        }
        setTasks((prevState) => [...prevState, 
            { id: Math.random(), 
              taskName, 
              isCompleted }
        ]);
        setTaskname("")
        console.log(tasks)
    }

    const handleRemoveTask = (index: number) => {
        Alert.alert(
            "Atenção",
            "Tem certeza que quer remover a tarefa?",
            [
                {
                    text: "Não",
                    onPress: () => {},
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => {
                        setTasks((prevState) => prevState.filter((_, i) => i!== index));
                    }
                }
            ]
        )
    }

    const handleToggleCompleted = (index: number) => {
        setTasks((prevState) => {
            const updatedTasks = prevState.map((task, i) =>
                i === index ? { ...task, isCompleted: !task.isCompleted } : task
            );
    
            const completedTasksCount = updatedTasks.filter((task) => task.isCompleted).length;
            
            setCompletedCount((prevCompletedCount) => {
                const countDifference = completedTasksCount - prevCompletedCount;
                return prevCompletedCount + countDifference;
            });
            
            return updatedTasks;
        });
    };

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
                        <Counter text="Criadas" color="#4EA8DE" counter={tasks.length} />
                        <Counter text="Concluídas" color="#8284FA" counter={completedCount} />
                    </View>
                    <FlatList
                        data={tasks}
                        renderItem={({ item, index }) => (
                            <Task
                                key={item.id} 
                                text={item.taskName}
                                onPress={() => handleRemoveTask(index)}
                                index={index}
                                onChecked={() => handleToggleCompleted(index)}
                            />
                        )}
                        ListEmptyComponent={() => (
                            <Empty />
                        )}
                    />
                </View>
            </View>
        </View>
    )
}