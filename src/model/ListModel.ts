import Model from '../type/Model';
import { LIST_DUMMY } from '../dummy';
import { ListItem } from '../view/AsideListView';
import { Category } from '../controller/BodyController';

class ListModel extends Model<ListItem> {
  data: ListItem[];

  constructor() {
    super();
    this.data = LIST_DUMMY;
  }

  getList(category: Category, tags: string[]) {
    let tempData = this.getAll();

    if (category !== 'all') {
      tempData = tempData.filter((item) => item.category === category);
    }

    if (tags.length) {
      tempData = tempData?.filter((item) =>
        item.tag.some((tag) => tags.includes(tag)),
      );
    }

    return tempData;
  }

  getItem(keyword: string) {
    const tempData = this.getAll();

    return tempData.find((data) => data.keyword === keyword);
  }
}

export default ListModel;
