import * as fs from 'fs';

// fs.readFileSync('./index.html', { encoding: 'utf8' });
export let htmlStr: string = JSON.stringify`<p>Invert a binary tree.</p> ↵ ↵<p><strong>Example:</strong></p> ↵ ↵<p>Input:</p> ↵ ↵<pre> ↵ 4 ↵ / \ ↵ 2 7 ↵ / \ / \ ↵1 3 6 9</pre> ↵ ↵<p>Output:</p> ↵ ↵<pre> ↵ 4 ↵ / \ ↵ 7 2 ↵ / \ / \ ↵9 6 3 1</pre> ↵ ↵<p><strong>Trivia:</strong><br /> ↵This problem was inspired by <a href="https://twitter.com/mxcl/status/608682016205344768" target="_blank">this original tweet</a> by <a href="https://twitter.com/mxcl" target="_blank">Max Howell</a>:</p> ↵ ↵<blockquote>Google: 90% of our engineers use the software you wrote (Homebrew), but you can&rsquo;t invert a binary tree on a whiteboard so f*** off.</blockquote> ↵`;

// <p></p> -> ''
// <code></code> -> ``
// <em></em> -> **
// <strong></strong> -> ****
// <pre><pre> -> ```bash```
// <img>
// <div></div>
// <b></b>
// <br />
// <ol></ol>
// <ul></ul>
// <li></li>
// 转义字符

const html_empty_decode = (str: string): string => str.replace(/↵/g, '\n');
htmlStr = html_empty_decode(htmlStr);

const html_decode = (str: string): string =>
  str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    .replace(/&rsquo;/g, '’');
htmlStr = html_decode(htmlStr);

const html_hyper_decode = (str: string): string =>
  str
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '')
    .replace(/<br\/>/g, '\n')
    .replace(/<br \/>/g, '\n')
    .replace(/\\>/g, '\\')
    .replace(/<code>/g, '`')
    .replace(/<\/code>/g, '`')
    .replace(/<b>/g, '**')
    .replace(/<\/b>/g, '**')
    .replace(/<ul>/g, '\b')
    .replace(/<\/ul>/g, '\b')
    .replace(/<li>/g, '- ')
    .replace(/<\/li>/g, '')
    .replace(/<blockquote>/g, '> ')
    .replace(/<\/blockquote>/g, '');

htmlStr = html_hyper_decode(htmlStr);

/**
 * <pre></pre> 所有 HTML 标签均转空
 */
const html_code_decode = (str: string) =>
  str.replace(/<pre>/g, '```bash').replace(/<\/pre>/g, '\n```');
htmlStr = html_code_decode(htmlStr);

const html_title_decode = (str: string): string =>
  str
    .replace(/<strong>Note:<\/strong>/g, '### Note')
    .replace(/<b>Note:<\/b>/g, '### Note')
    .replace(/<strong>Trivia:<\/strong>/g, '### Trivia')
    .replace(/<b>Trivia:<\/b>/g, '### Trivia')
    .replace(/<strong>Example:<\/strong>/g, '### Example')
    .replace(/<strong>Example 1:<\/strong>/g, '### Example')
    .replace(/<strong>Example 2:<\/strong>/g, '\b')
    .replace(/<strong>Example 3:<\/strong>/g, '\b')
    .replace(/<strong>Example 4:<\/strong>/g, '\b')
    .replace(/<strong>/g, '**')
    .replace(/<\/strong>/g, '**');
htmlStr = html_title_decode(htmlStr);

// write
fs.writeFileSync('./index.md', htmlStr, { encoding: 'utf8' });

console.info('----->>>> this html_parse is run!');
