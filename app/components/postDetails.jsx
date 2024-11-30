export default async function PostDetails({ postId }) {
	//simulate a delay
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`,
		{
			next: {
				revalidate: 120, //sec
			},
		}
	);
	const post = await response.json();
	return (
		<div>
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
				<hr />
				<p>{post.body}</p>
			</div>
		</div>
	);
}
