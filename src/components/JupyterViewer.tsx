import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

interface JupyterViewerProps {
  fileUrl: string;
}

export default function JupyterViewer({ fileUrl }: JupyterViewerProps) {
  const [notebook, setNotebook] = useState<any>(null);

  useEffect(() => {
    fetch(fileUrl)
      .then(res => res.json())
      .then(data => setNotebook(data))
      .catch(err => console.error("Error loading notebook:", err));
  }, [fileUrl]);

  if (!notebook) return <div className="font-mono text-muted text-sm py-12 text-center animate-pulse">Loading notebook...</div>;

  return (
    <div className="space-y-8">
      {notebook.cells.map((cell: any, index: number) => {
        if (cell.cell_type === 'markdown') {
          const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source;
          return (
            <div key={index} className="font-serif text-foreground space-y-4 leading-relaxed notebook-markdown">
              <Markdown>{source}</Markdown>
            </div>
          );
        } else if (cell.cell_type === 'code') {
          const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source;
          return (
            <div key={index} className="flex gap-4">
              <div className="font-mono text-xs text-muted min-w-[60px] pt-4 select-none">
                In [{cell.execution_count || ' '}]:
              </div>
              <div className="flex-1 space-y-4 min-w-0">
                <pre className="font-mono text-sm bg-surface-alt p-4 rounded-sm border utilitarian-border overflow-x-auto text-foreground">
                  <code>{source}</code>
                </pre>
                {cell.outputs && cell.outputs.length > 0 && (
                  <div className="space-y-2">
                    {cell.outputs.map((output: any, outIndex: number) => {
                      if (output.data && output.data['text/plain']) {
                        const text = Array.isArray(output.data['text/plain']) ? output.data['text/plain'].join('') : output.data['text/plain'];
                        return (
                          <div key={outIndex} className="text-xs text-muted font-mono whitespace-pre-wrap">
                            {text}
                          </div>
                        );
                      }
                      if (output.data && output.data['text/html']) {
                        const html = Array.isArray(output.data['text/html']) ? output.data['text/html'].join('') : output.data['text/html'];
                        return (
                          <div key={outIndex} className="bg-surface p-4 border utilitarian-border rounded-sm overflow-x-auto" dangerouslySetInnerHTML={{ __html: html }} />
                        );
                      }
                      if (output.data && output.data['image/png']) {
                        return (
                          <div key={outIndex} className="mt-6 p-4 bg-surface rounded-sm border utilitarian-border">
                            <img src={`data:image/png;base64,${output.data['image/png']}`} alt="Output" className="w-full h-auto rounded-sm shadow-sm opacity-90 grayscale hover:grayscale-0 transition-all duration-500" />
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
