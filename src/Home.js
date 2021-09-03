import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // const [name, setName] = useState('nobody');
     
    //  const handleDelete = (id) =>
    //  {
    //     const newBlogs = Blogs.filter(blog => blog.id !== id );
    //     setBlogs(newBlogs); 
    //  }

    const {data:Blogs ,isPending , error} = useFetch('http://localhost:8000/blogs/');
    return (  
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {Blogs && <BlogList Blogs={Blogs} title="All Blogs!" />}
            {/* <BlogList Blogs={Blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/> */}
        </div>
    );
}
 
export default Home;