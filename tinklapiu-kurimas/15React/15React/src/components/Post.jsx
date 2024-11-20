import PostContent from "./PostContent";

export default function PostsList() {
  const posts = [
    {
      title: "HTML",
      content: "Lorem ipsum HTML",
      img: "https://picsum.photos/id/123/200/200",
    },
    {
      title: "CSS",
      content: "Lorem ipsum CSS",
      img: "https://picsum.photos/id/237/200/200",
    },
    {
      title: "JavaScript",
      content: "Lorem ipsum Javascript",
      img: "https://picsum.photos/id/222/200/200",
    },
  ];

  const list = posts.map((post) => {
    return (
      <PostContent
        title={post.title}
        content={post.content}
        img={post.img} />
    );
  });
  return <div>{list}</div>;
}
