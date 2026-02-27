// {

//     event1: [listeners],
//     event2: []
// }

class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  subscribe(event, listener) {
    if (this.events.has(event)) {
      this.events.get(event).push(listener);
      return;
    }
    this.events.set(event, [listener]);
  }
  unsubscribe(event, listener) {
    if (this.events.has(event)) {
      const filteredListeners = this.events
        .get(event)
        .filter((l) => l !== listener);

      if (filteredListeners.length === 0) this.events.delete(event);
      else this.events.set(event, filteredListeners);
    }
  }
  emit(event, ...args) {
    this.events.get(event).forEach((listener) => {
      listener(...args);
    });
  }
}

const callback1 = (a, b) => a + b;
const emitter = new EventEmitter();
emitter.subscribe("event1", callback1);
emitter.subscribe("event1", 1, 2);
emitter.unsubscribe("event1");
