import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Nav() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="
            text-sm font-medium text-muted-foreground
            hover:text-foreground
            transition-colors
          "
        >
          {link.label}
        </Link>
      ))}

      <Link
        href="/contato"
        className="
          rounded-full bg-primary px-5 py-2 text-sm font-semibold
          text-primary-foreground
          hover:opacity-90
          transition
        "
      >
        Falar conosco
      </Link>
    </nav>
  );
}
