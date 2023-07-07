class User {
    static userCount = 10;

    static findUserCount = () => {
      console.log(this.userCount);
    }

    getUserCount = () => {
      console.log(User.userCount);
    }
}

//we can directly access static properties and functions
console.log(User.userCount);
User.findUserCount();

//Accessing a static properety from a non-static function:
const user = new User();
user.getUserCount();