// Requires ffmpeg. Generated assets are committed; deployment does not run this.
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { mkdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";

process.chdir(fileURLToPath(new URL("..", import.meta.url)));
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next"))("sharp");
// Rasterize the path-heavy icon at up to 3x its displayed size.
await sharp("public/Icon/SkillSet/Zustand.svg", { density: 288 })
  .resize(210, 210)
  .webp({ quality: 90 })
  .toFile("public/Icon/SkillSet/Zustand.webp");
const assets = {
  home: "public/movies/Mainvideo.webm",
  projects: "public/movies/UX_Title.webm",
  rabbit: "public/movies/Rabbit_Title.webm",
  mimo: "public/movies/MIMO_Title.webm",
  assembly: "public/Assembly/Assembly_Title.webm",
};
mkdirSync("public/movies/optimized", { recursive: true });
mkdirSync("public/Rabbit/previews", { recursive: true });
for (let i = 1; i <= 4; i++) {
  await sharp(`public/Rabbit/반응형${i}.webp`)
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`public/Rabbit/previews/responsive-${i}.webp`);
}
for (const [name, source] of Object.entries(assets)) {
  const target = `public/movies/optimized/${name}`;
  const png = execFileSync(
    "ffmpeg",
    [
      "-nostdin",
      "-hide_banner",
      "-loglevel",
      "error",
      "-ss",
      "0.5",
      "-i",
      source,
      "-frames:v",
      "1",
      "-vf",
      "scale=960:-1",
      "-f",
      "image2pipe",
      "-c:v",
      "png",
      "pipe:1",
    ],
    { maxBuffer: 8 * 1024 * 1024 },
  );
  await sharp(png).webp({ quality: 75 }).toFile(`${target}.webp`);
  execFileSync("ffmpeg", [
    "-nostdin",
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-i",
    source,
    "-an",
    "-vf",
    "scale=960:-2,fps=24",
    "-c:v",
    "libx264",
    "-preset",
    "fast",
    "-crf",
    "30",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    `${target}.mp4`,
  ]);
  console.log(
    JSON.stringify({
      name,
      originalBytes: statSync(source).size,
      videoBytes: statSync(`${target}.mp4`).size,
      posterBytes: statSync(`${target}.webp`).size,
    }),
  );
}
