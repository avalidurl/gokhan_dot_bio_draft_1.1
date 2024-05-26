import Link from 'next/link'
import '../global.css'; // Ensure this path is correct

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/philosophy': {
    name: 'philosophy',
  },
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Navbar() {
  const additionalLinks = [
    { href: '/rss', name: 'rss' },
    { href: 'https://icebreaker.xyz/gokhan', name: 'Socials' },
    { href: 'https://www.farcaster.id/gokhan.eth', name: 'Farcaster' },
  ]

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 mb-4">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isExternal = path === '/philosophy';
              const href = isExternal ? 'https://hypersub.withfabric.xyz/collection/philosophy-e8teejxdfy80?referrer=0x36de990133d36d7e3df9a820aa3ede5a2320de71' : path;
              return (
                <Link
                  key={path}
                  href={href}
                  className="solarized-hover transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            {additionalLinks.map(({ href, name }) => (
              <li key={href}>
                <a
                  className="solarized-hover flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={href}
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">{name}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
