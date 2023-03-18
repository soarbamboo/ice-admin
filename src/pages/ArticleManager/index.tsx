/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import React, { useEffect, useState } from 'react';
import * as marked from 'marked';
import hljs from 'highlight.js';
import './index.less';
const ArticleManager: React.FC = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    // 配置highlight
    hljs.configure({
      // tabReplace: '',
      classPrefix: 'hljs-',
      languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript', 'Markdown'],
    });
    // 配置marked
    marked.marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code: any) => hljs.highlightAuto(code).value,
      gfm: true, //默认为true。 允许 Git Hub标准的markdown.
      // tables: true, //默认为true。 允许支持表格语法。该选项要求 gfm 为true。
      breaks: true, //默认为false。 允许回车换行。该选项要求 gfm 为true。
    });
  }, []);

  return (
    <>
      <h3>基于React的markdown实时编辑器</h3>
      <div className="marked marked-box">
        {/* 编辑区 */}
        <div
          className="input-region markdownStyle"
          contentEditable="true"
          onInput={(e: any) => {
            setText(e.target.innerText);
          }}
        ></div>
        {/* 预览区 */}
        <div
          className="show-region markdownStyle"
          dangerouslySetInnerHTML={{
            __html: marked.marked(text).replace(/<pre>/g, "<pre id='hljs'>"),
          }}
        ></div>
      </div>
    </>
  );
};

export default ArticleManager;
