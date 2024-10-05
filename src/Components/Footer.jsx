import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/asansubodha",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asan-subodha-madusankha-a717bb27b",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ashan.suboda",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ashansuboda",
  },
];

function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:ashansubodha5@gmail.com"
              label="Start project"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400
                                        transition-colors hover:text-zinc-700"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400
                                        transition-colors hover:text-zinc-700"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img
              src="/src/assets/logo.png"
              width={40}
              height={40}
              alt="Logo"
              className="rounded-3xl"
            />
          </a>
          <p className="text-zinc-700">
            &copy; 2024 <span className="">Asan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
