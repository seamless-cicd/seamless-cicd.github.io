import React from 'react';
import Link from '@docusaurus/Link';
import Container from './Container';

const Logo = require('@site/static/img/seamless-logo-with-text.svg').default;
const GitHubLogo =
  require('@site/static/img/landing-page/github-logo-indigo.svg').default;

export default function Navbar() {
  return (
    <Container>
      <nav className="mt-8 grid grid-cols-12">
        <div className="col-span-3 flex items-center pb-1 sm:col-span-2">
          <Logo className="w-[170px]" role="img" />
        </div>
        <div className="col-span-6 flex items-center justify-center sm:col-span-8">
          <ul className="my-0 mx-auto flex list-none gap-x-12 rounded-full border border-solid border-stone-300 px-12 py-1.5 text-sm font-semibold shadow-sm">
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
        <div className="col-span-3 flex justify-end sm:col-span-2">
          <a href="https://github.com/seamless-cicd" target="_blank">
            <GitHubLogo
              className="block w-[50px] transition-transform hover:scale-110"
              role="img"
            />
          </a>
        </div>
      </nav>
    </Container>
  );
}
