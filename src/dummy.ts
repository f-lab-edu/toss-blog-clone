import { CommentItem, ListItem, TrendItem } from './view/AsideListView';

export const TRENDING_DUMMY: TrendItem[] = [
  {
    title: '비효율이 있는 곳엔 플랫폼 디자이너가 있다.',
    author: '이정현',
  },
  {
    title: '토스가 꿈꾸는 React Native 기술의 미래',
    author: '박서진',
  },
];

export const COMMENT_DUMMY: CommentItem[] = [
  {
    title: '포근한코알라',
    comment: '최고의 아티클입니다.',
    post: 'ksqlDB 실시간 Join으로 뉴스 추천 만들기',
  },
  {
    title: '다정한사슴',
    comment: '재미',
    post: '토스와 8가지 라이팅 원칙들',
  },
];

export const TAG_DUMMY: string[] = [
  'Frontend',
  'Server',
  'Product Design',
  'Node.js',
  'Data',
  'DevOps',
];

export const LIST_DUMMY: ListItem[] = [
  {
    keyword: 'test1',
    title: 'Tag: Frontend, Category: Develop',
    preview: `토스 합류까지 이어진 오픈소스 기여 경험, 궁금하지 않으세요? 토스 박찬혁, 고종현 님이 직접 전하는 토스 오픈소스에 기여 경험과 기술적 성장 이야기를 들어보세요!`,
    createAt: '2024년 9월 4일',
    team: '토스 프론트엔드 챕터',
    tag: ['Frontend'],
    category: 'develop',
  },
  {
    keyword: 'test2',
    title: 'Tag: Frontend | Node.js, Category: Develop',
    preview: `토스 합류까지 이어진 오픈소스 기여 경험, 궁금하지 않으세요? 토스 박찬혁, 고종현 님이 직접 전하는 토스 오픈소스에 기여 경험과 기술적 성장 이야기를 들어보세요!`,
    createAt: '2024년 9월 4일',
    team: '토스 프론트엔드 챕터',
    tag: ['Frontend', 'Node.js'],
    category: 'develop',
  },
  {
    keyword: 'test3',
    title: 'Tag: Node.js, Category: Develop',
    preview: `토스 합류까지 이어진 오픈소스 기여 경험, 궁금하지 않으세요? 토스 박찬혁, 고종현 님이 직접 전하는 토스 오픈소스에 기여 경험과 기술적 성장 이야기를 들어보세요!`,
    createAt: '2024년 9월 4일',
    team: '토스 프론트엔드 챕터',
    tag: ['Node.js'],
    category: 'develop',
  },
  {
    keyword: 'test4',
    title: 'Tag: Frontend, Category: Design',
    preview: `토스 합류까지 이어진 오픈소스 기여 경험, 궁금하지 않으세요? 토스 박찬혁, 고종현 님이 직접 전하는 토스 오픈소스에 기여 경험과 기술적 성장 이야기를 들어보세요!`,
    createAt: '2024년 9월 4일',
    team: '토스 프론트엔드 챕터',
    tag: ['Frontend'],
    category: 'design',
  },
  {
    keyword: 'test5',
    title: 'Tag: Data, Category: Design',
    preview: `토스 합류까지 이어진 오픈소스 기여 경험, 궁금하지 않으세요? 토스 박찬혁, 고종현 님이 직접 전하는 토스 오픈소스에 기여 경험과 기술적 성장 이야기를 들어보세요!`,
    createAt: '2024년 9월 4일',
    team: '토스 프론트엔드 챕터',
    tag: ['Data'],
    category: 'design',
  },
  {
    keyword: 'test6',
    title: 'Tag: Frontend | Data, Category: Design',
    preview: `토스 합류까지 이어진 오픈소스 기여 경험, 궁금하지 않으세요? 토스 박찬혁, 고종현 님이 직접 전하는 토스 오픈소스에 기여 경험과 기술적 성장 이야기를 들어보세요!`,
    createAt: '2024년 9월 4일',
    team: '토스 프론트엔드 챕터',
    tag: ['Frontend', 'Data'],
    category: 'design',
  },
];
