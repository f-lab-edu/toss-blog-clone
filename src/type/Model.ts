class Model<T> {
  data: T[] | undefined;

  getAll() {
    if (!this.data) {
      throw Error('No data available');
    }

    return this.data;
  }
}

export default Model;
