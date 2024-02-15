"use client";
import { ReactNode, useContext } from "react";
import { LogContext } from "./LogContextProvider";

const ParallelRoutes = ({ users, posts }: { users: ReactNode; posts: ReactNode }) => {
	const contextValue = useContext(LogContext);
	if (contextValue === null) return null;
	const { state } = contextValue;

	return (
		<div className="bg-neutral-100 flex justify-between items-start gap-5 p-5 max-md:flex-col max-md:justify-start max-md:items-center">
			{users}
			{state.isLoggedIn && posts}
		</div>
	);
};

export default ParallelRoutes;
