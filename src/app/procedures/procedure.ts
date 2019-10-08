
export class Procedure {
  id: number;
  title: string;
  duration: string;
  price: string;
  text: string;
  image: string;
  category_id: number;

  constructor(procedure) {
    this.id = procedure.id;
    this.title = procedure.title;
    this.duration = procedure.duration;
    this.price = procedure.price;
    this.text = procedure.text;
    this.image = procedure.image;
    this.category_id = procedure.category_id;
  }

}
