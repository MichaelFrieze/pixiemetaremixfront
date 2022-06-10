import headerStyles from '~/styles/header.css';

export const links = () => [
  {
    rel: 'stylesheet',
    href: headerStyles,
  },
];

export function Header() {
  return (
    <>
      <div className="logo">Test Styles</div>
      <div className="social-button"></div>
      <nav className="nav-links"></nav>
    </>
  );
}
