import {useState} from "react"
import {useHistory} from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isLoading, setIsLoading] = useState(false);
    const history= useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); //if not, when you click the Add Blog button it would refresh the page by default and you would lose everything you wrote.
        const blog = { title, body, author };

        setIsLoading(true);

        fetch("http://localhost:8000/blogs", {
            method:"POST",
            headers: {"Content-Type":"application/json"},  //we are sayng what type of content we are sending with this request. We are sending json data.
            body: JSON.stringify(blog)       
        }).then (()=> {
            console.log("new blog added")
            setIsLoading(false);
            //history.go(-1) //to make the persone go to the last page. you can put -2,3,4, ecc.. and you can also use +1,2,3, etc..
            history.push("/"); //to make the persone go to the home after he added a new blog 
        });
    
    }

    return ( 
        <div className="create">
            <h2> Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                type= "text"
                required
                value={title}
                onChange = {(e)=>setTitle(e.target.value)}
                />
                <label>Blog body:</label>                
                <textarea
                required
                value={body}
                onChange= {(e)=>setBody(e.target.value)}>
                </textarea>            
                <label>Blog authore:</label>
                <select 
                value={author}
                onChange= {(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
               {!isLoading&& <button>Add Blog</button>}
               {isLoading&& <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>
        </div> 
     );
}
 
export default Create;