import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isLoading, data: blogs } = useFetch('http://localhost:8000/blogs') /*data:blogs = grab the data but call it blogs */

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title ="All Blogs!"/> }
    </div>
  );
}
 
export default Home;