import './style/style.css'
import './style/header.css'
import './style/content.css'
import './style/footer.css'
import './style/button.css'
import ListView from './view/ListView';
import AsideListView from './view/AsideListView';
import ButtonView from './view/ButtonView';

const icon = `<svg enable-background="new 0 0 16 16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="#b0b8c1"><path d="m12.432 8.948c-.368 0-.668.3-.668.668v1.575c0 .317-.258.575-.575.575h-6.379c-.317 0-.574-.258-.574-.575v-6.38c0-.317.257-.574.574-.574h1.574c.369 0 .669-.3.669-.668s-.301-.668-.669-.668h-1.574c-1.053 0-1.91.857-1.91 1.91v6.379c0 1.053.857 1.91 1.91 1.91h6.379c1.053 0 1.91-.856 1.91-1.91v-1.574c0-.368-.299-.668-.667-.668z"></path><path d="m12.903 3.085c-.136-.133-.316-.192-.494-.184h-3.807c-.369 0-.668.3-.668.669s.299.668.668.668h2.217l-3.192 3.191c-.125.124-.196.297-.196.472 0 .369.3.668.668.668v-.099.099c.179 0 .346-.069.472-.195l3.193-3.194v2.218c0 .369.3.668.668.668s.668-.3.668-.668v-3.815c.005-.18-.057-.362-.197-.498z"></path></g></svg>`

const listView = new ListView('.contents--main');
const TestButton = new ButtonView('.contents--aside');
const TestButton1 = new ButtonView('.contents--aside')
const TrendingList = new AsideListView('.contents--aside');
const RecentCommentsList = new AsideListView('.contents--aside');

window.requestAnimationFrame(() => {
    listView.render();
    TrendingList.render({ title: "인기있는 글" });
    RecentCommentsList.render({title: "최근 댓글"});
    TestButton.render({ content: "구독하기"  });
    TestButton1.render({ content: "채용 바로가기", color: "gray", variant: "secondary", suffix: icon });
  TestButton1.render({ content: "채용 바로가기", color: "gray", variant: "white", suffix: icon });
})
