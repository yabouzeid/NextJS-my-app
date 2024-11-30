// import Todo from "../components/todo";
import Link from "next/link";

export const metadata = {
	title: "Posts Page",
};
export default async function Posts() {
	// Next --> server components (by default)
	// any API request by default uses Static Site Generation,
	// so response will be cashed & will not be changed.
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		// by default "force-cache" for SSG
		// "no-store" for SSR
		// cache: "no-store",
		// instead of cache use next for ISR (SSG + SS)
		next: {
			revalidate: 120, //sec
		},
	});
	const posts = await response.json();
	const postsJSX = posts.map((post) => {
		return (
			<Link href={`/posts/${post.id}`} style={{ width: "70%" }}>
				<div
					style={{
						width: "100%",
						background: "white",
						padding: "10px",
						borderRadius: "10px",
						marginTop: "10px",
						color: "black",
					}}
				>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			</Link>
		);
	});
	console.log(posts);
	return (
		<div>
			<h1>Posts Page</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{/* imported client component */}
				{/* <Todo/> */}
				{postsJSX}
			</div>
		</div>
	);
}
