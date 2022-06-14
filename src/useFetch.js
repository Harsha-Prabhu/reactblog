import { useState,useEffect} from 'react';

const useFetch = ((url)=>{
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    const [data,setData] = useState(null);

    useEffect(() =>{

        fetch('http://localhost:8000/blogs')
            .then((res) => {
                if(!res.ok){
                    throw Error('Could not fetch data');
                }
                return res.json()})
            .then((data)=>{
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            }).catch((err) => {
                setError(err.message);
                setIsPending(false);
            })
        },[url])
        return {data,isPending,error}
})

export default useFetch;