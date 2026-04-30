import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		gap: 20
	},
	input: {
		paddingVertical: 6,
		paddingHorizontal: 14,
		width: 260,
		fontSize: 14,
		borderRadius: 10,
		backgroundColor: "#FFFFFF",
	},
	titulo: {
		textAlign: "center",
		paddingBottom: 4,
		color: "#0C326F",
		fontWeight: 700,
		borderBottomWidth: 1,
		borderColor: "#0c326f",
		borderStyle: "dashed"
	},
	card: {
		display: "flex",
		flexDirection: "column",
		padding: 12,
		gap: 4,
		width: 260,
		backgroundColor: "#FFFFFF",
		borderRadius: 10
	},
	cardInfo: {
		color: "#333333",
	}
});
