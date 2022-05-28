import { Header } from '~/components/header';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        {children}
      </div>
    </div>
  );
};
