import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaUploadContentComponent } from './media-upload-content.component';
import { E2EImportsModule } from 'e2e-imports.module';

describe('MediaUploadContentComponent', () => {
    let component: MediaUploadContentComponent;
    let fixture: ComponentFixture<MediaUploadContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [E2EImportsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MediaUploadContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
