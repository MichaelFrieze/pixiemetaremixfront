import { Link } from '@remix-run/react';

export const Header = () => {
  return (
    <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
      <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
        <Link to="/" prefetch="intent" className="hover:text-accentCyan">
          Home
        </Link>
        <Link to="/blog" prefetch="intent" className="hover:text-accentCyan">
          Blog
        </Link>
        <Link to="/team" prefetch="intent" className="hover:text-accentCyan">
          Team
        </Link>
      </div>
    </header>
  );
};
