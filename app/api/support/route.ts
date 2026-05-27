import { NextResponse } from "next/server";

const SUPPORT_RECIPIENT = process.env.SUPPORT_FORM_RECIPIENT ?? "buildappfactory@gmail.com";

type SupportMessage = {
  name: string;
  email: string;
  platform: "iOS" | "Android" | "Other";
  subject: string;
  message: string;
};

const allowedPlatforms = new Set(["iOS", "Android", "Other"]);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function parseSupportRequest(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as Record<string, unknown>;
  }

  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
}

async function sendSupportMessage(message: SupportMessage) {
  void message;
  void SUPPORT_RECIPIENT;
  // TODO: Wire Resend, SendGrid, Netlify Forms, or another server-side email provider.
  // Keep the support recipient server-side only.
}

export async function POST(request: Request) {
  try {
    const body = await parseSupportRequest(request);
    const platform = clean(body.platform);

    if (!allowedPlatforms.has(platform)) {
      return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
    }

    const supportMessage: SupportMessage = {
      name: clean(body.name),
      email: clean(body.email),
      platform: platform as SupportMessage["platform"],
      subject: clean(body.subject),
      message: clean(body.message),
    };

    if (
      !supportMessage.name ||
      !isEmail(supportMessage.email) ||
      !supportMessage.subject ||
      !supportMessage.message
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendSupportMessage(supportMessage);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send support request" }, { status: 400 });
  }
}
