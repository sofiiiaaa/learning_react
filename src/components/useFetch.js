import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState (null); /* I change blogs and setBlogs to make it reusable, for exemple for tags or categories*/ 
    const [isLoading, setIsLoading] = useState (true); 
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=>{
          fetch(url, {signal: abortCont.signal})
    .then(res =>{
      if(!res.ok){
         throw Error ("could not fetch the data for that resource");
      }
      return res.json();
    })
    .then(data=>{  /* it is not important if the prop name is the same of the data, setData cose react recognize them like to different things*/
      setData(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err=>{
        if (err.name === "AbortError") { console.log ("fetch aborted")}
        else { 
             setIsLoading(false);
            setError(err.message);
        }    
    })
        }, 1000);  
    
    return ()=> abortCont.abort();
}, [url]);

return { data, isLoading, error } /* 'cause that is what we want to get */
}

export default useFetch;