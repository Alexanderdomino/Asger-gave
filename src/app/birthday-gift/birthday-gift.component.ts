import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday-gift',
  templateUrl: './birthday-gift.component.html',
  styleUrls: ['./birthday-gift.component.css']
})
export class BirthdayGiftComponent {
  audio: HTMLAudioElement = new Audio();
  audioSource = './assets/music/frank sinatra - new yorknew york (djason remix) [TubeRipper.com].mp3';
  presentX = 0;
  presentY = 0;
  activationCode = 'EAI6I-7Q23F-FQPTM';
  activationCodeVisible = false;
  message = 'Tryk på gaven';

  movePresent() {
    const maxWidth = window.innerWidth - 200;
    const maxHeight = window.innerHeight - 200;

    this.presentX = Math.random() * maxWidth;
    this.presentY = Math.random() * maxHeight;
  }
  playSound() {
    this.audio.src = this.audioSource;
    this.audio.load();
    this.audio.play();
  }

  showActivationCode() {
    this.activationCodeVisible = true;
    this.message = 'Tillykke med den store dag hr. Tougaard!';
  }
}
