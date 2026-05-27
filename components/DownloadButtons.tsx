import { appConfig } from "@/lib/app-config";

export function DownloadButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "download-actions compact" : "download-actions"}>
      <a className="download-button primary" href={appConfig.iosUrl}>
        Download on the App Store
      </a>
      <a className="download-button secondary" href={appConfig.androidUrl}>
        Get it on Google Play
      </a>
    </div>
  );
}
