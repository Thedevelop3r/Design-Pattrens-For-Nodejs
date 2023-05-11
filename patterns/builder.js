// user class
class User {
  constructor(name) {
    this.name = name;
  }
}
// user builder class

// Builder pattren is used to manage multiple complex properties of an object.

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }
  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }
  setAddress(address) {
    this.user.address = address;
    return this;
  }
  build() {
    return this.user;
  }
}

module.exports = { UserBuilder };

//-- Usage
let user = new UserBuilder('bilal')
  .setAge(12)
  .setAddress('Defence street 4')
  .setPhone('0316-3129818')
  .build();

console.log('\n\n\n');
console.log(user);
console.log('\n\n\n');

// User class with optional paramters

class OptionalUser {
  constructor(name, { age=false, phone=false, address=false }) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

// usage
console.log(new OptionalUser('bob',{age:12, address:'market 12', phone:'029199'}));
