const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src="/images/logo.png" className="App-logo" alt="logo" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/home">Home</a>
                </li>
                <span></span>
                <li class="nav-item">
                    <a class="nav-link" href="/visitors">Visitors</a>
                </li>
                <span></span>
                <li class="nav-item">
                    <a class="nav-link" href="about">About Us</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;