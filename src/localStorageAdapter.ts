export default class LocalStorageAdapter {
  static isSupported() {
    try {
      window.localStorage.setItem('adapter-check', 'adapter-check');
      window.localStorage.removeItem('adapter-check');
      return true;
    } catch(e) {
      return false;
    }
  }

  static setItem(key: string, value: string) {
    if(this.isSupported()) {
      window.localStorage.setItem(key, value);
    }
  }

  static getItem(key: string) {
    if(this.isSupported()) {
      return window.localStorage.getItem(key);
    }
  }

  static removeItem(key: string) {
    if(this.isSupported()) {
      window.localStorage.removeItem(key);
    }
  }
}
