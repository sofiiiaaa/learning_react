import React from "react";
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Navbar from './Navbar';
import Home from './Home';
import NotFound from "./NotFound";

const Main = () => {
    return (
    <React.Fragment>
        <div className="Main">
            <Navbar />        
            <div className="content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route> 
                <Route path="/create">
                    <Create />
                </Route> 
                <Route path="/blogs/:id">
                    <BlogDetails />
                </Route> 
                <Route path="*">
                     {/* it means catch everyothers routes. if none of the others match this has to match regardless*/}
                    <NotFound />
                </Route>
            </Switch>
            </div>
            </div>
    </React.Fragment>  
    );
}
 
export default Main;