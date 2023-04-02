import React from 'react';
import Link from '@docusaurus/Link';
import Container from './Container';
// import { Menu } from 'lucide-react';

const Logo = require('@site/static/img/seamless-logo-with-text.svg').default;
const GitHubLogo =
  require('@site/static/img/landing-page/github-logo-indigo.svg').default;

export default function Navbar() {
  return (
    <Container>
      <nav className="mt-8 grid grid-cols-12">
        <div className="col-span-11 flex items-center pb-1 lg:col-span-2">
          <Logo className="w-[130px]" role="img" />
        </div>
        <div className="hidden items-center justify-center sm:col-span-8 lg:flex">
          <ul className="mx-auto my-0 flex list-none gap-x-12 rounded-full border border-solid border-stone-300 px-10 py-1.5 text-sm font-semibold shadow-sm">
            <Link
              className="text-stone-700 hover:no-underline"
              to="/case-study"
            >
              Case Study
            </Link>
            <Link
              className="text-stone-700 hover:no-underline"
              to="/presentation"
            >
              Presentation
            </Link>
            <Link
              className="text-stone-700 hover:no-underline"
              to="/api/pipelines"
            >
              API Docs
            </Link>
            <Link className="text-stone-700 hover:no-underline" to="/the-team">
              The Team
            </Link>
          </ul>
        </div>
        <div className="hidden justify-end lg:col-span-2 lg:flex">
          <a href="https://github.com/seamless-cicd" target="_blank">
            <GitHubLogo
              className="block w-[40px] transition-transform hover:scale-110"
              role="img"
            />
          </a>
        </div>
        <div className="col-span-1 flex items-center justify-end lg:hidden ">
          {/* <Menu /> */}
        </div>
      </nav>
    </Container>
  );
}
