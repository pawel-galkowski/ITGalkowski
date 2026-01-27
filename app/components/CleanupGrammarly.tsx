"use client";

import { useEffect } from "react";

function removeGrammarlyAttributesFromElement(el: Element) {
  if (!el || !el.attributes) return;
  const attrs = Array.from(el.attributes).map((a) => a.name);
  for (const name of attrs) {
    if (name.startsWith("data-gr") || name.startsWith("data-new-gr")) {
      try {
        el.removeAttribute(name);
      } catch (e) {
        console.log("Error removing Grammarly attribute:", e);
        continue;
      }
    }
  }
}

function cleanupAddedNode(node: Node) {
  if (node instanceof Element) {
    removeGrammarlyAttributesFromElement(node);
    try {
      cleanupChildElements(node);
    } catch (e) {
      console.log("Error during Grammarly attributes cleanup on added nodes:", e);
    }
  }
}

function cleanupChildElements(element: Element) {
  element.querySelectorAll("*").forEach((child) => removeGrammarlyAttributesFromElement(child));
}

function handleMutation(m: MutationRecord) {
  if (m.type === "attributes" && m.target instanceof Element) {
    removeGrammarlyAttributesFromElement(m.target as Element);
  }
  if (m.addedNodes && m.addedNodes.length > 0) {
    m.addedNodes.forEach((node) => {
      cleanupAddedNode(node);
    });
  }
}

export default function CleanupGrammarly() {
  useEffect(() => {
    // Initial cleanup
    try {
      document.querySelectorAll("*").forEach((el) => removeGrammarlyAttributesFromElement(el));
    } catch (e) {
      console.log("Error during initial Grammarly attributes cleanup:", e); 
    }

    // Observe future mutations (extensions may inject attributes later)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        handleMutation(m);
      }
    });

    try {
      mo.observe(document.documentElement, { attributes: true, childList: true, subtree: true });
    } catch (e) {
      console.log("Error during Grammarly attributes observer setup:", e);
    }

    return () => mo.disconnect();
  }, []);

  return null;
}
