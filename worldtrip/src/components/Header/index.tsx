import { FlexContainer } from '../FlexContainer';
import { Logo } from './Logo';

export function Header() {
  return (
    <FlexContainer
      width="100%"
      height={['50px', '100px']}
      as="header"
      align="center"
      justifyContent="center">
      <Logo />
    </FlexContainer>
  );
}
