"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { LogContext } from "./LogContextProvider";

const LogButton = () => {
	const router = useRouter();
	const contextValue = useContext(LogContext);

	if (contextValue === null) return null;

	const { state, dispatch } = contextValue;

	function handlerLogButton() {
		if (!state.isLoggedIn) {
			router.push("/login");
		}
		dispatch({
			type: "logOut",
		});
	}

	return (
		<button type="button" onClick={handlerLogButton}>
			{state.isLoggedIn ? "Log Out" : "Log In"}
		</button>
	);
};

export default LogButton;
