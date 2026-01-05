// app/api/feedback/route.ts
export const runtime = "edge";

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL!;

export async function POST(req: Request) {
  const { feedback } = await req.json();

  if (!feedback) {
    return new Response("invalid", { status: 400 });
  }

  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `📝 새 피드백\n내용: ${feedback}`,
    }),
  });

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
