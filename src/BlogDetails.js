import { useParams } from 'react-router-dom'
import  useFetch  from './useFetch'

const BlogDetails = () => {
    const { id } = useParams();
    const db_url = `http://localhost:8000/blogs/${id}`
    const {error,isPending,data:blog} = useFetch(db_url);
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            { blog && <div className="blog-full">
                <article>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <h3>{blog.body}</h3>
                </article>
            </div>}
        </div>
      );
}
 
export default BlogDetails;