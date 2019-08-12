import { bindable, inlineView } from 'aurelia-framework';

/*
@inlineView(`
  <template>
    <h3 class="hello-world">Hello world \${message}</h3>
  </template>
`)
*/
export class HelloWorld {
  @bindable public message: string = '';
}
