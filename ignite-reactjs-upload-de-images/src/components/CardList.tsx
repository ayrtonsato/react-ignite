import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const modal = useDisclosure();
  // TODO SELECTED IMAGE URL STATE
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const viewImage = (url: string): void | Promise<void> => {
    setSelectedImageUrl(url);
  };

  useEffect(() => {
    if (selectedImageUrl) {
      modal.onOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImageUrl]);

  const onModalClose = (): void => {
    setSelectedImageUrl('');
    modal.onClose();
  };

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing={40}>
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={viewImage} />
        ))}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage
        isOpen={modal.isOpen}
        onClose={onModalClose}
        imgUrl={selectedImageUrl}
      />
    </>
  );
}
