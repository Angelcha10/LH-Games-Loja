import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaProdutoComponent } from './actualiza-produto.component';

describe('ActualizaProdutoComponent', () => {
  let component: ActualizaProdutoComponent;
  let fixture: ComponentFixture<ActualizaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
