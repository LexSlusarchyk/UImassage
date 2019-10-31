
export class Article {
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

  init(article) {
    this.id = article.id;
    this.title = article.title || '';
    this.titleEn = article.titleEn || '';
    this.text = article.text;
    this.textEn = article.textEn;
    this.image = article.image;
  }
}
