function firstPart(name) {
    console.log (`Pass the Test ${name}`)
}

function receivesAFunction (firstPart) {
    console.log("Part One")
  
    firstPart("Luis");
}



function returnsANamedFunction() {
    return (function firstPart(){

    })
}
   
function returnsAnAnonymousFunction () {
    return (()=> console.log("test"))
}