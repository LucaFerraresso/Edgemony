import "./Main.css";
import posts from "../../data.json";

function Main(props) {
  const { children, ...attrs } = props;

  console.log("props", props);
  console.log("children", children);
  console.log("attrs", attrs);

  //console.log("dentro main", posts);

  return (
    <main {...attrs}>
      <div className="article-container">
        <Article />
      </div>
    </main>
  );
}

function Article() {
  const article = posts.slice(0, 10);
  console.log("dentro article", article);
  return (
    <article className="article">
      {article.map((article) => (
        <ArticleItem
          key={article.id}
          title={article.title}
          body={article.body}
          id={article.id}
        />
      ))}
    </article>
  );
}

function ArticleItem(article) {
  return (
    <div className="card">
      <h1>Title:{article.title}</h1>
      <p>Description:{article.body}</p>
      <h2>User Id:{article.id}</h2>
    </div>
  );
}

export { Main };
