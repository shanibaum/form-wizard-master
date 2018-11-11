declare let _: any;

export class AbstractDTO {

  constructor(attributes?: object) {

  }

  public static createFromArray(data) {
    const arr = [];
    data.forEach( (attr) => {
      arr.push(new this(attr));
    });
    return arr;
  }
}


