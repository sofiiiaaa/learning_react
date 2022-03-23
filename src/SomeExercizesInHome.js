import {useState} from "react"; 

const SomeExercizesInHome = () => {

    const [name, setName] = useState ("mario");
    const [age, setAge] =useState (25);

    const handleClickToSetNameAndAge = () => {
        setName ("luigi");
        setAge (30);

    }

    const handleClick = () =>{
        console.log("hello, ninjas");
    }
    const handleClickWithInfo = (e) => {
        console.log("hii there", e);
    }
    const handleClickAgain = (name) =>{
        console.log("hello " + name);
    }
    const HandleClickAgainWithInfo = (name, e) => {
        console.log("hello " + name, e.target);
    }

    
    return ( 
        <div className="home"> 
            <h2>Home page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClickWithInfo}>Click me for event parameter info</button>
            <button onClick={ ()=> {handleClickAgain("mario")}}>Click me again</button>
            <button onClick={ (e) => {HandleClickAgainWithInfo("mario",e)}}>Click me again for event parameter</button> 
            <button onClick={ handleClickToSetNameAndAge}>Click me again for change name and age</button> 
        </div>
     );
}





  // const title = "Welcome to the new blog";
  // const likes =50;
  // const link= "http://www.google.com";
 
export default Home;