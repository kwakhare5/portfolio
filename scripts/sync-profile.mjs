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
    return `- **[${project.title}](${targetUrl})** — ${project.oneLiner}`;
  })
  .join("\n");

const content = `<div align="center">

<a href="${DATA.url}">
  <img src="./me.webp" width="96" height="96" alt="${DATA.name}" />
</a>

# ${DATA.name}

<p>I turn ideas into code and ship real products to production.<br/>
<sub>Currently building with <a href="https://mcp.swiggy.com/builders/">Swiggy Builders Club</a> &nbsp;·&nbsp; TypeScript, Python, Next.js, AI Agents</sub></p>

<a href="${DATA.url}"><img src="./me.webp" width="16" height="16" align="absmiddle" alt="Portfolio" /> Portfolio</a> &nbsp;•&nbsp;
<a href="https://www.linkedin.com/in/karanwakhare"><img src="./linkedin.svg" width="16" height="16" align="absmiddle" alt="LinkedIn" /> LinkedIn</a> &nbsp;•&nbsp;
<a href="https://x.com/kwakhare5"><img src="./x.svg" width="16" height="16" align="absmiddle" alt="X" /> X</a> &nbsp;•&nbsp;
<a href="mailto:kwakhare5@gmail.com"><img src="./gmail.svg" width="18" height="14" align="absmiddle" alt="Email" /> Email</a>

</div>

---

## Selected Work

${selectedWorkMarkdown}
`;

fs.writeFileSync(profileReadmePath, content, "utf-8");
console.log(`[sync:profile] Successfully synced ${DATA.featuredProjects.length} projects to ${profileReadmePath}`);
