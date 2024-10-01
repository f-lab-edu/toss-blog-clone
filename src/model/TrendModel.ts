import Model from '../type/Model';
import { TRENDING_DUMMY } from '../dummy';
import { TrendItem } from '../view/AsideListView';

class TrendModel extends Model<TrendItem> {
  constructor() {
    super();
    this.data = TRENDING_DUMMY;
  }
}

export default TrendModel;
