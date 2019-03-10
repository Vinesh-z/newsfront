import { FroalaEditorDirective } from 'angular-froala-wysiwyg';
import { LoginService } from './../../../login/login.service';
import { Location } from '@angular/common';
import { FacadeService } from './../../../services/facade.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.css']
})

export class PostsAddComponent implements OnInit {

  addPostForm: FormGroup;
  addPostImageForm: FormGroup;
  selectedFile: File;
  wrongData = [false, false, false, false];

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  /*onSaveImage(postId: String) {

  }*/

  allCategories;
  detailsCorrectlyFilled: boolean = true;
  allCategoriesLoaded: boolean = false;
  constructor(private loginService: LoginService, private changeDetector: ChangeDetectorRef, private location: Location, private router: Router, private facadeService: FacadeService) { }
  noFileSelected: boolean = false;



  public options: Object = {
    charCounterCount: true,
    imageUploadParam: 'image_param',
    imageUploadURL: 'assets/upload_image',
    imageUploadParams: { id: 'my_editor' },
    imageUploadMethod: 'POST',
    imageMaxSize: 5 * 1024 * 1024,
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],

    videoUploadParam: 'video_param',
    videoUploadURL: 'assets/upload_video',
    videoUploadParams: { id: 'my_editor' },
    videoUploadMethod: 'POST',
    //videoMaxSize: 50 * 1024 * 1024,
    videoAllowedTypes: ['webm', 'mp4', 'ogg'],



    events: {
      'froalaEditor.initialized': function () {
        console.log('initialized');
      },
      
      'froalaEditor.image.beforeUpload': function (e, editor, images) {
        if (images.length) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            const result = ev.target['result'];
            editor.image.insert(result, null, null, editor.image.get());
            console.log(ev, editor.image, ev.target['result'])
          };
          reader.readAsDataURL(images[0]);
        }
        return false;
      },
      'froalaEditor.video.beforeUpload': function (e, editor, videos) {
        if (videos.length) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            const result = ev.target['result'];
            editor.video.insert(result, null, null, editor.video.get());
            console.log(ev, editor.video, ev.target['result'])
          };
          reader.readAsDataURL(videos[0]);
        }
        return false;
      }
    }
  };





  ngOnInit() {
    this.facadeService.getCategories().subscribe(
      res => { this.allCategories = res; this.allCategoriesLoaded = true; },
      //error => { console.log(error); }
    )
    this.addPostForm = new FormGroup({
      postCategory: new FormControl(null, [Validators.required]),
      postTitle: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      location: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      postContent: new FormControl(null, [
        Validators.required,
        Validators.minLength(20)
      ])
    });
    this.addPostImageForm = new FormGroup({
      file: new FormControl(null, [
        Validators.required
      ]),
    });
  }

  onAddPost() {
    var formData = new FormData();
    if (!this.selectedFile) {
      this.noFileSelected = true;
    }
    else {
      this.noFileSelected = false;
      formData.append('postImage', this.selectedFile, this.selectedFile.name);
    }
    if (this.addPostForm.get('postCategory').invalid) {
      this.wrongData[0] = true;
    }
    else {
      this.wrongData[0] = false;
    }
    if (this.addPostForm.get('postTitle').invalid) {
      this.wrongData[1] = true;
    }
    else {
      this.wrongData[1] = false;
    }
    if (this.addPostForm.get('location').invalid) {
      this.wrongData[2] = true;
    }
    else {
      this.wrongData[2] = false;
    }
    if (this.addPostForm.get('postContent').invalid) {
      this.wrongData[3] = true;
    }
    else {
      this.wrongData[3] = false;
    }
    if (!this.addPostForm.get('postTitle').invalid && !this.addPostForm.get('postCategory').invalid && !this.addPostForm.get('location').invalid && !this.addPostForm.get('postContent').invalid) {
    
      if (this.noFileSelected == false) {
        if (this.loginService.userLoggedIn && this.loginService.getUserDataFromLocalStorage().res) {
        
          var requestData = {
            title: this.addPostForm.value.postTitle,
            content: this.addPostForm.value.postContent,
            categoryId: this.addPostForm.value.postCategory,
            location: this.addPostForm.value.location,
            userId: this.loginService.getUserDataFromLocalStorage().userId
          };
          this.facadeService.savePost(requestData).subscribe(
            res => {
              var uploadData = new FormData();
              uploadData.append('postImage', this.selectedFile);
              console.log(uploadData);
              this.facadeService.saveImage(uploadData, res.body._id).subscribe(
                response => {
                  this.router.navigateByUrl('/');
                },
                //err => {
                //  console.log(err);
                //}
              );
            },
           // error => { console.log(error); }
          )
        }
      }
    }
    else {
      this.detailsCorrectlyFilled = false;
    }
  }

  goBack() {
    this.location.back();
  }

/*
  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {

        this.addPostImageForm.patchValue({
          file: reader.result
        });
        this.changeDetector.markForCheck();
        console.log('haha');
      };
    }
  } */

}
