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
        fetch('https://server-for-json.herokuapp.com/blogs',{
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
        <div className="Create-content">
            <div className='Create-Form'>
                <h1>Add a Blog</h1>
                <form onSubmit ={handleSubmit}>
                    <div className="Blog-Title-Form">
                        <label>Blog Title : </label>
                        <input type="text" 
                        required
                        value={title}
                        onChange = {(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="Blog-Author-Form">
                        <label>Author : </label>
                        <input type="text" 
                        required
                        value={author}
                        onChange = {(e) => setAuthor(e.target.value)}/>
                    </div>
                    <div className="Blog-Body-Form">
                        <label> Body : </label>
                        <textarea
                        required
                        value={body}
                        onChange = {(e) => setBody(e.target.value)}/>
                    </div>
                    <div className="Form-Button">
                        {!isPending && <button>Add Blog</button>}
                        {isPending && <button>Adding...</button>}
                    </div>
                </form>
            </div>   
        </div>
     );
}
 
export default Create;