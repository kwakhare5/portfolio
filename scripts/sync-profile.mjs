import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Dynamically import DATA from resume.ts via file:// URL for Windows ESM support
const resumePath = path.join(rootDir, "src/data/resume.ts");
const resumeModule = await import(pathToFileURL(resumePath).href);
const { DATA } = resumeModule;

// Target path to local GitHub profile README
const defaultProfileDir = path.resolve(rootDir, "../Github Profile");
const profileReadmePath = process.env.GITHUB_PROFILE_PATH || path.join(defaultProfileDir, "README.md");

if (!fs.existsSync(profileReadmePath)) {
  console.warn(`[sync:profile] Profile README not found at: ${profileReadmePath}`);
  console.warn(`[sync:profile] You can specify GITHUB_PROFILE_PATH if located elsewhere.`);
  process.exit(0);
}

// Build the "Selected Work" list directly from DATA.featuredProjects
const selectedWorkMarkdown = DATA.featuredProjects
  .map((project) => {
    const targetUrl = project.liveUrl || project.githubUrl || DATA.url;
    const topStack = project.stack.slice(0, 3).map((s) => `\`${s}\``).join(", ");
    return `- **[${project.title}](${targetUrl})** (${topStack}) — ${project.oneLiner}`;
  })
  .join("\n");

// Build the "Stack & Tooling" list directly from DATA.coreStack
const stackMarkdown = DATA.coreStack
  .map((group) => `- **${group.category}:** ${group.items.join(", ")}`)
  .join("\n");

const bioText = DATA.bio.join("<br/>\n");

const content = `<div align="center">

<a href="${DATA.url}">
  <img src="./me.webp" width="96" height="96" alt="${DATA.name}" />
</a>

# ${DATA.name}

<p>${bioText}<br/>
<sub>kwakhare5 &nbsp;·&nbsp; typescript / python &nbsp;·&nbsp; ai systems &amp; full-stack</sub></p>

<a href="${DATA.url}"><img src="./me.webp" width="16" height="16" align="absmiddle" alt="Portfolio" /> Portfolio</a> &nbsp;•&nbsp;
<a href="https://www.linkedin.com/in/karanwakhare"><img src="./linkedin.svg" width="16" height="16" align="absmiddle" alt="LinkedIn" /> LinkedIn</a> &nbsp;•&nbsp;
<a href="https://x.com/kwakhare5"><img src="./x.svg" width="16" height="16" align="absmiddle" alt="X" /> X</a> &nbsp;•&nbsp;
<a href="mailto:kwakhare5@gmail.com"><img src="./gmail.svg" width="18" height="14" align="absmiddle" alt="Email" /> Email</a>

</div>

---

## Selected Work

${selectedWorkMarkdown}

---

## Stack & Tooling

${stackMarkdown}
`;

fs.writeFileSync(profileReadmePath, content, "utf-8");
console.log(`[sync:profile] Successfully synced ${DATA.featuredProjects.length} projects and stack to ${profileReadmePath}`);
