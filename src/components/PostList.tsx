import { Column, Text } from "@la1ch3/ui";

import { NextLink, AppWidth } from ".";
import { formatDate } from "../util/date";

export const PostList = ({ posts }) => (
  <AppWidth>
    <Column gap="huge" align="center" css={{ textAlign: "center" }}>
      <Text size="large" weight="bold">
        latest blog posts
      </Text>
      {posts.map((post) => (
        <Column key={post.meta.title} gap="small" align="center">
          <NextLink href={post.link}>{post.meta.title}</NextLink>
          <Text size="baseline">{formatDate(post.meta.date)}</Text>
        </Column>
      ))}
    </Column>
  </AppWidth>
);
