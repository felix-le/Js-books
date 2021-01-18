# Classes
Classes are in fact "special function", and just as you can define function expressions and function declarations, the class syntax has two components: *class expressions* and *class declarations*;

> function declarations:
```bash
function greeting(){
  console.log("Hello")
}
```

> function expressions:
```bash
const greeting = function(){
  console.log("Hello")
}

const greeting = () =>{
  console.log("Hello")
}
```

## Define class

### Class Declarations
```bash
class Project{
  # code
}
# console.log(Project.name) > Project
# create new instance:
const project = new Project ();
```
### class expressions
```bash
const Project = class{
  # code
}
# > console.log(Project.name) > Project

const Project = class MyProject{
  # code
}
# > console.log(Project.name) > MyProject
```

## Inside class:

```bash
class Project{
  constructor(name, description){
    this.name = name;
    this.description = description;
  }
}

class Project{
  # declare properties first
  name
  description
  constructor(name, description){
    this.name = name;
    this.description = description;
  }
}
# use:

const project = new Project('Big Project', 'this is a sample project')
```
### Class Methods
```bash
class Project {
  constructor (name, description){
    this.name = name;
    this.description = description;
  }

  printInfo(){
    console.log(`project name ${this.name} has description ${this.description}`)
  }
}
# use

const project = new Project('Big Project', 'this is a sample project')

project.printInfo()
# project name Big Project has description This is a sample project
```
### Getter & Setter
Remember that the function setter name and getter name must be the same.
```bash
class Project{
  constructor(name, description){
    this.name = name;
    this.description = description;
  }

  get projectName(){
    return this.name
  };
  set projectName(name){
    this.name = name;
  }

  get projectDescription(){
    return this.description;
  };

  set projectDescription(description){
    this.description = description;
  }
  console.log(project.projectName)
  console.log(project.projectDescription)
  # project.projectName = 'Another name of project'
  # project.projectDescription = 'This is a another long description for project
}
```
### Static methods
``` bash
class Project {
  # code
  static sayHello(){
    console.log('This is a console inside a static method');
  }
}
# use

Project.sayHello();
```

## Inheritance

```bash
class Project {
  constructor (name, description){
    this.name = name;
    this.description = description;
  }

  printInfo(){
    console.log(`project name ${this.name} has description ${this.description}`)
  }
}

class SecretProject extends Project {
  constructor(name, description, password){
    super(name, description)
    this.password = password;
  }
}

class SecretProject extends Project{
  # code
  printInfo(){
    super.printInfo()
     console.log('And the password of this project is: ', this.password)
  }
}

```
