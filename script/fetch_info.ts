import * as assert from 'assert';
import * as fs from 'fs';
import * as graphql from 'graphql-request';

const Csrftoken: string =
  '57DMxi2PvN0dZXRQCk0j19q1dsNdtuiObAl2FIwOVp4GcIpEpS3qkCeuRpz8K2VX';
const Cfduid: string = 'd15f45ce45865b52359fdc469cb78b7881565765969';
const UserAgent: string =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36';

const client = new graphql.GraphQLClient('https://leetcode.com/graphql', {
  headers: {
    accept: '*/*',
    'content-type': 'application/json',
    referer: 'https://leetcode.com/problems/average-of-levels-in-binary-tree',
    'sec-fetch-mode': 'cors',
    'user-agent': UserAgent,
    cookie: `__cfduid=${Cfduid};csrftoken=${Csrftoken};`,
    'x-csrftoken': Csrftoken,
    'x-newrelic-id': 'UAQDVFVRGwEAXVlbBAg='
  }
});

let query: string = `query questionData($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionId
    questionFrontendId
    boundTopicId
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
    similarQuestions
    contributors {
      username
      profileUrl
      avatarUrl
      __typename
    }
    langToValidPlayground
    topicTags {
      name
      slug
      translatedName
      __typename
    }
    companyTagStats
    codeSnippets {
      lang
      langSlug
      code
      __typename
    }
    stats
    hints
    solution {
      id
      canSeeDetail
      __typename
    }
    status
    sampleTestCase
    metaData
    judgerAvailable
    judgeType
    mysqlSchemas
    enableRunCode
    enableTestMode
    envInfo
    libraryUrl
    __typename
  }
}`;

client
  .request(query, {
    titleSlug: 'average-of-levels-in-binary-tree'
  })
  .then((data: string) => {
    fs.writeFile('./__info.md', data, {}, () => {});
  });
