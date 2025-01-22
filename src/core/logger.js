import * as Sentry from '@sentry/browser';
let instance = null;


export class Logger {
  constructor() {
    // console.clear();
  }

  /**
   * Get Logger Instance, Creates one if none exists
   * @return {Logger} Logger Instance
   */
  static get i() {
    if (!instance) {
      instance = new Logger();
    }
    return instance;
  }

  info(...message) {
    const label = 'adaptive-ui';
    console.info('%c '+(label?'['+label+']':'')+' ', 'background: #222; color: #fff', ...message);
  }

  // error
  error(...message) {
    const label = 'adaptive-ui';
    console.error('%c '+(label?'['+label+']':'')+' ', 'background: #222; color: #fff', ...message);
  }

  // todo warn
  warn(...message) {
    const label = 'adaptive-ui';
    console.warn('%c '+(label?'['+label+']':'')+' ', 'background: #222; color: #fff', ...message);
  }

  debug(...message) {
    if (window.process['env']['NODE_ENV'] === 'development') {
      console.debug(...message);
    }
  }

  alert(...message) {
    Sentry.captureException(new Error(message));
  }

  incompleteDev(...message) {
    this.warn('[INCOMPLETE DEV]', ...message);
  }

  deprecated(...message) {
    this.warn('[DEPRECATED API USAGE] ', ...message);
  }

  switchConfiguration(...message) {
    // use warning
    this.info('[SWITCH CONFIGURATION]', ...message);
  }
}
