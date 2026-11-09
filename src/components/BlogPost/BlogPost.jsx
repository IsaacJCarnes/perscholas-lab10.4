import { useParams } from "react-router-dom";
import "./BlogPost.css"
import { posts } from "../../lib/posts";

function BlogPost() {
  const { blogId } = useParams();
  const post = posts.find((value) => value.slug == blogId)
  function displayContent() {
    if(!post){
      return <div>Post not found</div>
    }
    var contentSections = post.content.split("\\");
    var nextClass = "";
    return contentSections.map((section) => {
      if (section == "codeblock") {
        nextClass = "codeblock";
        return <></>;
      }
      const divClass = nextClass
      nextClass = ""
      return <div className={"post " + divClass}>{section}</div>;
    });
  }
  return (
    <div>
      <h3>{post && post.title}</h3>
      <div>{displayContent()}</div>
    </div>
  );
}

export default BlogPost;
