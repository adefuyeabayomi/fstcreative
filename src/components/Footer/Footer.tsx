import Link from "next/link";

import logoBlue from "../../assets/images/logo-blue.svg";

import "./style.css";

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

const linkClass = "text-none white text-regular";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="col-12 col-md-6 col-lg-3 col-xl-2 no-space">
      <div className="py-4 py-md-0" />
      <div className="footer-contents-container white">
        <h6 className="font-family-quicksand text-semibold">{title}</h6>
        <div className="py-1" />
        <ul className="footer-list text-p text-medium">
          {links.map((link) => (
            <li key={link.label}>
              <Link className={linkClass} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Footer(): React.JSX.Element {
  return (
    <footer className="footer text-center text-lg-left">
      <div className="main-spacing-x">
        <div className="py-4" />
        <div className="container-fluid no-space">
          <div className="row no-space justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 order-last order-xl-first d-md-none d-xl-block">
              <div className="py-4 py-md-0" />
              <div className="footer-logo-container white">
                <div className="w-max-content center">
                  <Link href="/" aria-label="Five and Six Technologies — home">
                    <img
                      src={logoBlue.src}
                      className="footer-logo"
                      alt="Five and Six Technologies"
                    />
                  </Link>
                </div>
                <div className="text-center">
                  <p className="text-semibold">Five and Six Technologies</p>
                  <p className="text-regular">Art & Design</p>
                  <p className="text-regular">Systems & Structure</p>
                  <p className="text-regular">Brilliance & Collaboration</p>
                </div>
              </div>
            </div>
            <div className="col-xl-1 d-none d-xl-block"></div>

            <FooterColumn title="Explore" links={exploreLinks} />
            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Design School" links={designSchoolLinks} />
          </div>
        </div>
      </div>

      <div className="py-4" />
    </footer>
  );
}
