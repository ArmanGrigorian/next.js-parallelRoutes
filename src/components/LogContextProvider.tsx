"use client";

import { I_state } from "@/types";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

export const LogContext = createContext<null | {
	state: I_state;
	dispatch: Dispatch<{ type: string }>;
}>(null);

const initialState: I_state = {
	isLoggedIn: false,
};

function reducer(state: I_state, { type }: { type: string }) {
	switch (type) {
		case "logIn":
			state = { ...state, isLoggedIn: true };
			return state;
		case "logOut":
			state = { ...state, isLoggedIn: false };
			return state;
		default:
			return state;
	}
}

const LogContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <LogContext.Provider value={{ state, dispatch }}>{children}</LogContext.Provider>;
};

export default LogContextProvider;
