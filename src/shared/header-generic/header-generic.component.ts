import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-generic',
  templateUrl: './header-generic.component.html',
  styleUrls: ['./header-generic.component.scss'],
})
export class HeaderGenericComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';

  @Input() prevLink: string = '/';
  @Input() nextLink: string = '/';

  @Input() prevLabel: string = 'Précédent';
  @Input() nextLabel: string = 'Suivant';
}
