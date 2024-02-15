"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useContext } from "react";
import { LogContext } from "./LogContextProvider";

const LoginForm = () => {
	const router = useRouter();
	const contextValue = useContext(LogContext);

	if (contextValue === null) return null;

	const { dispatch } = contextValue;

	function handleLogin(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		dispatch({
			type: "logIn",
		});

		router.push("/dashboard");
	}
	return (
		<form onSubmit={handleLogin} className="p-10 flex flex-col justify-center items-center gap-5">
			<input
				type="text"
				name="userLogin"
				placeholder="login..."
				required
				className="border rounded px-2 py-1 shadow-xl placeholder-shown:italic"
			/>
			<input
				type="password"
				name="userPassword"
				placeholder="password..."
				required
				className="border rounded px-2 py-1 shadow-xl placeholder-shown:italic"
			/>
			<input
				type="submit"
				value="Log In"
				className="border rounded px-4 py-1 shadow-xl hover:bg-green-800 hover:text-neutral-100 hover:font-medium active:scale-95"
			/>
		</form>
	);
};

export default LoginForm;
