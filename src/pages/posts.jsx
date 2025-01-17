import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../slices/postsslice";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner";

const Posts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    // Fetch posts from an API or local storage
    const postsState = useSelector((state) => state.myPosts);

    if(postsState.loading === true) {
        return <Spinner />
    }

    if(postsState.error) {
        return <div className="flex justify-center items-center text-4xl text-red-600 font-bold ">
            {postsState.error}
        </div>
    }
    
    return (
        <div className="p-1 lg:p-4  duration-500 ">
            <h1 className="text-3xl font-bold text-center text-[#ff5630]">Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-8">

                { postsState.posts?.map((post) => (
                     <Link to={`/post/${post.id}`} key={post.id} className="bg-slate-200 p-8 rounded-xl 
                        hover:bg-slate-50 duration-500 transition-all hover:scale-105">
                        <h1 className="text-xl text-left font-semibold">{post.title}</h1>
                        <p>{post.body}</p>
                    </Link>
                ))}

            </div>
        </div>
      )
}

export default Posts