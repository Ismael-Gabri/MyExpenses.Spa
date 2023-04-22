import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginAccountComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginAccountComponent;
  let fixture: ComponentFixture<LoginAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
