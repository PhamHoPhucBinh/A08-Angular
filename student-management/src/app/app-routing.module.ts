import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [{
  path: 'student',
  loadChildren: () => import('./student/student.module').then(module => module.StudentModule)
},
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then(module => module.TeacherModule)
  }, {
    path: 'post',
    loadChildren: () => import('./post/post.module').then(module => module.PostModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
