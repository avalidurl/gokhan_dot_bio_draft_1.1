export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://gokhan.fkey.id/"
          >
            Buy Me a Cup of Onchain Coffee
          </a>
        </li>
      </ul>
      <p className="text-xs mt-2 text-neutral-600 dark:text-neutral-300">We neither host nor share any information provided by our prospective and current readers. Please check with the provided <a href="https://mailchimp.com/legal/" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-800 dark:hover:text-neutral-100">Mailchimp privacy notice</a> on the external signup page.</p>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
