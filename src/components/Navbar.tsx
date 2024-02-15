import Link from "next/link";
import LogButton from "./LogButton";

const Navbar = () => {
	return (
		<nav className="max-w-[1280px] mx-auto h-14 bg-green-900 text-neutral-100 text-lg font-medium flex justify-evenly items-center">
			<Link href="/">Home</Link>
			<Link href="/dashboard">Dashboard</Link>
			<LogButton />
		</nav>
	);
};

export default Navbar;
