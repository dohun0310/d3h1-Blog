const fs = require("fs");
const path = require("path");

const getFileNames = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  return fs.readdirSync(postsDirectory);
};

const extractFrontmatter = (fileContent) => {
  const frontmatter = {};
  const lines = fileContent.split("\n");
  for (const line of lines) {
    const match = line.match(/^(\w+):\s?(.+)/);
    if (match) {
      const key = match[1].toLowerCase();
      if (!frontmatter.hasOwnProperty(key)) {
        frontmatter[key] = match[2];
      }
    }
  }
  return frontmatter;
};

const getRealTime = () => {
  const date = new Date();
  date.setHours(date.getHours() + 9);
  const offset = "+09:00";
  return date.toISOString().split(".")[0] + offset;
};

const main = () => {
  const filenames = getFileNames();
  const realTime = getRealTime();

  const urls = filenames.map((filename) => {
    const filePath = path.join(process.cwd(), "posts", filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const frontmatter = extractFrontmatter(fileContent);

    const url = `https://blog.d3h1.com/${filename.replace(".md", "")}`;
    const lastmod = frontmatter.date || "";
    return { realTime, url, lastmod };
  });

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://blog.d3h1.com/</loc>
        <lastmod>${realTime}</lastmod>
        <changefreq>always</changefreq>
        <priority>1.00</priority>
      </url>
      ${urls
        .map(({ url, lastmod }) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${lastmod}</lastmod>
              <changefreq>always</changefreq>
              <priority>0.80</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};

main();