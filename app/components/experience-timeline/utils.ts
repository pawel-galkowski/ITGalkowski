import { parse, HTMLElement } from "node-html-parser";
import React from "react";

let nodeCounter = 0;
export const parseHTMLToReact = (node: unknown): React.ReactNode => {
  if (!node) return null;

  // Handle text nodes
  if (typeof node === "string") {
    return node;
  }

  if (node.nodeType === 3) {
    // Text node
    const text = node.text || node.content || "";
    return text.trim() ? text : null;
  }

  if (node.nodeType === 1 || node instanceof HTMLElement) {
    // Element node
    const tagName = node.tagName?.toLowerCase();
    const key = `node-${nodeCounter++}`;
    
    const attrs: Record<string, string> = {};
    if (node.attributes) {
      for (const [name, value] of Object.entries(node.attributes)) {
        attrs[name] = value as string;
      }
    }
    
    const props: Record<string, unknown> = {
      key,
      ...attrs,
    };

    const children = node.childNodes
      ?.map((child) => parseHTMLToReact(child))
      .filter((child) => child !== null && child !== "") || [];

    // Map HTML tags to React components or elements
    switch (tagName) {
      case "b":
      case "strong":
        return React.createElement("strong", props, ...children);
      case "i":
      case "em":
        return React.createElement("em", props, ...children);
      case "u":
        return React.createElement("u", props, ...children);
      case "p":
        return React.createElement("p", props, ...children);
      case "br":
        return React.createElement("br", props);
      case "ul":
        return React.createElement("ul", props, ...children);
      case "ol":
        return React.createElement("ol", props, ...children);
      case "li":
        return React.createElement("li", props, ...children);
      case "a":
        return React.createElement("a", props, ...children);
      case "span":
        return React.createElement("span", props, ...children);
      case "div":
        return React.createElement("div", props, ...children);
      default:
        return React.createElement(tagName || "div", props, ...children);
    }
  }

  return null;
};

export const stringToHTML = (str: string) => {
  nodeCounter = 0;
  const parsed = parse(str);
  return parseHTMLToReact(parsed);
};