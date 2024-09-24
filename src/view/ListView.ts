import View from '../type/View';

class ListView extends View {
  getTemplate() {
    return `<div>
             <ul class="menu"> 
               <li>전체</li> 
               <li>개발</li> 
               <li>디자인</li> 
             </ul> 
             <ul class="list"> 
                <li>초기 데이터</li> 
             </ul> 
            </div>`;
  }
}

export default ListView;
