import { Column, Text } from "@la1ch3/ui";

import { NextLink } from ".";

export const PostList = ({ posts }) => (
  <Column gap="huge" align="center">
    <Text size="baseline" weight="bold">
      latest blog posts
    </Text>
    {posts.map((post) => (
      <Column key={post} gap="small" align="center">
        <NextLink href={post.link}>{post.meta.title}</NextLink>
        <Text size="baseline">{post.meta.date}</Text>
      </Column>
    ))}
  </Column>
);
