import Model from '../type/Model';
import { TRENDING_DUMMY } from '../dummy';

class TrendModel extends Model {
  constructor() {
    super();
    this.data = TRENDING_DUMMY
  }
}

export default TrendModel
