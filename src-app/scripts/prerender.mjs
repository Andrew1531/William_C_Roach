import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

// Render the actual page component, not a second copy of the site's content.
// GitHub serves this HTML directly; React hydrates it for menus and navigation.
const server = await createServer({
  configFile: "./vite.config.ts",
  mode: "production",
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const markup = renderToString(createElement(App));
  const path = new URL("../dist/public/index.html", import.meta.url);
  const html = await readFile(path, "utf8");
  const placeholder = '<div id="root"></div>';
  if (!html.includes(placeholder)) throw new Error("Missing prerender root placeholder");
  if ((markup.match(/<h1(?:\s|>)/g) || []).length !== 1) {
    throw new Error("Homepage must have exactly one H1");
  }
  await writeFile(path, html.replace(placeholder, () => `<div id="root">${markup}</div>`));
  console.log("Prerendered homepage: content and links are readable without JavaScript.");
} finally {
  await server.close();
}
