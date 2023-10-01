import './Navbar.css'
import logo from './logo-removebg-preview.png'
const Navbar = () =>{
    return(
        <>
        <div>
        <nav class="navbar navbar-expand-lg fs-4 bg-info p-0 text-light">
  <div class="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} className='logo-home'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ">
       
        <li className="nav-item">
          <a className="nav-link active ms-2" aria-current="page" href="tel:8089989881">8089989881</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-5" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="/contact">Contact us </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="/about">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="/support">Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="/login">Login</a>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>

        </div>
        </>
    )
}
export default Navbar;