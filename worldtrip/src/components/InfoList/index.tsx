import { List, ListIcon, Text, useBreakpointValue } from '@chakra-ui/react';
import { FlexContainer } from '../FlexContainer';
import {
  BeachIcon,
  ClassicBuildingIcon,
  DrinkIcon,
  ModernBuildingIcon,
  WorldIcon,
} from './Icons';
import { ListItem } from './ListItem';

export function InfoList(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <List as="ul" marginTop={{ base: '16px', md: '80px', lg: '116px' }}>
      <FlexContainer
        flexWrap="wrap"
        align="self-start"
        justifyContent="space-between">
        <ListItem
          flex={{ base: '50%', md: '1' }}
          isWideVersion={!!isWideVersion}
          icon={DrinkIcon}
          text="vida noturna"
        />
        <ListItem
          flex={{ base: '50%', md: '1' }}
          isWideVersion={!!isWideVersion}
          icon={BeachIcon}
          text="praia"
        />
        <ListItem
          marginTop={{ base: '25px', md: '0px' }}
          flex={{ base: '50%', md: '1' }}
          isWideVersion={!!isWideVersion}
          icon={ModernBuildingIcon}
          text="moderno"
        />
        <ListItem
          flex={{ base: '50%', md: '1' }}
          marginTop={{ base: '25px', md: '0px' }}
          isWideVersion={!!isWideVersion}
          icon={ClassicBuildingIcon}
          text="clássico"
        />
        <ListItem
          marginTop={{ base: '25px', md: '0px' }}
          flex={{ base: '50%', md: '1' }}
          isWideVersion={!!isWideVersion}
          icon={WorldIcon}
          text="e mais..."
        />
      </FlexContainer>
    </List>
  );
}
