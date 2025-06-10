import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStock } from './table-stock';

describe('TableStock', () => {
  let component: TableStock;
  let fixture: ComponentFixture<TableStock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableStock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableStock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
