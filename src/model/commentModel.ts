import Model from '../type/Model';
import { COMMENT_DUMMY } from '../dummy';

class CommentModel extends Model {
  constructor() {
    super();
    this.data = COMMENT_DUMMY
  }
}

export default CommentModel
