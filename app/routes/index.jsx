import indexStyles from '~/styles/index.css';

export const links = () => [
  {
    rel: 'stylesheet',
    href: indexStyles,
  },
];

export default function IndexRoute() {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <p>Bringing Magic to Everyone’s Life on the Blockchain</p>
    </div>
  );
}
