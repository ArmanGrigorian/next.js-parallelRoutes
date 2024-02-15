import LoginForm from "@/components/LoginForm";

function LoginPage() {
	return (
		<main className="max-w-[1280px] mx-auto bg-neutral-100">
			<h1 className="h-20 leading-[80px] px-5 bg-neutral-100 text-center text-5xl text-green-700 font-bold">
				Login
			</h1>
			<LoginForm />
		</main>
	);
}

export default LoginPage;
