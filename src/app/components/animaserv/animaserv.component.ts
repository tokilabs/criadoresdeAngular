import { fade, animServico } from './animations';
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
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-animaserv',
  templateUrl: './animaserv.component.html',
  styleUrls: ['./animaserv.component.css', './../../index/index.component.css'],
  animations: [
    fade,
    animServico,
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

  isOpen: boolean;
  isAv: boolean;
  isP: boolean;
  isC: boolean;
  animationState = false;
  hueState = false;
  flashState = false;

  constructor() {
    this.isOpen = false;
    this.isAv = false;
    this.isC = false;
    this.isP = false;
  }

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
    this.isOpen = true;
    this.rodando();
    this.animate();

  }

  isAud() {

    this.audiov[0].setAttribute('style', 'display: none');
    this.isAv = false;
    this.isOpen = false;

    setTimeout(() => {
      this.audiov[0].setAttribute('style', 'display: block');
      this.program[0].setAttribute('style', 'display: none');
      this.conteud[0].setAttribute('style', 'display: none');
      this.isAv = true;

    }, 1);
    // setTimeout(() => { this.isOpen = true; this.rodando(); }, 5000);
    console.log(this.isAv);
  }
  isProg() {

    this.program[0].setAttribute('style', 'display: none');
    this.isP = false;
    this.isOpen = false;

    setTimeout(() => {
      this.audiov[0].setAttribute('style', 'display: none');
      this.program[0].setAttribute('style', 'display: block');
      this.conteud[0].setAttribute('style', 'display: none');

      this.isP = true;

    }, 1);
    // setTimeout(() => { this.isOpen = true; this.rodando(); }, 5000);

    console.log(this.isOpen);
  }
  isCont() {
    this.conteud[0].setAttribute('style', 'display: none');
    this.isC = false;
    this.isOpen = false;
    setTimeout(() => {
      this.audiov[0].setAttribute('style', 'display: none');
      this.program[0].setAttribute('style', 'display: none');
      this.conteud[0].setAttribute('style', 'display: block');
      this.isC = true;
    }, 1);
    // setTimeout(() => { this.isOpen = true; this.rodando(); }, 5000);

    console.log(this.isC);
  }

  rodando() {
    if (this.isOpen === true) {
      this.audiov[0].setAttribute('style', 'display: block');
      this.program[0].setAttribute('style', 'display: none');
      this.conteud[0].setAttribute('style', 'display: none');
      this.isC = false;
      this.isAv = false;
      this.isP = false;

      setTimeout(() => {
        this.audiov[0].setAttribute('style', 'display: none');
        this.program[0].setAttribute('style', 'display: none');
        this.conteud[0].setAttribute('style', 'display: block');
        this.isC = true;
        this.isAv = false;
        this.isP = false;
        setTimeout(() => {
          this.audiov[0].setAttribute('style', 'display: none');
          this.program[0].setAttribute('style', 'display: block');
          this.conteud[0].setAttribute('style', 'display: none');
          this.isP = true;
          this.isAv = true;
          this.isC = false;

          setTimeout(() => {

            this.audiov[0].setAttribute('style', 'display: block');
            this.program[0].setAttribute('style', 'display: none');
            this.conteud[0].setAttribute('style', 'display: none');
            this.isAv = true;
            this.isP = true;

            this.isC = true;

            this.isOpen = true;
            this.rodando();

          }, 5000);
        }, 5000);
      }, 5000);
    } else return;

  }

}
