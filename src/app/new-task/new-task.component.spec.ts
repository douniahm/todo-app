import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskComponent } from './new-task.component';
import { By } from '@angular/platform-browser';

describe('NewTaskComponent', () => {
  let component: NewTaskComponent;
  let fixture: ComponentFixture<NewTaskComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Testing adding task
  it(`should call the onAddTask method`, async(() => {
    spyOn(component, 'onAddTask');
    el = fixture.debugElement.query(By.css('#new-task')).nativeElement;
    el.click();
    component.task.title = 'Testing Title';
    component.task.date = new Date('20/01/2020');
    component.task.details = 'Testing details';
    el = fixture.debugElement.query(By.css('#add-new-task')).nativeElement;
    el.click();
    expect(component.onAddTask).toHaveBeenCalled();
  }));

  it(`form should be valid`, async(() => {
    component.task.title = 'Testing Title';
    component.task.date = new Date('20/01/2020');
    component.task.details = 'Testing details';
    expect(component.onAddTask).toBeTruthy();
  }));

  it(`form should be invalid`, async(() => {
    component.task.title = '';
    component.task.date = new Date('20/01/2020');
    component.task.details = 'Testing details';
    expect(component.onAddTask).toBeFalsy();
  }));
});
