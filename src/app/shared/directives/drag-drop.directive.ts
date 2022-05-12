import { Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './file-handle.interface';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  @Output() files: EventEmitter<FileHandle[]> = new EventEmitter();

  // @HostBinding('style.background') private background = '#eee';

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener('dragover', ['$event'])
  onDragOver($event: DragEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event: DragEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  onDrop($event: DragEvent): void {
    $event.preventDefault();
    $event.stopPropagation();

    const files: FileHandle[] = [];

    for(let i = 0; i < ($event as any).dataTransfer.files.length; i++) {
      const file = ($event as any).dataTransfer.files[i];
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      files.push({ file, url });
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }

}
