const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1> the Dojo Blog</h1>
        <div className="links">
            <a herf="/">Home</a>
            <a herf="/create" style={{ 
                color:"white",
                backgroundColor:"#f1356d",
                borderRadius:"8px" 
            }}>New Blog</a>
        </div>
        </nav>
     );
}
 
export default Navbar;