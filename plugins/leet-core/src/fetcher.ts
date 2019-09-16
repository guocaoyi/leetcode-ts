import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';
import * as graphql from 'graphql-request';

// queries
export class Queries {
  // 所有题目列表 Query 语句
  public static questionsQuery: string = `query allQuestions {
  allQuestions {
    ...questionSummaryFields
  }
}

fragment questionSummaryFields on QuestionNode {
  title
  titleSlug
  translatedTitle
  questionId
  questionFrontendId
  topicTags {
      name
      translatedName
  }
  difficulty
  isPaidOnly
}`;

  // 根据名称获取题目详情 Query 语句
  public static questionDataQuery: string = `query questionData($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionId
    questionFrontendId
    title
    titleSlug
    content
    translatedTitle
    translatedContent
    isPaidOnly
    difficulty
    likes
    dislikes
    isLiked
    codeSnippets {
      lang
      langSlug
      code
    }
  }
}`;
}

/**
 * fetcher
 * @author gcy[yalda]
 * @date 2019.08
 */
export class Fetcher<T> {
  private client: graphql.GraphQLClient;

  constructor() {
    this.client = new graphql.GraphQLClient('https://leetcode-cn.com/graphql', {
      headers: {
        accept: '*/*',
        'content-type': 'application/json',
        'user-agent':
          'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
        'x-newrelic-id': 'UAQDVFVRGwEAXVlbBAg='
      }
    });
  }

  async fetch(query: string): Promise<T> {
    let data: T;
    try {
      data = await this.client.request(query);
    } catch (e) {
      throw new Error('Fetcher#fetch');
    } finally {
      return data;
    }
  }
}
