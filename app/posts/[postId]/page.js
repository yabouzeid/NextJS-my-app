import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
export default async function PostDetailsPage ({ params }) {
	const postId = params.postId;
    const loadingJsx = (<div><h3>loading ...</h3></div>)
	return (
		<div style={{ padding: "20px" }}>
			<h3>Post Details</h3>
            <Suspense fallback={loadingJsx}>
                <PostDetails postId={postId}/>
            </Suspense>
            
		</div>
	);
}
