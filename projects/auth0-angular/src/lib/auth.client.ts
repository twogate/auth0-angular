import { InjectionToken } from '@angular/core';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { AuthConfig } from './auth.config';
import useragent from '../useragent';

export class Auth0ClientFactory {
  static createClient(config: AuthConfig): Auth0Client {
    const { redirectUri, clientId, maxAge, ...rest } = config;

    return new Auth0Client({
      redirect_uri: redirectUri,
      client_id: clientId,
      max_age: maxAge,
      ...rest,
      auth0Client: {
        name: useragent.name,
        version: useragent.version,
      },
    });
  }
}

export const Auth0ClientService = new InjectionToken<Auth0Client>(
  'auth0.client'
);