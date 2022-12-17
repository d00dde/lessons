class Observer {
  constructor() {
    this.store = {};
  }

  subscribe(eventName, cb) {
    if (this.store[eventName]) {
      this.store[eventName].push(cb);
    } else {
      this.store[eventName] = [cb];
    }
  }

  emit(eventName, payload) {
    const listeners = this.store[eventName];
    if (listeners) {
      for (let i=0; i<listeners.length; i++) {
        listeners[i](payload)
      }
    }
  }
}

export const observer = new Observer();
