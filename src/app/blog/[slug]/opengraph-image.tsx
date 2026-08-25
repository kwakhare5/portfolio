import { allPosts } from "content-collections";
import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const getFontData = () => {
  try {
    const fontPath = path.join(process.cwd(), "public/fonts/Geist-Regular.ttf");
    if (fs.existsSync(fontPath)) {
      const geistRegular = fs.readFileSync(fontPath);
      return { geistRegular };
    }
    return null;
  } catch (error) {
    console.error("Failed to load fonts for OpenGraph:", error);
    return null;
  }
};

const styles = {
  outerWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0d1117",
    position: "relative",
  },
  middleWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0d1117",
    position: "relative",
    padding: "48px",
  },
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#161b22",
    position: "relative",
    padding: "48px",
    border: "1px solid #30363d",
    borderRadius: "16px",
  },
  imageSection: {
    position: "absolute",
    top: "48px",
    left: "48px",
    display: "flex",
    alignItems: "center",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
    position: "relative",
  },
  image: {
    width: "110px",
    height: "110px",
    borderRadius: "20px",
    border: "3px solid #30363d",
    objectFit: "cover",
  },
  title: {
    fontFamily: "Geist",
    fontSize: "44px",
    fontWeight: "700",
    lineHeight: "1.15",
    textAlign: "left",
    color: "#f0f6fc",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
    maxWidth: "960px",
  },
  description: {
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "1.5",
    textAlign: "left",
    maxWidth: "900px",
    color: "#8b949e",
    marginBottom: "16px",
  },
  date: {
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "1.5",
    textAlign: "left",
    color: "#58a6ff",
    marginBottom: "8px",
  },
} as const;

const getAvatarBase64 = () => {
  try {
    const fileBuffer = fs.readFileSync(path.join(process.cwd(), "public/me-og.png"));
    return `data:image/png;base64,${fileBuffer.toString("base64")}`;
  } catch {
    return undefined;
  }
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const fontData = getFontData();
    const { slug } = await params;
    const post = allPosts.find((p) => p._meta.path.replace(/\.mdx$/, "") === slug);
    const imageUrl = getAvatarBase64();

    if (!post) {
      return new ImageResponse(
        (
          <div style={styles.outerWrapper}>
            <div style={styles.middleWrapper}>
              <div style={styles.wrapper}>
                {imageUrl && (
                  <div style={styles.imageSection}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imageUrl} alt="Blog Post" style={styles.image} width={110} height={110} />
                  </div>
                )}
                <div style={styles.mainContainer}>
                  <div style={styles.title}>Post Not Found</div>
                </div>
              </div>
            </div>
          </div>
        ),
        {
          ...size,
          fonts: fontData
            ? [
                {
                  name: "Geist",
                  data: fontData.geistRegular,
                  weight: 400,
                  style: "normal",
                },
              ]
            : undefined,
        }
      );
    }

    const title = post.title;
    const description = post.summary || "";
    const publishedDate = post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })
      : "";

    return new ImageResponse(
      (
        <div style={styles.outerWrapper}>
          <div style={styles.middleWrapper}>
            <div style={styles.wrapper}>
              {imageUrl && (
                <div style={styles.imageSection}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageUrl} alt={title} style={styles.image} width={110} height={110} />
                </div>
              )}
              <div style={styles.mainContainer}>
                {publishedDate && <div style={styles.date}>{publishedDate}</div>}
                <div style={styles.title}>{title}</div>
                {description && <div style={styles.description}>{description}</div>}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: fontData
          ? [
              {
                name: "Geist",
                data: fontData.geistRegular,
                weight: 400,
                style: "normal",
              },
            ]
          : undefined,
      }
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(
      `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
      {
        status: 500,
      }
    );
  }
}
