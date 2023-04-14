/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/indent */
import React, { useState, useEffect } from 'react';
import './MarkdownRenderer.scss';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function MarkdownRenderer({ folder } : { folder: string }) {
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    async function getFile() {
      const publicUrl = process.env.PUBLIC_URL || '';
      const response = await fetch(`${publicUrl}/${folder}/${slug}.md`);

      if (response.ok && response.headers.get('Content-Type')?.includes('text/markdown')) {
        const text = await response.text();
        setError(false);
        setMarkdown(text);
      } else {
        setError(true);
      }
    }
    getFile();
  }, [slug]);

  if (error) {
    return <div>This content could not be found.</div>;
  }

  return (
    <ReactMarkdown linkTarget="_blank" className="markdown">{markdown}</ReactMarkdown>
  );
}

export default MarkdownRenderer;
