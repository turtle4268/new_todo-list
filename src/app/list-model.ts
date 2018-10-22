export class List {
  constructor({
    title = '',
    date = '',
    comment = '',
    favorite = false,
    completed = false,
  } = {}) {
    this.title = title;
    this.date = date;
    this.comment = comment;
    this.favorite = favorite;
    this.completed = completed;
  }
  id?: string;
  title: string;
  date: string;
  comment: string;
  favorite: boolean;
  completed: boolean;
}

export class EditList extends List {
  constructor({
    id = '',
    title = '',
    date = '',
    comment = '',
    favorite = false,
    completed = false,
    isedit = false,
    opendetail = false,
  } = {}) {
    super({title, date, comment, favorite, completed});
    this.id = id;
    this.isedit = isedit;
    this.opendetail = opendetail;
  }
  id: string;
  isedit: boolean;
  opendetail: boolean;
}
