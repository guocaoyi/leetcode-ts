import * as https from 'https';

/**
 * 对 Title 进行 Parse
 * @param str string
 */
export const parse = (str: string): string =>
  str
    .replace(/(\d{0,4})\.(\s[A-Za-z]+)/g, '$2')
    .trim()
    .toLowerCase()
    .replace(/\-/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/([(|)|,'?:`])/g, '')
    .replace(/\s/g, '-');

/**
 * Download remote image
 */
export const download = (uri: string): Promise<Buffer> => {
  return new Promise((resovle, reject) => {
    https
      .request({
        hostname: 'assets.leetcode.com',
        port: 443,
        path: '/uploads/2019/08/01/1480-binary-tree-coloring-game.png',
        method: 'GET'
      })
      .on('response', (res: any) => {
        if (res.headers['content-length'] > 2 * 1024 * 1024) {
          reject('Image too large.');
        } else if (!~[200, 304].indexOf(res.statusCode)) {
          reject('Received an invalid status code.');
        } else if (!res.headers['content-type'].match(/image/)) {
          reject('Not an image.');
        } else {
          let backet: any = '';
          res.setEncoding('binary');
          res
            .on('error', (err: Error) => reject(err))
            .on('data', (chunk: any) => (backet += chunk))
            .on('end', () => resovle(backet));
        }
      })
      .on('error', err => reject(err))
      .end();
  });
};
