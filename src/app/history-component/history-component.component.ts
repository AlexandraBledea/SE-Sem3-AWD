import { Component } from '@angular/core';

@Component({
  selector: 'app-history-component',
  templateUrl: './history-component.component.html',
  styleUrls: ['./history-component.component.scss']
})
export class HistoryComponentComponent {

  scrollToNextSection() {
    const nextSection = document.getElementById('feeling-vs-emotion-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
