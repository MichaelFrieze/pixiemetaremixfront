import heroDesktopStyles from '~/styles/desktop/hero.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: heroDesktopStyles,
  },
];

export function Hero() {
  return (
    <>
      <h1>this is hero</h1>
    </>
  );
}
