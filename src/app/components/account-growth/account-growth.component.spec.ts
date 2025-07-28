import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGrowthComponent } from './account-growth.component';

describe('AccountGrowthComponent', () => {
  let component: AccountGrowthComponent;
  let fixture: ComponentFixture<AccountGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountGrowthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
