import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  const id = params.id; // => http request => axios.get('/blogs/id')
  return (
    <div className="flex flex-col justify-between h-full">
      <h2>Blog Detail - {id}</h2>
      <Link to={`/blogs/${parseInt(id) + 1}`} className="text-red-600">
        go to Next Blog page!
      </Link>
      <Link to="/blogs" className="text-red-600">
        go to Blogs page!
      </Link>
    </div>
  );
};

export default Blog;
