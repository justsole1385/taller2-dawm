import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRow } from './contact-row';

describe('ContactRow', () => {
  let component: ContactRow;
  let fixture: ComponentFixture<ContactRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactRow],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactRow);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('contact', {
      id: 1,
      name: 'María López',
      email: 'maria@example.com',
    });
    await fixture.whenStable();
  });

  it('should render the supplied contact', () => {
    fixture.detectChanges();

    const cells = Array.from(
      fixture.nativeElement.querySelectorAll('td') as NodeListOf<HTMLTableCellElement>,
    ).map((cell) => cell.textContent?.trim());

    expect(cells).toEqual(['1', 'María López', 'maria@example.com']);
  });
});
