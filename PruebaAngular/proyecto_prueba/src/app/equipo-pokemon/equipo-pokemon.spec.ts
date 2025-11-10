import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoPokemon } from './equipo-pokemon';

describe('EquipoPokemon', () => {
  let component: EquipoPokemon;
  let fixture: ComponentFixture<EquipoPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipoPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
