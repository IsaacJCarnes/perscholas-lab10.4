import { posts } from "../../lib/posts";
import { Link } from "react-router-dom";
function BlogList({}) {
  return (
    <ul>
      {posts.map((value) => (
        <li id={value.id}>
          <Link  to={`/blog/${value.slug}`}>
            {value.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;
