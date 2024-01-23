import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        
    },
    task: {
        height: 75,
        padding: 12,
        backgroundColor: "#262626",
        elevation: 1,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#333",
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 3.84,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    checkboxBase: {
        width: 20,
        height: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#4EA8DE",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    checkboxChecked: {
        backgroundColor: "#5E60CE",
        borderColor: "#5E60CE",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
    },
    taskText: {
        maxWidth: 250,
        fontFamily: "Inter_400Regular",
        fontSize: 14,
        color: "#F2F2F2",
        lineHeight: 24,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#808080'
    }
})