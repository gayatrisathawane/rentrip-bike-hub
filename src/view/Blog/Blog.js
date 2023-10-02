import './Blog.css'
import Navbar from '../../component/Navbar/Navbar';
import BlogJson from "./../../component/Blog/Blog.json";
import Footer from '../../component/Footer/Footer';

export default function Blog({ id, title, travel, date, name }) {
    return (
        <div>
            <Navbar />
            <div className='blog-container'>
                {
                    BlogJson.map((blog, index) => (
                        <div key={index} className='content '>
                            <h2>{blog.title}</h2>
                            <p>{blog.date}</p>
                            <h3>{blog.travel}</h3>
                            <h2>{blog.name}</h2>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}
