import React, { useState, useEffect } from 'react';
import './MarkdownRenderer.scss';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


function MarkdownRenderer() {
  const [markdown, setMarkdown] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    const markdownFile = require(`../public/talks/${slug}.md`);
    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [slug]);

  return (
    <div className="markdown">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;