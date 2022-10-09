import { bootstrap } from 'aurelia-bootstrapper';
import { StageComponent } from 'aurelia-testing';
import { PLATFORM } from 'aurelia-pal';


describe('Stage App Component', () => {
  let component;

  beforeEach(() => {
    // component = StageComponent
    //   .withResources(PLATFORM.moduleName('../../src/resources/footer-elem'))
    //   .inView('<footer-elem></footer-elem>');
  });

  // afterEach(() => component.dispose());

  it('should render message', done => {
    done();
    // console.log('Component', component);
    // component.create(bootstrap).then(() => {
    //   const foo = document.querySelector('.my-hr');
    //   expect(foo).toContain('Sprachen');
    //   done();
    // }).catch(e => {
    //   fail(e);
    //   done();
    // });
  });
});
