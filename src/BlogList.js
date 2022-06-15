import { Link } from 'react-router-dom';
const BlogList = ({blogs,title}) => {

    return (
        <div className="blog-list">
            <div className="blog-list-heading">
                <h1>{ title }</h1>
            </div>
            {blogs.map((blog) => (
            <><div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </Link>
            </div></>
          ))}
        </div>
      );
}
 
export default BlogList;