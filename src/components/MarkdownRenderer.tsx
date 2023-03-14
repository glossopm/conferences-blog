import React, { useState, useEffect } from 'react';
import './MarkdownRenderer.scss';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function MarkdownRenderer() {
  const [markdown, setMarkdown] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    async function getFile() {
      const markdownFile = await import(`../../public/talks/${slug}.md`);
      fetch(markdownFile)
        .then(async (response) => response.text())
        .then((text) => { setMarkdown(text); });
    }
    getFile();
  }, [slug]);

  return (
    <ReactMarkdown className="markdown">{markdown}</ReactMarkdown>
  );
}

export default MarkdownRenderer;
