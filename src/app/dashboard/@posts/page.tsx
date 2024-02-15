import { T_postsReq } from "@/types";

const PostsPage = async () => {
	const req: T_postsReq = await fetch("https://dummyjson.com/Posts", {
		cache: "no-store",
	}).then((res) => res.json());

	return (
		<section className="w-[100%] shadow-xl border rounded p-5">
			<h2 className="text-center text-3xl text-green-700 font-bold mb-2">Posts</h2>
			<div className="h-[67vh] overflow-y-auto max-md:h-56">
				{req.posts.map((post) => (
					<article key={post.id} className="mb-3">
						<h3 className="text-xl font-bold">{post.title}</h3>
						<ul className="flex items-center gap-3">
							{post.tags.map((tag, idx) => (
								<li key={idx} className="underline capitalize font-medium">
									{tag}
								</li>
							))}
						</ul>
						<p className="first-letter:text-green-700 first-letter:text-2xl">{post.body}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default PostsPage;
