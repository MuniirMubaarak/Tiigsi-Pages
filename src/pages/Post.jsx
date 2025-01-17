import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../slices/postsslice";
import { useEffect } from "react";
import Spinner from "../components/spinner";
import { useParams } from "react-router";
import { getComments } from "../slices/commentsSlice";

const Post = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
        dispatch(getComments())
    }, [])
    // Fetch posts from an API or local storage
    const postsState = useSelector((state) => state.myPosts);
    const commentsState = useSelector((state) => state.myComments);
    if(postsState.loading) {
        return <Spinner />
    }

    if(postsState.error) {
        return <div className="flex justify-center items-center text-4xl text-red-600 font-bold ">
            {postsState.error}
        </div>
    }
    const comment = commentsState.comments.find((comment) => comment.postId === +id)
    const post = postsState?.posts?.find((post) => post.id === +id);
    return (
        <div className="p-2 md:p-4 lg:p-8">
            <div className="weyn flex flex-col justify-center space-y-5">
                <div className="details ">
                    <h1 className="text-xl font-semibold text-blue-600">{post?.title}</h1>
                    <p className=" font-mono ">{post?.body}</p>

                </div>
                <div className="comments">
                        <div className="comment bg-gray-200 rounded-md p-2">
                            <h1 className="text-[14px] font-mono font-semibold text-blue-600">{comment?.email}</h1>
                            <p className="text-lg font-serif text-gray-700">{comment?.body}</p>
                        </div>

                    {/* {
                        comments?.map((comment) => (
                            <div key={comment.id} className="my-2 p-2 border-b border-gray-200">
                                <h1>{comment.postId}</h1>
                                <p className="text-sm font-mono text-gray-700">{comment.body}</p>
                            </div>
                        )) || <p className="text-sm font-mono text-gray-700">No comments yet.</p>
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Post