import Model from '../type/Model';
import { COMMENT_DUMMY } from '../dummy';
import { CommentItem } from '../view/AsideListView';

class CommentModel extends Model<CommentItem> {
  constructor() {
    super();
    this.data = COMMENT_DUMMY
  }
}

export default CommentModel
