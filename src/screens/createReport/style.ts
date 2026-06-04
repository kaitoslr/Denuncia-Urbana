import { StyleSheet } from "react-native";

import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFF",
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: themas.color.primary,
    },

    input: {
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
    },

    textArea: {
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 10,
        padding: 12,
        height: 120,
        textAlignVertical: "top",
        marginBottom: 20,
    },

    button: {
        backgroundColor: themas.color.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },

    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});