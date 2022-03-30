import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, error, isLoading} = useFetch("http://localhost:8000/blogs/" + id);
  const history =useHistory();


  const handleClick= ()=> {

    fetch("http://localhost:8000/blogs/" +blog.id, {
      method: "DELETE" //we are asking json to delete the data whith that id. the one frome where the button "delete" is triggered.
    }). then (()=>{
      history.push("/"); //to redirect the user once it's complete.
    })
    }

  return (
    <div className="blog-details"> 
    { isLoading && <div> Loading... </div> }  
    { error && <div> {error} </div>}
     {blog && (
       <article>
         <h2> {blog.title}</h2>
         <p> Written by {blog.author}</p>
         <div> {blog.body}</div>
         <button onClick={handleClick}>delate</button>
       </article>  
     )}   
    </div>
  );
}
 
export default BlogDetails;