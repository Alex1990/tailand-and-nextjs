import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Head>
        <title>XProject</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4 max-w-screen-xl flex justify-between items-center">
          <h1>
            <Link href="/">
              <a>XProject</a>
            </Link>
          </h1>
          <div className="flex justify-between items-center">
            <nav>
              <ul className="flex items-center">
                <li>
                  <Link href="/">
                    <a className="block px-6 py-4 border-b-2 border-transparent hover:border-black dark:hover:border-white transition-colors">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a className="block px-6 py-4 border-b-2 border-transparent hover:border-black dark:hover:border-white transition-colors">Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/download">
                    <a className="block px-6 py-4 border-b-2 border-transparent hover:border-black dark:hover:border-white transition-colors">Download</a>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* <div>
              <label>
                <input type="checkbox"></input>
                {' '}Dark Mode
              </label>
            </div> */}
          </div>
        </div>
      </header>
      <div className="my-4 py-8">
        <h2 className="my-4 text-4xl text-center dark:text-white">XProject</h2>
        <p className="my-2 text-lg text-center text-gray-500 dark:text-gray-300">A demo of TailwindCSS and Next.js App</p>
        <div className="my-8 flex justify-center">
          <button className="mx-4 px-8 py-3 text-xl border border-black border-solid rounded hover:bg-gray-100 transition-colors dark:border-white dark:text-white dark:hover:bg-gray-900">Download</button>
          <button className="mx-4 px-8 py-3 text-xl bg-black text-white border border-black border-solid rounded hover:bg-gray-700 transition-colors dark:bg-white dark:border-white dark:text-black dark:hover:bg-gray-100">Buy Now</button>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-screen-xl flex flex-col">
        <div className="my-10 lg:w-4/5">
          <h2 className="my-2 text-red-500">CONSTRAINT-BASED</h2>
          <p className="my-4 text-5xl dark:text-white">An API for your design system.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.</p>
        </div>
        <div className="my-10 lg:w-4/5 lg:self-end lg:text-right">
          <h2 className="my-2 text-yellow-500">BUILD ANYTHING</h2>
          <p className="my-4 text-5xl dark:text-white">Build whatever you want, seriously.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.</p>
        </div>
        <div className="my-10 lg:w-4/5">
          <h2 className="my-2 text-green-500">PERFORMANCE</h2>
          <p className="my-4 text-5xl dark:text-white">It’s tiny in production.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10KB of CSS to the client.</p>
        </div>
        <div className="my-10 lg:w-4/5 lg:self-end lg:text-right">
          <h2 className="my-2 text-blue-500">MOBILE-FIRST</h2>
          <p className="my-4 text-5xl dark:text-white">Responsive everything.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">Wrestling with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.</p>
          <p className="text-lg text-gray-500 dark:text-gray-300">Throw a screen size in front of literally any utility class and watch it magically apply at a specific breakpoint.</p>
        </div>
        <div className="my-10 lg:w-4/5">
          <h2 className="my-2 text-indigo-500">STATE VARIANTS</h2>
          <p className="my-4 text-5xl dark:text-white">Hover and focus states? We got ’em.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">Want to style something on hover? Stick hover: at the beginning of the class you want to add. Works for focus, active, disabled, focus-within, focus-visible, and even fancy states we invented ourselves like group-hover.</p>
        </div>
        <div className="my-10 lg:w-4/5 lg:self-end lg:text-right">
          <h2 className="my-2 text-purple-500">COMPONENT-DRIVEN</h2>
          <p className="my-4 text-5xl dark:text-white">Worried about duplication? Don’t be.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">If you're repeating the same utilities over and over and over again, all you have to do is extract them into a component or template partial and boom — you've got a single source of truth so you can make changes in one place.</p>
        </div>
        <div className="my-10 lg:w-4/5">
          <h2 className="my-2 text-pink-500">DARK MODE</h2>
          <p className="my-4 text-5xl dark:text-white">Now with Dark Mode.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">Don’t want to be one of those websites that blinds people when they open it on their phone at 2am? Enable dark mode in your configuration file then throw dark: in front of any color utility to apply it when dark mode is active. Works for background colors, text colors, border colors, and even gradients.</p>
        </div>
        <div className="my-10 lg:w-4/5 lg:self-end lg:text-right">
          <h2 className="my-2 text-red-500">CUSTOMIZATION</h2>
          <p className="my-4 text-5xl dark:text-white">Extend it, tweak it, change it.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">Tailwind includes an expertly crafted set of defaults out-of-the-box, but literally everything can be customized — from the color palette to the spacing scale to the box shadows to the mouse cursor.</p>
          <p className="text-lg text-gray-500 dark:text-gray-300">Use the tailwind.config.js file to craft your own design system, then let Tailwind transform it into your own custom CSS framework.</p>
        </div>
        <div className="my-10 lg:w-4/5">
          <h2 className="my-2 text-yellow-500">MODERN FEATURES</h2>
          <p className="my-4 text-5xl dark:text-white">Cutting-edge is our comfort zone.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">Tailwind is unapologetically modern, and takes advantage of all the latest and greatest CSS features to make the developer experience as enjoyable as possible.</p>
          <p className="text-lg text-gray-500 dark:text-gray-300">We've got first-class CSS grid support, composable transforms and gradients powered by CSS variables, support for modern state selectors like :focus-visible, and tons more.</p>
        </div>
        <div className="my-10 lg:w-4/5 lg:self-end lg:text-right">
          <h2 className="my-2 text-green-500">EDITOR TOOLS</h2>
          <p className="my-4 text-5xl dark:text-white">World-class IDE integration.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">Worried about remembering all of these class names? The Tailwind CSS IntelliSense extension for VS Code has you covered.</p>
          <p className="text-lg text-gray-500 dark:text-gray-300">Get intelligent autocomplete suggestions, linting, class definitions and more, all within your editor and with no configuration required.</p>
        </div>
        <div className="my-10 lg:w-4/5">
          <h2 className="my-2 text-blue-500">READY-MADE COMPONENTS</h2>
          <p className="my-4 text-5xl dark:text-white">Move even faster with Tailwind UI.</p>
          <p className="my-6 text-lg text-gray-500 dark:text-gray-300">Tailwind UI is a collection of beautiful, fully responsive UI components, designed and developed by us, the creators of Tailwind CSS. It's got hundreds of ready-to-use examples to choose from, and is guaranteed to help you find the perfect starting point for what you want to build.</p>
        </div>
      </div>
      <footer className="py-8 bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <ul className="flex justify-between flex-wrap">
            <li className="my-4 w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-sm dark:text-white">GETTING STARTED</h2>
              <ul className="text-gray-500">
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Installation</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Release Notes</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Upgrade Guide</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Using with Preprocessors</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Optimizing for Production</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Browser Support</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">IntelliSense</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="my-4 w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-sm dark:text-white">CORE CONCEPTS</h2>
              <ul className="text-gray-500">
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Utility-First</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Responsive Design</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Hover, Focus, & Other States</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Dark Mode</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Adding Base Styles</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Extracting Components</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Adding New Utilities</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Functions & Directives</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="my-4 w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-sm dark:text-white">CUSTOMIZATION</h2>
              <ul className="text-gray-500">
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Configuration</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Theme Configuration</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Breakpoints</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Customizing Colors</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Customizing Spacing</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Configuring Variants</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Plugins</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Presets</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="my-4 w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-sm dark:text-white">COMMUNITY</h2>
              <ul className="text-gray-500">
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Github</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Discord</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Twitter</a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/">
                    <a className="hover:text-gray-700 dark:hover:text-gray-300">Youtube</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
