// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiUrl: 'http://localhost:8000',

  authorized_numbers: ['3505559154', '3043963973', '3217044082'],
  authorized_users: {
    '3505559154': {
      guest: 'Lucho',
      companion: ['Tefa', 'Tita']
    },

    '3043963973': {
      guest: 'Alejo',
      companion: ['Stefhania']
    },

    '3217044082': {
      guest: 'Mi mamá teresa',
      companion: ['Inv1', 'Zurdo', 'Johanna', 'Otro']
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
