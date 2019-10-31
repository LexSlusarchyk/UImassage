
export class Procedure {
  id: number;
  title: string;
  titleEn: string;
  duration: string;
  price: string;
  text: string;
  textEn: string;
  image: string;
  category_id: number;
  videoUrl: string;

  constructor(procedure?) {
    this.id = null;
    this.title = null;
    this.titleEn = null;
    this.duration = null;
    this.price = null;
    this.text = null;
    this.textEn = null;
    this.image = null;
    this.category_id = null;
    this.videoUrl = null;
  }

  init(procedure) {
    this.id = procedure.id;
    this.title = procedure.title;
    this.titleEn = procedure.titleEn || '';
    this.duration = procedure.duration;
    this.price = procedure.price;
    this.text = procedure.text;
    this.textEn = procedure.textEn || '';
    this.image = procedure.image;
    this.category_id = procedure.category_id;
    this.videoUrl = procedure.videoUrl;
  }

}
