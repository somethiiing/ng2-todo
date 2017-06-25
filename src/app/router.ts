import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NoteCardContainer, About } from './containers';
import { App } from './app.component';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  { path: '', component: NoteCardContainer },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' }
]);

// export const routes: ModuleWithProviders = RouterModule.forRoot([
//   {
//     path: '',
//     component: App,
//     children: [
//       { path: '', component: NoteCardContainer },
//       { path: 'about', component: About }
//     ]
//   },
//   { path: '**', redirectTo: '' }
// ]);


