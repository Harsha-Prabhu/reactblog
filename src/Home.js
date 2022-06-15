import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {


    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    const db_url = "https://server-for-json.herokuapp.com/blogs"
    const {error,isPending,data:blogs} = useFetch(db_url);


    
    return (
        <div className="home">  
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            { blogs && <BlogList blogs={ blogs } title="All Blogs" /*handleDelete={ handleDelete}*//>}
            { blogs && <BlogList blogs={ blogs.filter((blog)=> blog.author === 'Harsha')}  title="Harsha's Blogs" /*handleDelete={ handleDelete}*/ />}
        
        </div>
      );
    }
     
    export default Home;