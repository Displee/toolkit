import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilestoreIndexComponent } from './filestore-index.component';

describe('FileTreeComponent', () => {
    let component: FilestoreIndexComponent;
    let fixture: ComponentFixture<FilestoreIndexComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FilestoreIndexComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FilestoreIndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
