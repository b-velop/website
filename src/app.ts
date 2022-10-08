import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import '@fortawesome/fontawesome-free/js/all.min';

export class App {
  public message = 'Hello World!';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.options.pushState = false;
    config.title = 'b-velop';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./resources/home.html') },
      { route: ['impressum'], name: 'impressum', moduleId: PLATFORM.moduleName('./resources/impressum.html') }
    ]);
  }
}
