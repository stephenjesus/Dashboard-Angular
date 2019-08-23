// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  HOST: {
    link: 'https://us-central1-online-management-a7e84.cloudfunctions.net/api'
  },
  firebase: {
    apiKey: 'AIzaSyARCAFGED6HVLpqXDUPGUJ3XmC7SfmvL-Y',
    authDomain: 'online-management-a7e84.firebaseapp.com',
    databaseURL: 'https://online-management-a7e84.firebaseio.com',
    projectId: 'online-management-a7e84',
    storageBucket: 'online-management-a7e84.appspot.com',
    messagingSenderId: '747427385558',
    appId: '1:747427385558:web:ccf731dc2e65f663'
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
