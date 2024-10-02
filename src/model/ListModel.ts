import Model from '../type/Model';
import { LIST_DUMMY } from '../dummy';
import { ListItem } from '../view/AsideListView';

class ListModel extends Model<ListItem> {
  constructor() {
    super();
    this.data = LIST_DUMMY;
  }
}

export default ListModel;
