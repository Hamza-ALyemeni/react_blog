import { Link } from "react-router-dom";

// const BlogList = ({Blogs , title , handleDelete}) =>{} 
const BlogList = (props) => {
    const Blogs = props.Blogs;
    const title = props.title;
    // const handleDelete = props.handleDelete;

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {Blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                   <Link to={`/blogs/${blog.id}`}> 
                     <h2>{ blog.title}</h2>
                     <p>Written by {blog.author}</p>
                   </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;