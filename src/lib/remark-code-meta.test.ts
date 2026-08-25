import { describe, it, expect } from "vitest";
import { remarkCodeMeta } from "./remark-code-meta";

describe("remarkCodeMeta", () => {
  it("extracts data-meta and data-title from code blocks", () => {
    const plugin = remarkCodeMeta();
    const tree = {
      type: "root",
      children: [
        {
          type: "code",
          lang: "typescript",
          meta: 'title="example.ts"',
          value: 'console.log("hello");',
        },
      ],
    };

    plugin(tree as any);

    const codeNode = tree.children[0] as any;
    expect(codeNode.data.hProperties["data-meta"]).toBe('title="example.ts"');
    expect(codeNode.data.hProperties["data-title"]).toBe("example.ts");
  });

  it("handles nodes without meta cleanly", () => {
    const plugin = remarkCodeMeta();
    const tree = {
      type: "root",
      children: [
        {
          type: "code",
          lang: "typescript",
          value: 'console.log("hello");',
        },
      ],
    };

    plugin(tree as any);
    const codeNode = tree.children[0] as any;
    expect(codeNode.data).toBeUndefined();
  });
});
