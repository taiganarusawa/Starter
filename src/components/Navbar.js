const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Twisted's Blogs</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="linksbuttonBackground">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;