function f(value: string): any {
  return function (target, name, stuff) {
    console.log(value, target, name, stuff);
  };
}

@f('Hello')
class X {}
