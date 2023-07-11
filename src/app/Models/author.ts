export class Author {
  public authorId: string;
  public firstName: string;
  public lastName: string;

  constructor() {
    this.authorId = '00000000-0000-0000-0000-000000000000';
    this.firstName = '';
    this.lastName = '';
  }

  get FullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
