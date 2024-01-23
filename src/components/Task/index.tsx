import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";

type Props = {
    text: string | any;
    onPress: (index: number) => void;
    onChecked: (index: number) => void;
    index: number;
}

export function Task({text, onPress, onChecked, index}: Props) {
    const [checked, setChecked] = useState(false)

    return (
        <View key={index} style={styles.container}>
            <View style={styles.task}>
                <Pressable 
                style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                onPress={() => {
                    setChecked(!checked)
                    onChecked(index);
                }}>
                    {checked && <FontAwesome name="check" size={15} color="#F2F2F2" />}
                </Pressable>
                <Text style={[styles.taskText, checked && styles.completedText]}>{text}</Text>
                <TouchableOpacity
                    onPress={(event) => onPress(index)}
                >
                    <FontAwesome name="trash-o" size={18} color="#808080" />
                </TouchableOpacity>
            </View>
        </View>
    )
}