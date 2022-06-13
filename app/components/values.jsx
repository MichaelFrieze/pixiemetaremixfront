import valuesDesktopStyles from '~/styles/desktop/values.css';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: valuesDesktopStyles,
  },
];

export function Values() {
  return (
    <>
      <h1>Our Values Component</h1>
    </>
  );
}
