import { Text, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';

export function Empty() {
    return(
        <View>
            <View style={styles.divider} />
            <View style={styles.emptyContainer}>
                <FontAwesome5 style={styles.icon} name="clipboard-list" size={56} color="lightgray" />
                <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={[styles.text, styles.textFamily]}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </View>
    )
}