import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgHeader: {
        flex: 1,
        gap: 8,
        backgroundColor: "#0D0D0D",
        justifyContent: "center",
        alignItems: "center"
    },
    bgTasks: {
        flex: 3,
        backgroundColor: "#1A1A1A"
    },
    form: {
        position: "absolute",
        top: -45,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 16
    },
    formContainer: {
        width: "100%",
        flexDirection: "row",
    },
    input: {
        width: "82%",
        height: 56,
        fontSize: 16,
        padding: 16,
        borderRadius: 6,
        backgroundColor: "#262626",
        color: "#F2F2F2",
        fontFamily: "Inter_400Regular",
        lineHeight: 22,
        borderWidth: 1,
        borderColor: "#5E60CE"
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    buttonText: {
        fontSize: 24,
        color: '#F2F2F2'
    },
    counterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 20
    },
})