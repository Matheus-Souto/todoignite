import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from '@expo/vector-icons';

type Props = {
    text: string;
    onPress: (index: number) => void;
    index: number;
}

export function Task({text, onPress, index}: Props) {
    return (
        <View key={index} style={styles.container}>
            <View style={styles.task}>
                <Pressable style={styles.checkboxBase}></Pressable>
                <Text style={styles.taskText}>{text}</Text>
                <TouchableOpacity
                    onPress={(event) => onPress(index)}
                >
                    <FontAwesome name="trash-o" size={18} color="#808080" />
                </TouchableOpacity>
            </View>
        </View>
    )
}