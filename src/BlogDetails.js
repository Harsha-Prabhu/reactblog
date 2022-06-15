import { useParams } from 'react-router-dom'
import  useFetch  from './useFetch'
import {useNavigate} from 'react-router-dom'

const BlogDetails = () => {
    const { id } = useParams();
    const db_url = `https://server-for-json.herokuapp.com/blogs/${id}`
    const {error,isPending,data:blog} = useFetch(db_url);
    const navigate  = useNavigate();
    const handleDelete = () =>{
        fetch('https://server-for-json.herokuapp.com/blogs/'+ id,{
            method: 'DELETE',
        }).then(() =>{
            navigate('/');
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            { blog && <div className="blog-full">
                <article>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <h3>{blog.body}</h3>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            </div>}
        </div>
      );
}
 
export default BlogDetails;