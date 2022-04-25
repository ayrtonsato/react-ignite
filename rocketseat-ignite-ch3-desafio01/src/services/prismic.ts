import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

const PRISMIC_URL = process.env.PRISMIC_API_ENDPOINT;

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(PRISMIC_URL, {
    req,
  });

  return prismic;
}
