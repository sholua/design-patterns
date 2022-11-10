class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Access denied!");
    }
  }

  authenticate(password) {
    return password === "Ilon";
  }

  close() {
    this.door.close();
  }
}

module.exports = SecuritySystem;
