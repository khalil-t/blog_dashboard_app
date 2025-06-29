import { ReactElement } from 'react';


const renderMarkdownPreview = (content: string): ReactElement[] => {
  return content.split('\n').map((line, index) => {
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-xl font-medium mb-2">{line.slice(4)}</h3>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={index} className="text-2xl font-semibold mb-3">{line.slice(3)}</h2>;
    }
    if (line.startsWith('# ')) {
      return <h1 key={index} className="text-3xl font-bold mb-4">{line.slice(2)}</h1>;
    }
    if (/^\*\*(.+)\*\*$/.test(line)) {
      return <p key={index} className="font-bold mb-2">{line.replace(/\*\*(.+)\*\*/, '$1')}</p>;
    }
    if (/^\*(.+)\*$/.test(line)) {
      return <p key={index} className="italic mb-2">{line.replace(/\*(.+)\*/, '$1')}</p>;
    }
    if (line.trim() === '') {
      return <br key={index} />;
    }
    return <p key={index} className="mb-2">{line}</p>;
  });
};

export default renderMarkdownPreview;
