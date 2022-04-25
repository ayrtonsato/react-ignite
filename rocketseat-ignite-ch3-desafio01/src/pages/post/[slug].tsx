import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';
import ptBR from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';

import { Banner } from '../../components/Banner';
import Header from '../../components/Header';
import { PostInfo, PostInfoContainer } from '../../components/PostInfo';

import { getPrismicClient } from '../../services/prismic';

import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  uid?: string;
  data: {
    title: string;
    subtitle?: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        type: string;
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

function getReadingTime(text: string): number {
  return Math.ceil(text.split(' ').length / 200);
}

export default function Post({ post }: PostProps): JSX.Element {
  const router = useRouter();
  const readingTime = getReadingTime(
    post.data.content.map(content => RichText.asText(content.body)).join(' ')
  );

  const value = router.isFallback ? (
    <h1>Carregando...</h1>
  ) : (
    <>
      <Header />
      <Banner url={post.data.banner.url} alt="Banner representando o texto" />
      <main className={styles.mainContainer}>
        <h1 className={styles.postTitle}>{post.data.title}</h1>
        <PostInfoContainer>
          <PostInfo image={{ src: '/images/calendar.svg', alt: 'calendário' }}>
            <time>
              {format(new Date(post.first_publication_date), 'dd MMM yyyy', {
                locale: ptBR,
              })}
            </time>
          </PostInfo>
          <PostInfo image={{ src: '/images/user.svg', alt: 'usuário' }}>
            <span>{post.data.author}</span>
          </PostInfo>
          <PostInfo image={{ src: '/images/clock.svg', alt: 'usuário' }}>
            <span>{readingTime} min</span>
          </PostInfo>
        </PostInfoContainer>
        <article>
          {post.data.content.map(content => (
            <div key={content.heading}>
              <h2>{content.heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(content.body),
                }}
              />
            </div>
          ))}
        </article>
      </main>
    </>
  );

  return value;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {
      fetch: ['posts.title', 'posts.content'],
      pageSize: 10,
    }
  );
  return {
    paths: posts.results.map(result => ({
      params: {
        slug: result.uid,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('posts', String(slug), {});
  const post: Post = {
    first_publication_date: response.first_publication_date,
    uid: response.uid,
    data: {
      title: response.data.title,
      subtitle: response.data.subtitle,
      banner: {
        url: response.data.banner.url,
      },
      author: response.data.author,
      content: response.data.content,
    },
  };

  return {
    props: {
      post,
    },
  };
};
