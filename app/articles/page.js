import Link from "next/link";

export default function ArticlesPage() {
	return (
		<div>
			<h1>Articles Page</h1>
			<Link href="/posts">
				<button>Posts</button>
			</Link>
		</div>
	);
}
