import {useState} from 'react'
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [body,setBody] = useState('')
    const [isPending,setIsPending] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true)
        const blog = {title,author,body};
        fetch('http://localhost:8000/blogs/',{
            method : 'POST',
            headers : {'Content-type':'application/json'},
            body : JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added');
            setIsPending(false)
            navigate('/');
        })
    };
    return ( 
        <div>
            <h1>Create Page</h1>
            <form onSubmit ={handleSubmit}>
                <label>Blog Title : </label>
                <input type="text" 
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)}/>
                <label>Author : </label>
                <input type="text" 
                required
                value={author}
                onChange = {(e) => setAuthor(e.target.value)}/>
                <label> Body : </label>
                <textarea
                required
                value={body}
                onChange = {(e) => setBody(e.target.value)}/>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding...</button>}
                <p>{title}{author}{body}</p>
            </form>

        </div>
     );
}
 
export default Create;