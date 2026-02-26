class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.size >= this.capacity) {
      // take out some element
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    } else {
      if (this.cache.has(key)) {
        delete this.cache.get(key);
      }
    }
    this.cache.set(key, value);
  }
}

const cache = new LRUCache(2);
cache.put("a", "A");
