import { posts } from "../../lib/posts";
import { Link } from "react-router-dom";
function BlogList({}) {
  return (
    <div id="BlogPage">
      <div className="list-header">React Hooks</div>
      <ul id="BlogList">
        {posts.map((value) => (
          <li id={value.id}>
            <Link to={`/blog/${value.slug}`}>{value.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
