import Model from '../type/Model';
import { TAG_DUMMY } from '../dummy';

class TagModel extends Model<string> {
  constructor() {
    super();
    this.data = TAG_DUMMY
  }
}

export default TagModel
