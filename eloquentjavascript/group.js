// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

class Group {
  constructor(){
    this.group = [];
  }

  add(item){
    if(!this.group.includes(item)){
      this.group.push(item);
    }
  }

  delete(item){
    let index = this.group.indexOf(item);
    if(index !== -1){
      this.group.splice(index, 1);
    }
  }
  has(item){
    return this.group.includes(item);
  }

  static from(a){
    let g = new Group();
    for (let item of a){
      g.add(item);
    }
    return g;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  };
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
// Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
// Iterable groups
// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.
class GroupIterator{
  constructor(o){
    this.i = 0;
    this.group = o.group;
  }

  next(){
    if(this.i === this.group.length || this.i > 10) return{done: true};

    let value = this.group[this.i];
    this.i ++;
    return {value, done: true};
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}