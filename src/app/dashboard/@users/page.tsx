import { T_usersReq } from "@/types";
import Image from "next/image";

const UsersPage = async () => {
	const req: T_usersReq = await fetch("https://dummyjson.com/users").then((res) => res.json());

	return (
		<section className="w-[100%] shadow-xl border rounded p-5">
			<h2 className="text-center text-3xl text-green-700 font-bold mb-2">Users</h2>
			<div className="h-[67vh] overflow-y-auto max-md:h-56">
				{req.users.map((user) => (
					<article key={user.id} className="flex items-center gap-2 mb-3">
						<Image src={user.image} width={50} height={60} alt={`${user.firstName}'s avatar`} />
						<div>
							<h3 className="text-xl font-bold">{`${user.firstName} ${user.lastName}`}</h3>
							<ul>
								<li>
									<span className="underline font-medium">Email:</span> {user.email}
								</li>
								<li>
									<span className="underline font-medium">Age:</span> {user.age}
								</li>
								<li>
									<span className="underline font-medium">Gender:</span> {user.gender}
								</li>
							</ul>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default UsersPage;
