import Link from "next/link";
import { appConfig } from "@/lib/app-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link className="footer-brand" href="/">
            {appConfig.appName}
          </Link>
          <p>UV index, sun exposure tracking, tanning sessions, and reminders.</p>
        </div>
        <nav aria-label="Footer">
          <Link href={appConfig.privacyPath}>Privacy</Link>
          <Link href={appConfig.termsPath}>Terms</Link>
          <Link href={appConfig.supportPath}>Support</Link>
        </nav>
        <p className="copyright">© 2026 App Factory Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
