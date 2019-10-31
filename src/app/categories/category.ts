export class Category {
  id: number;
  title: string;
  titleEn: string;
  text: string;
  textEn: string;
  image: string;
  categoryId: number;

  constructor() {
    this.title = null;
    this.titleEn = null;
    this.text = null;
    this.textEn = null;
    this.image = null;
    this.categoryId = null;
  }

  init(category) {
    this.title = category.title || '';
    this.titleEn = category.titleEn || '';
    this.text = category.text || '';
    this.textEn = category.textEn || '';
    this.image = category.image || null;
    this.categoryId = category.categoryId || null;
  }
}
