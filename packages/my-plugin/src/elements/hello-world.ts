import { bindable, inlineView, useView } from 'aurelia-framework';

@useView(PLATFORM.moduleName("./hello-world.html"))
export class HelloWorld {
  @bindable public message: string = '';
}
