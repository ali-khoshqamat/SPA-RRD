import { Link, useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const Blog = () => {
  const { search } = useLocation();
  const { id } = useParams(); // => http request => axios.get('/blogs/id')

  console.log(search);
  const query = queryString.parse(search); // => http request
  console.log(query);

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
