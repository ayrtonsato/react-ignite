import { useState } from 'react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Link from 'next/link';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import Header from '../components/Header';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({
  postsPagination: { next_page: np, results: rs },
}: HomeProps): JSX.Element {
  const [{ next_page, results }, setPagination] = useState<PostPagination>({
    next_page: np,
    results: rs,
  });

  async function handleLoadContent(): Promise<void> {
    const response = await fetch(next_page);
    const data = await response.json();
    const posts: Post[] = data.results.map(result => {
      return {
        uid: result.uid,
        first_publication_date: result.first_publication_date,
        data: {
          title: result.data.title,
          subtitle: result.data.subtitle,
          author: result.data.author,
        },
      };
    });
    const newResult: Post[] = [...results, ...posts];
    setPagination({ results: newResult, next_page: data.next_page });
  }

  return (
    <>
      <Header />
      <main className={styles.posts}>
        {results.map(result => (
          <div key={result.uid} className={styles.postContainer}>
            <Link href={`/post/${result.uid}`}>
              <a>
                <h2>{result.data.title}</h2>
                <p>{result.data.subtitle}</p>
              </a>
            </Link>
            <div className={styles.postInfo}>
              <span>
                <img src="/images/calendar.svg" alt="calendário" />
                <time>
                  {format(
                    new Date(result.first_publication_date),
                    'dd MMM yyyy',
                    { locale: ptBR }
                  )}
                </time>
              </span>
              <span>
                <img src="/images/user.svg" alt="usuário" />
                <span>{result.data.author}</span>
              </span>
            </div>
          </div>
        ))}
        {next_page && (
          <button
            onClick={handleLoadContent}
            className={styles.loadMoreContent}
            type="button"
          >
            Carregar mais posts
          </button>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'posts'),
  ]);
  const posts: Post[] = postsResponse.results.map(result => {
    return {
      uid: result.uid,
      first_publication_date: result.first_publication_date,
      data: {
        title: result.data.title,
        subtitle: result.data.subtitle,
        author: result.data.author,
      },
    };
  });
  return {
    props: {
      postsPagination: {
        results: posts,
        next_page: postsResponse.next_page,
      },
    },
  };
};
