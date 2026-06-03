import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFF",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 40,
        color: themas.color.primary,
    },
    infoBox: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: "#666",
    },
    value: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 5,
    },
});