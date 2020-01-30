# TodoList
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.
Using:
  - Rxjs for sharing data between components (Reactive Application)
  - Karma and Jasmine for unit tests
  - Angular Service Worker for Creating PWA application
## Install Dependencies
run `npm install` for installing http-server and service worker

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build
Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Development server
Run `http-server -p 8080 -c-1 dist/todo-list`. Navigate to `http://localhost:8080/`. The app will automatically 
load the new version if Service Worker detects a new **ngsw.json**. Thanks to **SwUpdate** service and its **checkForUpdate()** method:
```
if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

          if(confirm("New version available. Load New Version?")) {

              window.location.reload();
          }
      });
}
```
## Offline Mode
disable network interaction for your application. In Chrome:
  1- Select Tools > Developer Tools (from the Chrome menu located at the top right corner).
  2- Go to the Network tab.
  3- Check the Offline box.
Now the app has no access to network interaction.
On a refresh, the page loads normally, cause all of the files the browser needs to render this application are cached.

## Install the application
The app can be installed by clicking on "plus icon" in the search tab.

##Screens
  - Add new Task:
  https://user-images.githubusercontent.com/36522492/73453972-66001880-436d-11ea-926a-d46edc509db1.PNG
  - Tasks List
  https://user-images.githubusercontent.com/36522492/73453975-67c9dc00-436d-11ea-87b2-a35e8775df3a.PNG
  - Install Application
  https://user-images.githubusercontent.com/36522492/73453978-6b5d6300-436d-11ea-8fa3-cb9c9319b8d1.png
  
