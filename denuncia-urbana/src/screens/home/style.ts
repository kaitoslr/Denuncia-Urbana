import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  reportTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  reportText: {
    marginBottom: 4,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 15,
    gap: 20,
  },

  editButton: {
    color: "#2196F3",
    fontWeight: "bold",
  },

  deleteButton: {
    color: "#F44336",
    fontWeight: "bold",
  },
});