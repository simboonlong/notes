import { describe, expect, test } from "vitest";
import { extractHeaders } from "./sidebar";

const markdown = `
# Heading 1

Some text under heading 1

## Heading 2

Some text under heading 2

### Heading 3

Some text under heading 3
`;

describe("extractHeaders", () => {
  test("should extract only heading 2 and 3 correctly", () => {
    const extracted = extractHeaders(markdown);

    expect(extracted.includes("Heading 1")).toBe(false);
    expect(extracted.includes("Heading 2")).toBe(true);
    expect(extracted.includes("Heading 3")).toBe(true);
  });

  test("should format to bullet with jump links correctly", () => {
    const extracted = extractHeaders(markdown);

    expect(extracted.includes("- [Heading 2](#heading-2)")).toBe(true);
    expect(extracted.includes("- [Heading 3](#heading-3)")).toBe(true);
  });
});
