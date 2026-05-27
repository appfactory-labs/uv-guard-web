import Link from "next/link";
import { appConfig } from "@/lib/app-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand-link" href="/" aria-label="UV Guard home">
          <img src={appConfig.iconPath} alt="" className="brand-icon" />
          <span>{appConfig.appName}</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href={appConfig.privacyPath}>Privacy</Link>
          <Link href={appConfig.termsPath}>Terms</Link>
          <Link href={appConfig.supportPath}>Support</Link>
        </nav>
      </div>
    </header>
  );
}
