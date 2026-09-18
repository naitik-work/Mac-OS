import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Markdown from "react-markdown";
import MacWindow from "./MacWindow";
import "./note.scss";

const Note = ({ windowName }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.md")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load note.md");
        }

        return res.text();
      })
      .then((text) => setMarkdown(text))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MacWindow windowName={windowName}>
      <div className="note-window">
        {markdown ? (
          <Markdown
            windowName={windowName}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atelierDuneDark}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </Markdown>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
