import { appConfig } from "@/lib/app-config";

export function PhoneFrame() {
  return (
    <div className="phone-stage" aria-label="UV Guard home screen preview">
      <div className="phone-shell">
        <img
          className="phone-screen"
          src={appConfig.screenshotPath}
          alt="UV Guard home screen showing San Francisco UV forecast"
        />
      </div>
    </div>
  );
}
