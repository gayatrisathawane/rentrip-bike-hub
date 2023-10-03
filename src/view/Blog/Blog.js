import './Blog.css'
import Navbar from '../../component/Navbar/Navbar';
import BlogJson from "./../../component/Blog/Blog.json";
import Footer from '../../component/Footer/Footer';
export default function Blog({id}) {
    return (
        <div>
            <Navbar />
            <div className="blog-image">
                <b > <h1 className='blog-text'>Blog</h1></b>
            </div>
            <div className='blog-container'>
                {
                    BlogJson.map((blog, index) => (
                        <div key={index} className='content '>
                            <p>{id}</p>
                            <img src={blog.img} className='image-blog'/>
                            <h2>{blog.title}</h2><br/>
                            <p>{blog.description}</p>
                            <p>{blog.date}</p>
                           <button type='button' value="Read More" className='blog-button px-3 text-li'> Read More</button>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}
