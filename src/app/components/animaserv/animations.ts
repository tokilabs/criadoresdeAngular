import {
  state,
  animate,
  animateChild,
  animation,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

export interface IBounceInRightAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 3000px
   */
  translate?: string;
}

const bounceInRight = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ transform: 'translate3d(-25px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ transform: 'translate3d(10px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
          style({ transform: 'translate3d(-5px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
          style({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ visibility: 'visible', opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      )
    ])
  );

const DEFAULT_DURATION = 1000;

export function bounceInRightAnimation(options?: IBounceInRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceInRight', [
    transition(
      '0 => 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(bounceInRight()),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
          translate: (options && options.translate) || '3000px'
        }
      }
    )
  ]);
}

export function bounceInRightOnEnterAnimation(options?: IBounceInRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceInRightOnEnter', [
    transition(
      ':enter',
      [
        // style({ background: 'red' }),
        style({ visibility: 'hidden' }),
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(bounceInRight()),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
          translate: (options && options.translate) || '3000px'
        }
      }
    )
  ]);
}



export let fade = trigger('fade', [
  state('void', style({
    opacity: 0
  })),
  transition('void <=> *', [
    animate(5000),
  ])
]);


export let animServico = trigger('clickAvisual', [
  state('on', style({
    display: 'block',
  })),
  state('of', style({
    display: 'block',
  })),
  transition('on <=> of', [
    animate(5000),
  ])
]);
