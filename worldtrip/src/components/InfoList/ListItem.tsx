import {
  Flex,
  ListIcon,
  ListItem as ChakraListItem,
  ListItemProps as ChakraListItemProps,
  Text,
} from '@chakra-ui/react';
import { YellowDotIcon } from './Icons';

type ListItemProps = {
  isWideVersion: boolean;
  text: string;
  icon: () => JSX.Element;
} & ChakraListItemProps;

export function ListItem({
  isWideVersion,
  text,
  icon,
  ...props
}: ListItemProps): JSX.Element {
  return (
    <ChakraListItem {...props}>
      <Flex
        direction={isWideVersion ? 'column' : 'row'}
        align="center"
        justify="center">
        {isWideVersion && <ListIcon marginBottom="24px" as={icon} />}
        {!isWideVersion && <ListIcon as={YellowDotIcon} />}
        <Text
          marginTop={{ md: '24px' }}
          fontSize={{ sm: '18px', lg: '24px' }}
          marginLeft={{ sm: '8px', md: '0px' }}
          color="dark.headings"
          fontWeight={600}
          as="span">
          {text}
        </Text>
      </Flex>
    </ChakraListItem>
  );
}
