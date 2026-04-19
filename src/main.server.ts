import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { appConfigClient } from './app/app.config';
import { serverRoutes } from './app/app.routes.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;


export const appConfigServer: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes))],
};

// Export as both names for compatibility
export const globaleConfig = mergeApplicationConfig(appConfigClient, appConfigServer);
