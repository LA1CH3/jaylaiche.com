import { PageLayout } from "../components";
import { getAllPosts } from "../util/getAllPosts";

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

const Index = ({ posts }) => (
  <PageLayout>
    {posts.map((post) => (
      <>
        <div>{post.link}</div>
        <div>{post.meta.title}</div>
      </>
    ))}
  </PageLayout>
);

export default Index;
