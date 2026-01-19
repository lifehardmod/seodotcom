export const runtime = "nodejs";
export const preferredRegion = "icn1";

export async function POST(req: Request) {
  const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

  if (!WEBHOOK_URL) {
    return new Response("Webhook not configured", { status: 500 });
  }

  const { feedback } = await req.json();

  if (!feedback || !feedback.trim()) {
    return new Response("invalid", { status: 400 });
  }

  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `새 피드백\n내용: ${feedback}`,
    }),
  });

  return Response.json({ ok: true });
}
