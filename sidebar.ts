import * as fs from "fs";
import { marked, Tokens } from "marked";

const INPUT_FILE: string = "./public/notes.md";
const OUTPUT_FILE: string = "./public/sidebar.md";

const extractHeaders = (markdown: string): string => {
  const tokens = marked.lexer(markdown);
  return tokens
    .filter((token) => token.type === "heading")
    .map((token) => {
      const { depth, text } = token as Tokens.Heading;
      if (depth === 1 || depth > 3) return null; // omit h1 and h4 or below
      const indent = depth === 2 ? "" : "  "; // h2 no indent, h3 indent 2 spaces
      return `${indent}- [${text}](#${text
        .toLowerCase()
        .replace(/\s+/g, "-")})`;
    })
    .filter(Boolean)
    .join("\n");
};

const updateSiderbarFile = (): void => {
  fs.readFile(INPUT_FILE, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading input file:", err);
      return;
    }

    const headers = extractHeaders(data);

    fs.writeFile(OUTPUT_FILE, headers, "utf8", (err) => {
      if (err) {
        console.error("Error writing output file:", err);
        return;
      }
    });
  });
};

fs.watchFile(INPUT_FILE, { interval: 1000 }, () => {
  console.log("Notes changed, updating sidebar...");
  updateSiderbarFile();
});

updateSiderbarFile();
