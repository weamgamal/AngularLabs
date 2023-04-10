import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { CommentsComponent } from './comments/comments.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { NotesComponent } from './notes/notes.component';
const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "Products", component: ProductsComponent },
  { path: "Product/:id", component: ProductDetailesComponent },
  { path: "Users", component: UserComponent },
  { path: "Posts", component: PostsComponent },
  { path: "Comments/:id", component: CommentsComponent },
  { path: "Login", component: LogInComponent },
  { path: "Register", component: RegisterComponent },
  { path: "Notes", component: NotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
