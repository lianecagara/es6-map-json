const fs = require("fs");

class JsonMap extends Map {
  constructor(filepath, replacer, indent, cwd) {
    super();
    this.filepath = cwd + "/" + filepath;
    this.replacer = replacer || null;
    this.indent = indent ?? 2;
    this.loadFromFile();
    const self = this;
    return new Proxy(this, {
      get(target, prop, receiver) {
        self.loadFromFile();
        if (typeof target[prop] === "function") {
          return (...args) => {
            try {
              const result = target[prop].apply(target, args);
              self.saveToFile();
              return result;
            } catch (error) {
              throw error;
            }
          };
        }
        return Reflect.get(target, prop, receiver);
      },
    });
  }
  loadFromFile() {
    try {
      const data = fs.readFileSync(this.filepath, "utf8");
      const parsedData = JSON.parse(data);
      this.clear();
      for (const [key, value] of Object.entries(parsedData)) {
        this.set(key, value);
      }
    } catch (error) {
      throw error;
    }
  }

  saveToFile() {
    try {
      const data = JSON.stringify(Object.fromEntries(this), this.replacer, this.indent);
      fs.writeFileSync(this.filepath, data, "utf8");
    } catch (error) {
      throw error;
    }
  }
}
module.exports = JsonMap;
