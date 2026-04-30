import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingVertical: 20,
		paddingHorizontal: 12,
		gap: 20,
		backgroundColor: "#EDEDED"
	},
	header: {
		color: "#333333",
		fontWeight: 700,
		fontSize: 20,
	},
	link: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		width: "fit-content",
		color: "#5893ef",
		borderColor: "#5893ef",
		borderWidth: 1,
		borderRadius: 20,
		textDecorationLine: "none"
	},
	title: {
		textAlign: "center",
		paddingBottom: 20,
		color: "#333333",
		fontWeight: 400,
		fontSize: 16
	}
});
