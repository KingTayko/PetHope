import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topShape: {
    width: "100%",
    height: 180,
    backgroundColor: "#FF4F4B",
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 50,
  },

  content: {
    flex: 1,
    marginTop: -60,
    alignItems: "center",
    paddingHorizontal: 24,
  },

  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
    color: "#333",
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: "#333",
  },

  button: {
    width: "80%",
    backgroundColor: "#28B9CE",
    paddingVertical: 16,
    borderRadius: 12,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonIcon: {
    marginRight: 10,
  },

  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },

  footer: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  footerText: {
    fontSize: 14,
    color: "#555",
  },

  loginButton: {
    marginLeft: 10,
    backgroundColor: "#FF4F4B",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 10,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
