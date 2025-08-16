import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalDetail } from './sucursal-detail';

describe('SucursalDetail', () => {
  let component: SucursalDetail;
  let fixture: ComponentFixture<SucursalDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucursalDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucursalDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
