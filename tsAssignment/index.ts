interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

class UserManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    removeUser(id: number): void {
        this.users = this.users.filter((user) => user.id !== id);
    }

    getUser(id: number): User | undefined {
        for (let user of this.users) {
            if (user.id === id) {
                return user;
            }
        }
    }

    getAllUsers(): User[] {
        return this.users;
    }

    greetUser(name: string = "Guest"): string {
        const user = this.users.find((u) => u.name === name);
        return user ? `Hello ${user.name}` : "Hello Guest";
    }

    printUserDetails(targetUser: User): void {
        for (let user of this.users) {
            if (user.id === targetUser.id) {
                const { id, name, email, age } = user;
                console.log(id, name, email, age);
                return;
            }
        }
        console.log("User not found");
    }

}

const obj1: User = {
    id: 5,
    name: "aman",
    email: "aman@gmail.com",
    age: 20,
};

const obj2: User = {
    id: 10,
    name: "dhruv",
    email: "dhruv@gmail.com",
    age: 22,
};

const obj3: User = {
    id: 15,
    name: "Harsh",
    email: "harsh@gmail.com",
    age: 25,
};
const person1 = new UserManager();
person1.addUser(obj1);
person1.addUser(obj2);
person1.addUser(obj3);
console.log(person1.getAllUsers());

console.log(person1.getUser(10));
person1.removeUser(10);

console.log(person1.getAllUsers());

console.log(person1.greetUser("fdf"));
console.log(person1.greetUser("aman"));

person1.printUserDetails(obj1)