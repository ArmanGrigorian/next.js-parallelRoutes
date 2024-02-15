const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
	return (
		<section className="w-[50%] h-[80vh] border rounded p-5 overflow-y-auto">
			<h2 className="text-center text-3xl text-green-700 font-bold mb-2">Something went wrong!</h2>
			<button
				onClick={() => reset()}
				className="border rounded-md px-4 py-2 shadow-xl hover:font-semibold hover:bg-green-800 hover:text-neutral-100 active:scale-95">
				Try again
			</button>
		</section>
	);
};

export default ErrorPage;
