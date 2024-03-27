import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-upload-files',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-multiple.component.html',
  styleUrl: './upload-multiple.component.scss'
})
export class UploadFilesComponent implements OnInit {
  selectedFiles?: FileList;
  message: string[] = [];

  fileInfos?: Observable<{ name: string; url: string }[]>;

  constructor(private uploadService: FileUploadService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

  extractImageUrl(fullUrl: string): string {
    const parts = fullUrl.split('/');
    return parts[parts.length - 1];
  }

  selectFiles(event: any): void {
    this.message = [];
    this.selectedFiles = event.target.files;
  }

  upload(file: File): void {
    if (file) {
      this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            const msg = file.name + ": Successful!";
            this.message.push(msg);
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          let msg = file.name + ": Failed!";

          if (err.error && err.error.message) {
            msg += " " + err.error.message;
          }

          this.message.push(msg);
          this.fileInfos = this.uploadService.getFiles();
        }
      });
    }
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(this.selectedFiles[i]);
      }
      this.selectedFiles = undefined;
    }
  }
  deleteImage(fileName: string): void {
    this.uploadService.deleteFile(fileName).subscribe({
      next: () => {
        // Update UI after successful deletion (optional)
        this.fileInfos = this.fileInfos?.pipe(
          map(files => files.filter(file => file.name !== fileName))
        );
      },
      error: (err) => {
        console.error(err);
        // Handle deletion error (optional)
      }
    });
  }
  
}