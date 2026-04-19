import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigClient } from './app/app.config';
import { App } from './app/app';
import { environment } from './environments/environment';

const _environment = environment;
// 📌 Logs d'environnement (uniquement côté client)
if (_environment.production !== true) {
  console.info('🚀 Environnement : ' + _environment.name);
  console.info('🌐 Host :' + _environment.linkurl);
  console.info('📦 Application : ' + _environment.version);
}


bootstrapApplication(App, appConfigClient).catch(err =>
  console.error('❌ Erreur lors du bootstrap appConfigClient :', err)
);