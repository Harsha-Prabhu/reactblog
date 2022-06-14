import {useState} from 'react'
const Create = () => {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [body,setBody] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,author,body};
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
                <button>Add Blog</button>
                <p>{title}{author}{body}</p>
            </form>

        </div>
     );
}
 
export default Create;