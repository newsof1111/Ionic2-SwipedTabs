import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild('mySlider') slider: Slides;

  public selected = 0;
  public indicator = null;
  public mySlideOptions2 =
  {
    loop: false,
    effect: 'slide',
    onSlideChangeStart: s => {

      let currentIndex = this.slider.getActiveIndex();

      if (currentIndex === 3) {
        this.selected = 3;
        this.indicator.style.webkitTransform = 'translate3d(300%,0,0)';
      }
      if (currentIndex === 2) {
        this.selected = 2;
        this.indicator.style.webkitTransform = 'translate3d(200%,0,0)';
      }
      if (currentIndex === 1) {
        this.selected = 1;
        this.indicator.style.webkitTransform = 'translate3d(100%,0,0)';
      }
      if (currentIndex === 0) {
        this.selected = 0;
        this.indicator.style.webkitTransform = 'translate3d(0%,0,0)';
      }
    },
    onTransitionStart: s => {
      let currentIndex = this.slider.getActiveIndex();

      if (currentIndex === 3) {
        this.selected = 3;
        this.indicator.style.webkitTransform = 'translate3d(300%,0,0)';
      }
      if (currentIndex === 2) {
        this.selected = 2;
        this.indicator.style.webkitTransform = 'translate3d(200%,0,0)';
      }
      if (currentIndex === 1) {
        this.selected = 1;
        this.indicator.style.webkitTransform = 'translate3d(100%,0,0)';
      }
      if (currentIndex === 0) {
        this.selected = 0;
        this.indicator.style.webkitTransform = 'translate3d(0%,0,0)';
      }
    }
  };

  ngAfterViewInit() {
    this.indicator = document.getElementById("indicatorFor4");
    if (this.platform.is('windows')) {
      this.indicator.style.opacity = '0';
    }
  }

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform = platform;
  }

  select(index) {
    this.selected = index;
    if (index === 3) {
      this.indicator.style.webkitTransform = 'translate3d(300%,0,0)';
    }
    if (index === 2)
      this.indicator.style.webkitTransform = 'translate3d(200%,0,0)';
    if (index === 1)
      this.indicator.style.webkitTransform = 'translate3d(100%,0,0)';
    if (index === 0)
      this.indicator.style.webkitTransform = 'translate3d(0%,0,0)';
    this.slider.slideTo(index, 500);
  }

  onSlideChanged($event) {
    if (!(((($event.touches.startX - $event.touches.currentX) <= 100) || (($event.touches.startX - $event.touches.currentX) > 0)) && (this.slider.isBeginning() || this.slider.isEnd()))) {
      this.indicator.style.webkitTransform = 'translate3d(' + (-($event.translate) / 4) + 'px,0,0)';
    }

  }

  panEvent(e) {
    let currentIndex = this.slider.getActiveIndex();
    if (currentIndex === 3) {
      this.selected = 3;
      this.indicator.style.webkitTransform = 'translate3d(300%,0,0)';
    }
    if (currentIndex === 2) {
      this.selected = 2;
      this.indicator.style.webkitTransform = 'translate3d(200%,0,0)';
    }
    if (currentIndex === 1) {
      this.selected = 1;
      this.indicator.style.webkitTransform = 'translate3d(100%,0,0)';
    }
    if (currentIndex === 0) {
      this.selected = 0;
      this.indicator.style.webkitTransform = 'translate3d(0%,0,0)';
    }
  }



}
