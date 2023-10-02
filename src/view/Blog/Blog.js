import './Blog.css'
import BlogJson from "./../../component/Blog/Blog.json";

export default function Blog({ id, title, travel, date, name }) {
    return (


        <div>

            {
                BlogJson.map((blog, index) => (
            <div key={index}>
                <h2>{blog.title}</h2>
                <p>{blog.date}</p>
                <h3>{blog.travel}</h3>
                <h2>{blog.name}</h2>

            </div>
            ))
          }
            <BlogJson id={id} title={title} travel={travel} date={date} name={name} />
        </div>

    )

}
