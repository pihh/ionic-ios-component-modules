import { TestBed } from '@angular/core/testing';

import { ImageDarknessDetectionService } from './image-darkness-detection.service';

describe('ImageDarknessDetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageDarknessDetectionService = TestBed.get(ImageDarknessDetectionService);
    expect(service).toBeTruthy();
  });
});
