import { Component, OnInit } from '@angular/core';

import {
  bounceAnimation,
  flashAnimation,
  pulseAnimation,
  rubberBandAnimation,
  shakeAnimation,
  swingAnimation,
  tadaAnimation,
  wobbleAnimation,
  jelloAnimation,
  bounceInAnimation,
  bounceInDownAnimation,
  bounceInLeftAnimation,
  bounceInRightAnimation,
  bounceInUpAnimation,
  bounceOutAnimation,
  bounceOutDownAnimation,
  bounceOutLeftAnimation,
  bounceOutRightAnimation,
  bounceOutUpAnimation,
  fadeInAnimation,
  fadeInDownAnimation,
  fadeInDownBigAnimation,
  fadeInLeftAnimation,
  fadeInLeftBigAnimation,
  fadeInRightAnimation,
  fadeInRightBigAnimation,
  fadeInUpAnimation,
  fadeInUpBigAnimation,
  fadeOutAnimation,
  fadeOutDownAnimation,
  fadeOutDownBigAnimation,
  fadeOutLeftAnimation,
  fadeOutLeftBigAnimation,
  fadeOutRightAnimation,
  fadeOutRightBigAnimation,
  fadeOutUpAnimation,
  fadeOutUpBigAnimation,
  flipAnimation,
  flipInXAnimation,
  flipInYAnimation,
  flipOutXAnimation,
  flipOutYAnimation,
  lightSpeedInAnimation,
  lightSpeedOutAnimation,
  rotateInAnimation,
  rotateInDownLeftAnimation,
  rotateInDownRightAnimation,
  rotateInUpLeftAnimation,
  rotateInUpRightAnimation,
  rotateOutAnimation,
  rotateOutDownLeftAnimation,
  rotateOutDownRightAnimation,
  rotateOutUpLeftAnimation,
  rotateOutUpRightAnimation,
  slideInDownAnimation,
  slideInLeftAnimation,
  slideInRightAnimation,
  slideInUpAnimation,
  slideOutDownAnimation,
  slideOutLeftAnimation,
  slideOutRightAnimation,
  slideOutUpAnimation,
  zoomInAnimation,
  zoomInDownAnimation,
  zoomInLeftAnimation,
  zoomInRightAnimation,
  zoomInUpAnimation,
  zoomOutAnimation,
  zoomOutDownAnimation,
  zoomOutLeftAnimation,
  zoomOutRightAnimation,
  zoomOutUpAnimation,
  hingeAnimation,
  jackInTheBoxAnimation,
  rollInAnimation,
  rollOutAnimation,
  // other
  collapseAnimation,
  rotateAnimation,
  hueRotateAnimation,
  rollInOnEnterAnimation,
  fadeInRightOnEnterAnimation,
  rotateInUpLeftOnEnterAnimation
} from 'angular-animations';
import { state, style } from '@angular/animations';


@Component({
  selector: 'app-animaserv',
  templateUrl: './animaserv.component.html',
  styleUrls: ['./animaserv.component.css'],
  animations: [
    rubberBandAnimation({ anchor: 'rubber', direction: '=>', duration: 500 }),
    collapseAnimation(),
    fadeInRightOnEnterAnimation({ anchor: 'enter1', translate: '100%' }),
    rollInOnEnterAnimation({ anchor: 'enter2', translate: '800px', degrees: 360, delay: 250 }),
    rotateInUpLeftOnEnterAnimation({ anchor: 'enter3' }),
    bounceAnimation(),
    flashAnimation(),
    pulseAnimation({ anchor: 'pulse' }),
    rubberBandAnimation(),
    shakeAnimation(),
    swingAnimation(),
    tadaAnimation(),
    wobbleAnimation(),
    jelloAnimation(),
    bounceInAnimation(),
    bounceInDownAnimation(),
    bounceInLeftAnimation(),
    bounceInRightAnimation(),
    bounceInUpAnimation(),
    bounceOutAnimation(),
    bounceOutDownAnimation(),
    bounceOutLeftAnimation(),
    bounceOutRightAnimation(),
    bounceOutUpAnimation(),
    fadeInAnimation(),
    fadeInDownAnimation(),
    fadeInDownBigAnimation(),
    fadeInLeftAnimation(),
    fadeInLeftBigAnimation(),
    fadeInRightAnimation(),
    fadeInRightBigAnimation(),
    fadeInUpAnimation(),
    fadeInUpBigAnimation(),
    fadeOutAnimation(),
    fadeOutDownAnimation(),
    fadeOutDownBigAnimation(),
    fadeOutLeftAnimation(),
    fadeOutLeftBigAnimation(),
    fadeOutRightAnimation(),
    fadeOutRightBigAnimation(),
    fadeOutUpAnimation(),
    fadeOutUpBigAnimation(),
    flipAnimation(),
    flipInXAnimation(),
    flipInYAnimation({ anchor: 'flipY' }),
    flipOutXAnimation(),
    flipOutYAnimation(),
    lightSpeedInAnimation(),
    lightSpeedOutAnimation(),
    rotateInAnimation(),
    rotateInDownLeftAnimation(),
    rotateInDownRightAnimation(),
    rotateInUpLeftAnimation(),
    rotateInUpRightAnimation(),
    rotateOutAnimation(),
    rotateOutDownLeftAnimation(),
    rotateOutDownRightAnimation(),
    rotateOutUpLeftAnimation(),
    rotateOutUpRightAnimation(),
    slideInDownAnimation(),
    slideInLeftAnimation(),
    slideInRightAnimation(),
    slideInUpAnimation(),
    slideOutDownAnimation(),
    slideOutLeftAnimation(),
    slideOutRightAnimation(),
    slideOutUpAnimation(),
    zoomInAnimation(),
    zoomInDownAnimation(),
    zoomInLeftAnimation(),
    zoomInRightAnimation(),
    zoomInUpAnimation(),
    zoomOutAnimation(),
    zoomOutDownAnimation(),
    zoomOutLeftAnimation(),
    zoomOutRightAnimation(),
    zoomOutUpAnimation(),
    hingeAnimation(),
    jackInTheBoxAnimation(),
    rollInAnimation(),
    rollOutAnimation(),
    // other
    collapseAnimation(),
    rotateAnimation(),
    rotateAnimation({ anchor: 'rotate90', degrees: 90 }),
    hueRotateAnimation(),
    hueRotateAnimation({ anchor: 'hueButton', duration: 20000 })
  ]
})
export class AnimaservComponent implements OnInit {

  audiov = document.getElementsByClassName('bp1-avisualgroup');
  program = document.getElementsByClassName('bp1-programmgroup');
  conteud = document.getElementsByClassName('bp1-containgroup');


  animationState = false;
  hueState = false;
  flashState = false;

  constructor() { }

  getDelay(index, lenght) {
    if (index < lenght / 2 - 2) {
      return index * 100;
    } else {
      return lenght * 100 - index * 100;
    }
  }

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }

  ngOnInit(): void {

    console.log(this.audiov, this.conteud, this.program);
    this.animate();

  }


}
