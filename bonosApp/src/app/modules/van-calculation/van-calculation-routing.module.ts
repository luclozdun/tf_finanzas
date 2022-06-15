import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {
//     path: 'business-parameter', component: CrudGridComponent, canActivate: [ByteKeycloakGuard, ResourceAuthGuard],
//     resolve: { template: TemplateResolver },
//     data: {
//       innerTemplate: 'none',
//       program: 'businessParameter',
//       breadcrumb: 'businessParameterConfig.title',
//       roles: ['admin', 'user', 'config'],
//       resource: 'arm-business-parameter-resource',
//       scope: 'view',
//       scopes: ['view', 'update', 'delete', 'audit', 'create']
//     }
//   },
//   {
//     path: 'business-parameter/detail/:mode', component: BusinessParametersFormComponent, canActivate: [ByteKeycloakGuard, ResourceAuthGuard], canDeactivate: [DirtyGuard],
//     resolve: { record: RecordResolver },
//     data: {
//       program: 'businessParameter',
//       breadcrumb: 'businessParameterConfig.title',
//       roles: ['admin', 'user', 'config'],
//       resource: 'arm-business-parameter-resource',
//     }
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VanCalculationRoutingModule { }
