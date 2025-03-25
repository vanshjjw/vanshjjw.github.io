import React from 'react';
import './markdownRenderers.css';



const MarkdownRenderers = {
  // Custom link renderer
  a: ({ node, ...props }) => (
    <a 
      {...props} 
      className="markdown-link"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),
  // Custom paragraph renderer
  p: ({ node, ...props }) => (
    <p {...props} className="markdown-paragraph" />
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
    <ul {...props} className="markdown-list" />
  ),
  li: ({ node, ...props }) => (
    <li {...props} className="markdown-list-item" />
  ),
  // Custom code renderer
  code: ({ node, ...props }) => (
    <code {...props} className="markdown-code" />
  ),
  pre: ({ node, ...props }) => (
    <pre {...props} className="markdown-pre" />
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