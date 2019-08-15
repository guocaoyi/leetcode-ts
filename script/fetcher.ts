import * as assert from 'assert';
import * as fs from 'fs';
import { importSchema } from 'graphql-import';
import * as graphql from 'graphql-request';
import axios from 'axios';

const Csrftoken: string =
  'ENap7zPh7bHCZqqCAwkVEWlNBZQhDqg4jRGPApibAnmw6B6LsovsYGYZrjEgDfNW';
const UserAgent: string =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36';

const typeDefs = importSchema('./questionData.gql');

/**
 * 查询语句
 * @author gcy[yalda]
 * @date 2019.08
 */
export class Query {
  /**
   * 从 DOM 中获取题库数据（废弃）
   */
  public getSourceFromDom(): any {
    const problems: any = [];
    let collections: any = document.getElementsByClassName('reactable-data')[0]
      .children;
    for (let i = 0; i < collections.length; i++) {
      const item = collections[i];
      const num = Number(item.children[1].innerText);
      const title = item.children[2].getAttribute('value');
      const difficulty = item.children[5].children[0].innerText;
      problems.push([num, title, difficulty]);
    }
    return problems;
  }

  /**
   * 根据官方的 API 获取所有题库的基本信息
   */
  public async getAllProblemsFromApi() {
    let result: any;
    try {
      let res: any = await axios.get('https://leetcode.com/api/problems/all/', {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/json',
          cookie: `csrftoken=${Csrftoken}`,
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': UserAgent,
          'x-newrelic-id': 'UAQDVFVRGwEAXVlbBAg=',
          'x-requested-with': 'XMLHttpRequest'
        }
      });
      assert.ok(
        res.data.length > 0,
        'LeetCode Problems Request.Data has 0 length'
      );
      result = res.data;
    } catch (e) {
      console.error(e);
    } finally {
      return result;
    }
  }

  /**
   * 获取算法题细节（获取题目 Topic、Content）
   */
  public async getProblemDetail() {
    const client = new graphql.GraphQLClient(
      'https://leetcode-cn.com/graphqla',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7',
          'content-type': 'application/json',
          cookie: `csrftoken=${Csrftoken}`,
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': UserAgent,
          'x-csrftoken': Csrftoken
        }
      }
    );

    let query: string = fs.readFileSync('./', {
      encoding: 'utf8'
    });

    await client.request(query, {
      operationName: 'questionData',
      titleSlug: 'invert-binary-tree'
    });
  }

  /**
   * 获取所有 Topics 分类
   */
  public async getProblemTags() {
    const client = new graphql.GraphQLClient(
      'https://leetcode-cn.com/graphqla',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7',
          'content-type': 'application/json',
          cookie: `csrftoken=${Csrftoken}`,
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': UserAgent,
          'x-csrftoken': Csrftoken
        }
      }
    );

    let query: string = fs.readFileSync('./questionTags.gql', {
      encoding: 'utf8'
    });

    await client.request(query, {
      operationName: 'questionData',
      titleSlug: 'median-of-two-sorted-arrays'
    });
  }

  /**
   * 数据封装
   */
  public pack() {
    const str: string = fs.readFileSync('./algorithms/response.json', {
      encoding: 'utf8'
    });
    let data: any[] = JSON.parse(str);

    let contatiner: any[] = [];

    data.forEach((d: any) => {
      contatiner.push([
        d.stat.frontend_question_id,
        d.stat.question__title,
        d.stat.question__title_slug,
        d.difficulty.level
      ]);
    });
    contatiner.sort((a: any[], b: any[]) => (a[0] < b[0] ? -1 : 1));

    // check
    contatiner.forEach((d: any) => {
      if (this.parse(d[1]) !== d[2]) {
        throw new Error(d);
      }
    });
  }

  /**
   * 持久化，写入到本地文件
   * @param contatiner any[]
   */
  public storage(contatiner: any[]) {
    fs.writeFileSync(
      './algorithms/algorithms_arr.json',
      JSON.stringify(contatiner, null, 4),
      {
        encoding: 'utf8'
      }
    );
  }

  /**
   * 对 Title 进行 Parse
   * @param str string
   */
  private parse = (str: string): string =>
    str
      .replace(/(\d{0,4})\.(\s[A-Za-z]+)/g, '$2')
      .trim()
      .toLowerCase()
      .replace(/\-/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/([(|)|,'?:`])/g, '')
      .replace(/\s/g, '-');
}
