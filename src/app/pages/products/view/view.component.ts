import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Comment } from '../../../shared/models/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { furniture } from '../../../shared/models/furniture';
import { FurnituresServiceService } from '../../../shared/services/furnitures.service.service';
import { CommentService } from '../../../shared/services/comment.service';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit,OnChanges {

  @Input() imageInput?: furniture;


  loadedImage?: string;
  comments: Array<Comment> = [];
  user?: User;

  commentsForm = this.createForm({
    id: '',
    username: '',
    comment: '',
    date: 0,
    imageId: this.imageInput?.name
  });

  constructor(private fb: FormBuilder,
     private router: Router,
     private furnitureService: FurnituresServiceService,
    private commentService: CommentService,
    private userService: UserService
    ){
    
  }
  ngOnChanges(): void{
    if(this.imageInput?.name){
      this.commentsForm.get('imageId')?.setValue(this.imageInput.name);
      this.furnitureService.loadImage(this.imageInput.img_url).subscribe(data => {
        this.loadedImage = data;
       /* var reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.loadedImage = reader.result as string;
        }*/
      });
      this.commentService.getCommentsByImageId(this.imageInput.name).subscribe(comments => {
        this.comments = comments;
      })
      
    }

  }
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.commentsForm.get('username')?.setValue(this.user?.username as string);
    }, error => {
      console.error(error);
    });
    
  }

  createForm(model: Comment): FormGroup {
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }

  addComment() {
    if (this.commentsForm.get('username') && this.commentsForm.get('comment')) {
      this.commentsForm.get('date')?.setValue(new Date().getTime());

      // SPREAD OPERATOR
      //this.comments.push({ ...this.commentsForm.value as Comment});
      

      // Object
      // this.comments.push(Object.assign({}, this.commentObject));
      
      this.commentService.create(this.commentsForm.value as Comment).then(_ => {
        this.router.navigateByUrl('/products/successful/' + this.commentsForm.get('username')?.value);
      }).catch(error => {
        console.error(error);
      });
    }
}

}
