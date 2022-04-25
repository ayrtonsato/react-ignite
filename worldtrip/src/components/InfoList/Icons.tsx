import { Image } from '@chakra-ui/react';

type IconProps = {
  src: string;
  alt: string;
};

function Icon({ src, alt }: IconProps) {
  return <Image width="85px" height="85px" src={src} alt={alt} />;
}

export function DrinkIcon() {
  return (
    <Icon
      src="/images/icons/drink.svg"
      alt="imagem representando a vida noturna (drink)"
    />
  );
}

export function BeachIcon() {
  return (
    <Icon
      src="/images/icons/beach.svg"
      alt="imagem representando uma praia"
    />
  );
}

export function ModernBuildingIcon() {
  return (
    <Icon
      src="/images/icons/modern-building.svg"
      alt="imagem representando um prédio moderno"
    />
  );
}

export function ClassicBuildingIcon() {
  return (
    <Icon
      src="/images/icons/classic-building.svg"
      alt="imagem representando um prédio clássico"
    />
  );
}

export function WorldIcon() {
  return <Icon src="/images/icons/world.svg" alt="imagem do globo" />;
}

export function YellowDotIcon() {
  return (
    <Image
      width="8px"
      height="8px"
      src="/images/icons/yellow-dot.svg"
      alt={''}
    />
  );
}
