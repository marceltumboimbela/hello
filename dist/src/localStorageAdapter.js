"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocalStorageAdapter {
    static isSupported() {
        try {
            window.localStorage.setItem('adapter-check', 'adapter-check');
            window.localStorage.removeItem('adapter-check');
            return true;
        }
        catch (e) {
            return false;
        }
    }
    static setItem(key, value) {
        if (this.isSupported()) {
            window.localStorage.setItem(key, value);
        }
    }
    static getItem(key) {
        if (this.isSupported()) {
            return window.localStorage.getItem(key);
        }
    }
    static removeItem(key) {
        if (this.isSupported()) {
            window.localStorage.removeItem(key);
        }
    }
}
exports.default = LocalStorageAdapter;
