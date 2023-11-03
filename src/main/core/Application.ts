import ApplicationWindow from "./ApplicationWindow";

export default class Application {
  public readonly window = new ApplicationWindow();
  // Add other APIs

  constructor() {
    // very strange error, if you don't use the constructor - the code is built crookedly
    console.log("Application initialized");
  }
}
