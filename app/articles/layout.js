import Link from "next/link";

export const metadata = {
	title: "Articles Page",
};
export default function ArticlesLayout({ children }) {
	return (
		<div>
            <h1>Articles</h1>
			<div
				style={{
					marginTop: "50px",
					background: "blue",
					padding: "20px",
					borderRadius: "10px",
				}}
			>
				<nav>
                    <Link style={{ margin: "7px" }} href="/articles/hello">Show Article</Link>
                    <Link style={{ margin: "7px" }}	href="/articles/featuredarticles">Featured Articles</Link>
                </nav>
                {children}

			</div>
		</div>
	);
}
