import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: 2,
        borderBottomColor: "#3F3F3F",
        marginTop: 10,
    },
    icon: {
         opacity: 0.5,
         marginBottom: 16,
    },
    emptyContainer: {
        flex: 1,
        marginTop: 48,
        marginBottom: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "Inter_700Bold",
        color: "#808080",
        fontSize: 14,
        lineHeight: 24,
    },
    textFamily: {
        fontFamily: "Inter_400Regular",
    }
})