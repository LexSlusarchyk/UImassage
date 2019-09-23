export class Category {
  id: number;
  title: string;
  text: string;
  image: string;
  categoryId: number;

  constructor(procedure) {
    this.id = procedure.id;
    this.title = procedure.title;
    this.text = procedure.text;
    this.image = procedure.image;
    this.categoryId = procedure.categoryId;
  }

}
