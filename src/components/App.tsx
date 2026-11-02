const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/' },
  { name: 'YouTube', href: 'https://www.youtube.com/' },
  { name: 'Spotify', href: 'https://open.spotify.com/' },
  { name: 'Bandcamp', href: 'https://bandcamp.com/' }
]

function App() {
  return (
    <div className="min-h-screen bg-[#090909] text-zinc-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-6 p-6 sm:px-10">
        <a
          className="font-serif text-lg font-bold text-white"
          href="#accueil"
          aria-label="Daymon's, accueil"
        >
          DAYMON&apos;S
        </a>
        <nav aria-label="Navigation principale">
          <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em] text-zinc-400 sm:gap-x-8">
            <li>
              <a className="transition-colors hover:text-white" href="#ecouter">
                Écouter
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-white"
                href="#concerts"
              >
                Concerts
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="accueil"
          className="flex min-h-[72vh] flex-col items-center justify-center px-6 pb-20 pt-8 text-center"
        >
          <img
            src="/daymons.jfif"
            alt="Logo de Daymon's"
            className="mb-8 size-52 object-contain sm:size-64"
          />
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-red-500">
            Rouen, France
          </p>
          <h1 className="font-serif text-4xl font-bold text-white sm:text-6xl">
            Daymon&apos;s
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-400 sm:text-base">
            Groupe de métal
          </p>
          <a
            href="#ecouter"
            className="mt-10 border border-zinc-700 px-5 py-3 text-xs uppercase tracking-[0.16em] text-zinc-200 transition-colors hover:border-red-500 hover:text-white"
          >
            Découvrir la musique
          </a>
        </section>

        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <section
            id="ecouter"
            className="border-t border-zinc-800 py-16 sm:py-20"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-red-500">
              01 / Musique
            </p>
            <h2 className="font-serif text-3xl font-bold text-white">
              Écouter
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
              Les morceaux de Daymon&apos;s seront bientôt disponibles ici.
            </p>
          </section>

          <section
            id="concerts"
            className="border-t border-zinc-800 py-16 sm:py-20"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-red-500">
              02 / En live
            </p>
            <h2 className="font-serif text-3xl font-bold text-white">
              Concerts
            </h2>
            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Pas de concert annoncé pour le moment. À bientôt sur scène.
            </p>
          </section>

          <section
            id="contact"
            className="border-t border-zinc-800 py-16 sm:py-20"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-red-500">
              03 / Suivre
            </p>
            <h2 className="font-serif text-3xl font-bold text-white">
              Rester en contact
            </h2>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-300">
              {socialLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    className="underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-red-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name} (lien provisoire)`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="mt-8 inline-block text-sm text-zinc-400 transition-colors hover:text-white"
              href="mailto:axel.duval@gmail.com"
            >
              axel.duval@gmail.com
            </a>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-900 p-6 text-center text-xs text-zinc-600">
        Daymon&apos;s · Rouen
      </footer>
    </div>
  )
}

export default App
