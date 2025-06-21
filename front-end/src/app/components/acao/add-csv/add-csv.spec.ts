import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCsv } from './add-csv';

describe('AddCsv', () => {
  let component: AddCsv;
  let fixture: ComponentFixture<AddCsv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCsv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCsv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
