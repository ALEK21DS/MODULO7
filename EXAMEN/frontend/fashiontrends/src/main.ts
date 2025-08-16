import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { InventarioComponent } from './app/components/inventario/inventario';

bootstrapApplication(InventarioComponent, appConfig)
  .catch((err) => console.error(err));
