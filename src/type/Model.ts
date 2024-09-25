type Data = number[] | string[] | object[] | undefined;

class Model {
  data: Data;

  getAll() {
    if (!this.data) {
      throw Error("No data available")
    }

    return this.data;
  }

  getFirst() {
    if (!this.data || this.data[0]) {
      throw Error("No data available")
    }

    return this.data[0];
  }

  getSelect(key: number) {
    if (!this.data || this.data[key]) {
      throw Error("No data available")
    }

    return this.data[key];
  }
}

export default Model
