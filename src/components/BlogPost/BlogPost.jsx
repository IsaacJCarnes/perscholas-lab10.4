import "./BlogPost.css"

function BlogPost({ title, content }) {
  function displayContent() {
    var contentSections = content.split("\\");
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
      <h3>{title}</h3>
      <div>{displayContent()}</div>
    </div>
  );
}

export default BlogPost;
