import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        maxWidth="900px"
        maxHeight="auto"
        backgroundColor="gray.800"
      >
        <ModalBody padding={0}>
          <Image
            maxWidth="900px"
            maxHeight="600px"
            padding={0}
            width="100%"
            height="auto"
            src={imgUrl}
          />
        </ModalBody>
        <ModalFooter
          padding="10px"
          margin={0}
          height="32px"
          justifyContent="flex-start"
        >
          <Link
            fontWeight={400}
            fontSize="14px"
            lineHeight="16px"
            href={imgUrl}
            position="relative"
            alignSelf="self-start"
            isExternal
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
