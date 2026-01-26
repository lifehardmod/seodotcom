export const runtime = "nodejs";
export const preferredRegion = "icn1";

export async function POST(req: Request) {
  const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
  
  // Vercel 리전 정보 로깅
  const region = process.env.VERCEL_REGION || "unknown";
  const deploymentUrl = process.env.VERCEL_URL || "unknown";
  
  console.log("Vercel Region:", region);
  console.log("Vercel Deployment URL:", deploymentUrl);
  console.log("Preferred Region:", "icn1");

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
      content: `새 피드백\n리전: ${region}\n내용: ${feedback}`,
    }),
  });

  return Response.json({ 
    ok: true,
    region,
    deploymentUrl,
  });
}
