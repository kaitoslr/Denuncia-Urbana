import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f7fa",
        justifyContent:'space-evenly'
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: themas.color.primary,
        marginBottom: 15,
    },
    value: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 5,
    },
    perfilBox: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
        marginBottom: 20,
    },
    boxExit: {
        marginTop: 30,
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
    },
    dashboardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#333",
    }, cardsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
    }, card: {
        backgroundColor: "#fff",
        width: "30%",
        paddingVertical: 20,
        borderRadius: 15,
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 3,
    }, cardNumber: {
        fontSize: 28,
        fontWeight: "bold",
        color: themas.color.primary,
    }, cardLabel: {
        marginTop: 5,
        color: "#666",
        fontSize: 14,
    },
});