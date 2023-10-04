import './Blog.css'
import Navbar from '../../component/Navbar/Navbar';
import PostCard from "./../../component/PostCard/PostCard";
import blogJson from "./../../component/Blog/Blog.json";
import Footer from '../../component/Footer/Footer';


export default function Blog() {
    return (
        <div>
            <Navbar />
            <div className="blog-image">
                <b > <h1 className='blog-text'>Blog</h1></b>
            </div>

            <div className='blog-container'>

                {
                    blogJson.map((blog, index) => {
                        return <PostCard key={index} id={blog.id} img={blog.img} title={blog.title} description={blog.description}/>
})
                }

            </div>
            <Footer />
        </div>
    )
}
