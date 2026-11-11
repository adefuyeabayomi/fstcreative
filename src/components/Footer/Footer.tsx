import Link from "next/link";
import logoWhite from "../../assets/images/logo-white.svg";
import { widthControlClass } from "@/styles/widthControl";
import { cn } from "@/lib/cn";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const serviceLinks = [
  { label: "Branding & Identity Design", href: "/pricing#branding" },
  { label: "Creative Graphics Design", href: "/pricing#creativeGraphicsDesign" },
  { label: "UI/UX Design", href: "/pricing#uiUxDesign" },
  { label: "Web Development", href: "/pricing#webDevelopment" },
];

const companyLinks = [
  { label: "Why Five & Six", href: "/#section-2" },
  { label: "Bootcamps", href: "/bootcamps" },
  { label: "Request a Quote", href: "/quotation-request" },
  { label: "Contact", href: "/#contact" },
];

const designSchoolLinks = [
  { label: "All Bootcamps", href: "/bootcamps" },
  { label: "Register for a Bootcamp", href: "/bootcamp-registration" },
  { label: "Apply for a Job", href: "/fst-careers-apply" },
];

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
  className?: string;
}) {
  return (
    <div className={className}>
      <h6 className="font-quicksand text-sm font-semibold text-white">{title}</h6>
      <ul className="mt-4 list-none space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-slate-300 no-underline transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-royal-ink text-white">
      <div className={cn(widthControlClass, "py-12 lg:py-16")}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="rounded-container border border-white/10 bg-white/[0.03] p-6 text-center">
              <Link href="/" aria-label="Five and Six Technologies — home">
                <img
                  src={logoWhite.src}
                  alt="Five and Six Technologies"
                  className="mx-auto w-[200px] object-contain"
                />
              </Link>
              <p className="mt-4 text-sm font-semibold">Five and Six Technologies</p>
              <p className="mt-1 text-xs text-slate-400">Art &amp; Design</p>
              <p className="text-xs text-slate-400">Systems &amp; Structure</p>
              <p className="text-xs text-slate-400">Brilliance &amp; Collaboration</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <FooterColumn title="Explore" links={exploreLinks} />
            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Design School" links={designSchoolLinks} />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-400 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Five and Six Technologies. All rights
            reserved.
          </p>
          <p className="mt-2 sm:mt-0">Art &amp; Design · Systems &amp; Structure</p>
        </div>
      </div>
    </footer>
  );
}
