declare module 'leet-core' {
  // topic
  export interface Topic {
    name: string;
    translatedName: string;
  }

  // question
  export interface Question {
    title: string;
    titleSlug: string;
    translatedTitle: string;
    questionId: string;
    questionFrontendId: string;
    topicTags: Topic[];
    difficulty: 'Easy' | 'Medium' | 'Hard';
    isPaidOnly: boolean; // 是否付费
  }

  // all question response body
  export interface Questions {
    data: {
      allQuestions: Question[];
    };
  }

  // code snippet
  export interface CodeSnippet {
    lang: 'Java' | 'Python3' | 'JavaScript';
    langSlug: 'java' | 'python3' | 'javascript';
    code: string;
  }

  // question data response dady
  export interface QuestionData {
    data: {
      question: {
        questionId: string; // 题目编号
        questionFrontendId: string; // 前台使用题目编号
        title: string;
        titleSlug: string;
        content: string;
        translatedTitle: string;
        isPaidOnly: boolean;
        difficulty: 'Easy' | 'Medium' | 'Hard';
        likes: number;
        dislikes: number;
        codeSnippets: CodeSnippet[];
      };
    };
  }

  // 题面
  export interface Problem {
    title: string; // 题目
    content: string; // 题干
    example: string | string[]; // 题示
    note: string | string[]; // 题注
    followup: string; // 题参
    thinking: string; // 题评
    topics: string | string[]; // 题型
    submissions: Submission[]; // 题解
  }

  // 题解
  export interface Submission {
    name: string; // 标题（所用方法）
    info: string; // 答题（说明、思路、总结）
    time: string; // 提交时间
    status: 'Accepted'; // 提交测试情况
    runtime: string; // 测试运行时（时间复杂度）
    memory: string; // 测试内存占用（空间复杂度）
    code: string; // 代码
  }
}
