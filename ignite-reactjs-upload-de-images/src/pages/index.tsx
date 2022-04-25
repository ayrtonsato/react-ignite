import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { fetchImages, ImageInfoResponse } from '../services/fetchImages';

type FormattedData = ImageInfoResponse[];

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    // TODO AXIOS REQUEST WITH PARAM
    fetchImages,
    // TODO GET AND RETURN NEXT PAGE PARAM
    {
      getNextPageParam: lastPage => {
        if (lastPage.after) {
          return lastPage.after;
        }
        return null;
      },
    }
  );

  const formattedData: FormattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    if (data) {
      const newData = data.pages.map(page => page.data).flat();
      return newData;
    }
    return [];
  }, [data]);

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        {isLoading && <Loading />}
        {isError && <Error />}
        {!isLoading && !isError && <CardList cards={formattedData} />}

        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {!isFetchingNextPage ? 'Carregar mais' : 'Carregando...'}
          </Button>
        )}
      </Box>
    </>
  );
}
