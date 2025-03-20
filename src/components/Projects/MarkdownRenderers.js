import React from 'react';

// Custom renderers for Markdown components
const MarkdownRenderers = {
  // Custom link renderer
  a: ({ node, ...props }) => (
    <a 
      {...props} 
      className="inline-link"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),
  // Custom paragraph renderer
  p: ({ node, ...props }) => (
    <p {...props} className="modal-paragraph" />
  ),
  // Custom heading renderers
  h1: ({ node, ...props }) => (
    <h1 {...props} className="markdown-heading markdown-h1" />
  ),
  h2: ({ node, ...props }) => (
    <h2 {...props} className="markdown-heading markdown-h2" />
  ),
  h3: ({ node, ...props }) => (
    <h3 {...props} className="markdown-heading markdown-h3" />
  ),
  // Custom list renderers
  ul: ({ node, ...props }) => (
    <ul {...props} className="modal-list" />
  ),
  li: ({ node, ...props }) => (
    <li {...props} className="modal-list-item" />
  ),
  // Custom code renderer
  code: ({ node, ...props }) => (
    <code {...props} className="modal-code" />
  ),
  pre: ({ node, ...props }) => (
    <pre {...props} className="modal-code-block" />
  ),
  // Custom strong/bold renderer
  strong: ({ node, ...props }) => (
    <strong {...props} className="markdown-bold" />
  ),
  // Custom emphasis/italic renderer
  em: ({ node, ...props }) => (
    <em {...props} className="markdown-emphasis" />
  ),
};

export default MarkdownRenderers; 