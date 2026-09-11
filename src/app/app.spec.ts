import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the contacts stored in memory as table rows', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = Array.from(compiled.querySelectorAll('tbody tr'));

    expect(rows).toHaveLength(3);
    expect(rows.map((row) =>
      Array.from(row.querySelectorAll('td')).map((cell) => cell.textContent?.trim()),
    )).toEqual([
      ['1', 'María López', 'maria@example.com'],
      ['2', 'Carlos Ruiz', 'carlos@example.com'],
      ['3', 'Ana Gómez', 'ana@example.com'],
    ]);
  });
});
