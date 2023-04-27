import Error from 'next/error';
import Head from 'next/head';
import { Container } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as DocsLayout } from '../../layouts/docs';
import { ArticleContent } from '../../sections/docs/article-content';
import { getArticle, getArticles } from '../../utils/docs';

export const getStaticPaths = () => {
  const articles = getArticles(['slug']);

  const paths = articles.reduce((acc, article) => {
    if (typeof article.slug !== 'undefined') {
      acc.push({
        params: {
          slug: article.slug
        }
      });
    }

    return acc;
  }, []);

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = (context) => {
  const { slug } = context.params;

  const article = getArticle(slug, ['content', 'slug', 'title']);

  return {
    props: {
      article
    }
  };
};

const Page = (props) => {
  const { article } = props;

  usePageView();

  if (!article) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>
          {`Docs: ${article.title} | Devias Kit PRO`}
        </title>
      </Head>
      <Container
        maxWidth="lg"
        sx={{ pb: '120px' }}
      >
        <ArticleContent content={article.content || ''} />
      </Container>
    </>
  );
};

Page.getLayout = (page) => (
  <DocsLayout>
    {page}
  </DocsLayout>
);

export default Page;
