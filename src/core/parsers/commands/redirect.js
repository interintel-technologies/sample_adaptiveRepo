import {Command} from './command';

export class Redirect extends Command {
  get url() {
    return this.response;
  }
}
