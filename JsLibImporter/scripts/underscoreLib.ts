
// Need to declare all methods of Underscore library here if you want strong typing and then in your TypeScript file you can use it like this:
//
//    import underscore = module('underscoreLib');
//    var _:underscore = underscore;
//
// If you don't need strong typing you don't need to declare all methods here. Just do this in your TypeScript files where you need Underscore
//
//    import underscore = module('underscoreLib');
//    var _:any = underscore;

export function each(obj: any, f: Function) { }