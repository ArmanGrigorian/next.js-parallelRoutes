"use client";

import ErrorPage from "@/components/ErrorPage";

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
	return <ErrorPage error={error} reset={reset} />;
};

export default Error;
