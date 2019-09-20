import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import { Layout, Article, Wrapper, SectionTitle } from "../components";

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`;

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges }
  }
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1>Hi!</h1>
        <p>
          I am Bouwe, an enthusiastic and experienced software engineer at{" "}
          <a href="https://newnexus.nl">New Nexus</a> in the Groningen area, The
          Netherlands.
        </p>
        <p>
          Besides my daily job of developing .NET applications in C#, I am
          learning <Link to="/react">React.js</Link> by{" "}
          <Link to="/categories/workshops">teaching it to others</Link>.
        </p>
        <p>
          You can contact me on <a href="https://twitter.com/bouwe">Twitter</a>{" "}
          or find my code on <a href="https://github.com/bouwe77">GitHub</a>.
        </p>
      </Hero>
      <Content>
        <SectionTitle>Latest blog posts</SectionTitle>
        {postEdges.slice(0, 3).map(post => (
          <Article
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            categories={post.node.frontmatter.categories}
            key={post.node.fields.slug}
          />
        ))}
        Or check out my other blog posts on the{" "}
        <Link to="/categories">Categories</Link> page.
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
};

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
