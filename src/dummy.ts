import { CommentItem, TrendItem } from './view/AsideListView';

export const TRENDING_DUMMY: TrendItem[] = [{
  title: "비효율이 있는 곳엔 플랫폼 디자이너가 있다.",
  author: "이정현"
}, {
  title: "토스가 꿈꾸는 React Native 기술의 미래",
  author: "박서진"
}];

export const COMMENT_DUMMY: CommentItem[] = [{
  title: "포근한코알라",
  comment: "최고의 아티클입니다.",
  post: "ksqlDB 실시간 Join으로 뉴스 추천 만들기"
}, {
  title: "다정한사슴",
  comment: "재미",
  post: "토스와 8가지 라이팅 원칙들",
}];

export const TAG_DUMMY: string[] = ["Frontend", "Server", "Product Design", "Node.js", "Data", "DevOps"];
