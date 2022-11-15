class AutoNews {
  constructor() {
    this.news = "";
    this.subscribers = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.subscribers.forEach((subs) => subs.inform(this));
  }

  register(observer) {
    this.subscribers.push(observer);
  }

  unregister(observer) {
    this.subscribers = this.subscribers.filter(
      (el) => !(el instanceof observer)
    );
  }
}

module.exports = AutoNews;
