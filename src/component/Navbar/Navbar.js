import './Navbar.css'
import logo  from './logo-rentrip.png'
const Navbar =() =>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-dark sticky-top p-3 fs-4 nav1 ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} className='logoimg'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-lg-auto">
        <li class="nav-item">
          <a class="nav-link text-light " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-light" href="/blog">Blog</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link text-light" href="/faq">FAQ</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link text-light " href="/review">Review</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link text-light" to="/contact">Contact</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link text-light" to="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>

    )
}
export default Navbar;