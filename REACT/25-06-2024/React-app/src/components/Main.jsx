function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3>Sidebar</h3>
        <ul>
          <li>
            <a href="#">LINK</a>
          </li>
          <li>
            <a href="#">LINK</a>
          </li>
          <li>
            <a href="#">LINK</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

function PostItems({ title, content, userId }) {
  return (
    <div className="post-item">
      <h2>{title}</h2>
      <p>{content}</p>
      <h3>User id:{userId}</h3>
    </div>
  );
}

function Main() {
  const posts = [
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque saepe! Nihil quia velit vitae!",
      userId: 1,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque saepe! Nihil quia velit vitae!",
      userId: 2,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque saepe! Nihil quia velit vitae!",
      userId: 3,
    },
  ];
  return (
    <main>
      <Sidebar />
      <section id="post-list" className="post-list">
        {posts.map((post, index) => (
          <PostItem
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </section>
    </main>
  );
}

export { Main };
