const SOME_KEY = 'any_value';

let profile = {
    age: 35,
    name: 'john',
    sayHi: function(){
        console.log(this.name,"반가워");
    },
    [SOME_KEY]:'value',
}

console.log(profile.age);
profile.sayHi;

console.dir(profile, 3);