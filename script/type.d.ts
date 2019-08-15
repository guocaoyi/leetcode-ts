export interface Difficulty {
  level: 1 | 2 | 3;
}

export interface Stat {
  frontend_question_id: number;
  is_new_question: boolean;
  question__article__live: any;
  question__article__slug: any;
  question__hide: boolean;
  question__title: string;
  question__title_slug: string;
  question_id: number;
  total_acs: number;
  total_submitted: number;
}

export interface StatPairs {
  difficulty: Difficulty;
  level: number;
  frequency: number;
  is_favor: boolean;
  paid_only: boolean;
  progress: number;
  stat: Stat;
  status: any;
}

export interface Problems {
  ac_easy: number;
  ac_hard: number;
  ac_medium: number;
  category_slug: string;
  frequency_high: number;
  frequency_mid: number;
  num_solved: number;
  num_total: number; // 当前总数量
  stat_status_pairs: StatPairs[];
  user_name: string;
}

export interface Annotation {
  time?: string; // 提交时间
  status: boolean; // 提交状态
  runtime?: string; // 运行时情况
  memory?: string; // 内存占用情况
  case?: string; // 测试用例
  top?: boolean; // 排名靠前的提交记录
}

export interface Info extends Annotation {
  [T: string]: any;
  title: string; // 方案名称
  comment: string; // 注释
}

export interface Submission {
  name: string; // 名称
  info: Info; // 注释信息
  type: 'Submission' | 'TopRanked';
  sourse: string; // 源码（ts）
}

export enum Difficult {
  Easy = 1,
  Medium = 2,
  Hard = 3
}
