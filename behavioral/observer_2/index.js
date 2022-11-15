const AutoNews = require("./AutoNews");
const Person = require("./Person");

const autoNews = new AutoNews();

const alex = new Person("Alex");
const john = new Person("John");

autoNews.register(alex);
autoNews.register(john);

autoNews.setNews("New Tesla price is 40000!!!");
