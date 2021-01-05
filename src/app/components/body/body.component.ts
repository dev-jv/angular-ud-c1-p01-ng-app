import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  view = true;
  phr: any = {
    mss: 'When you open your mind to the impossible, sometimes you find the truth.',
    aut: 'W.B.'
  };
  pers: string[] = ['William Bell', 'Olivia Dunham', 'Peter Bishop', 'Henrietta Bishop', 'Astrid Farnsworth'];
}
