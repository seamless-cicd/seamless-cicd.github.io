import React from 'react';
import Layout from '@theme/Layout';

const team = [
  {
    name: 'Ethan Weiner',
    image: 'ethan.svg',
    website: 'https://github.com/ethanjweiner',
    github: 'https://github.com/ethanjweiner',
    linkedin: 'https://www.linkedin.com/in/ethan-weiner/',
    email: 'dev@ejweiner.com',
  },
  {
    name: 'Jason Wang',
    image: 'jason.png',
    website: 'https://github.com/jasonherngwang',
    github: 'https://github.com/jasonherngwang',
    linkedin: 'https://www.linkedin.com/in/jason-wang-p-e-159194b/',
    email: 'jasonherngwang@gmail.com',
  },
  {
    name: 'Ryan DeJonghe',
    image: 'ryan.svg',
    website: 'https://github.com/RDeJonghe',
    github: 'https://github.com/RDeJonghe',
    linkedin: 'https://github.com/RDeJonghe',
    email: 'ryan.paul.dejonghe@gmail.com',
  },
];

export default function Team() {
  return (
    <Layout title="The Team" description="The Team">
      <div className="mx-auto w-full max-w-4xl px-8 py-8 text-center sm:py-24">
        <h1 className="text-[32px] sm:text-5xl">The Team</h1>
        <p className="mx-auto mb-0 mt-4 max-w-sm text-lg sm:mt-8 sm:text-2xl md:max-w-lg lg:max-w-none">
          We are looking for opportunities. If you like our project, feel free
          to reach out!
        </p>
        <div className="mt-0 grid grid-cols-1 sm:mt-4 sm:grid-cols-3">
          {team.map((member) => (
            <div className="mt-4 flex flex-col items-center p-4">
              <img
                src={`/img/team/${member.image}`}
                alt={member.name}
                className="mb-4 mt-4 block w-11/12 max-w-[200px] rounded-full"
              />
              <h3 className="mb-3 mt-3 text-center text-2xl sm:text-lg md:text-2xl">
                {member.name}
              </h3>
              <div className="flex gap-3">
                <a
                  href={member.website}
                  target="_blank"
                  className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-world"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M3.6 9h16.8"></path>
                    <path d="M3.6 15h16.8"></path>
                    <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                    <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                  </svg>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-github"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-linkedin"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
