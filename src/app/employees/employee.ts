
export class Employee {
  id: number;
  title: string;
  titleEn: string;
  text: string;
  textEn: string;
  image: string;

  constructor() {
    this.id = null;
    this.title = null;
    this.titleEn = null;
    this.text = null;
    this.textEn = null;
    this.image = null;
  }

  init(employee) {
    this.id = employee.id;
    this.title = employee.title || '';
    this.titleEn = employee.titleEn || '';
    this.text = employee.text;
    this.textEn = employee.textEn;
    this.image = employee.image;
  }
}
