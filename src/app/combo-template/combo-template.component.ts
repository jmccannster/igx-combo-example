import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';
import { Author } from '../Models/author';
import { localData } from './local-data';

@Component({
  selector: 'app-combo-template',
  styleUrls: ['./combo-template.component.scss'],
  templateUrl: './combo-template.component.html',
})
export class ComboTemplateComponent implements OnInit {
  public authors: Array<Author> = new Array<Author>();

  public author: Author;

  constructor(public cdr: ChangeDetectorRef) {
    let author1: Author = new Author();
    author1.firstName = 'John';
    author1.lastName = 'McCann';
    author1.authorId = '1';

    let author2: Author = new Author();
    author2.firstName = 'Anna';
    author2.lastName = 'Sarkisyan';
    author2.authorId = '2';

    let author3: Author = new Author();
    author2.firstName = 'Tyler';
    author2.lastName = 'Cooc';
    author2.authorId = '3';

    this.authors.push(author1);
    this.authors.push(author2);
    this.authors.push(author3);
  }

  public ngOnInit() {
    //this.lData = localData;
  }

  public handleCityChange($event: ISimpleComboSelectionChangingEventArgs) {
    console.log(JSON.stringify($event.newSelection));

    /*
    set the form control for authorId = $event.newSelection
    */
  }
}
