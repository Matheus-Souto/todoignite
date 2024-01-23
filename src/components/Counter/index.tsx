import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    text: string;
    color: string;
    counter: number;
}

export function Counter({text, color, counter}: Props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, {color: color}]}>{text}</Text>
            <View style={styles.counter}>
                <Text style={styles.counterText}>{counter}</Text>
            </View>
        </View>
    )
}