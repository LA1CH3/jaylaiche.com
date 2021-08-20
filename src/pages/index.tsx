import { AppLayout, PostList } from "../components";
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
  <AppLayout home>
    <PostList posts={posts} />
  </AppLayout>
);

export default Index;
