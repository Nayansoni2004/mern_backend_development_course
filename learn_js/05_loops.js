//how for loop works...
for( var i=0 ; i<10 ; i++) {
    console.log(i + " Hello Friends !")
}
// OUTPUT :
// D:\mern\backend>node 05_loops.js
// 0 Hello Friends !
// 1 Hello Friends !
// 2 Hello Friends !
// 3 Hello Friends !
// 4 Hello Friends !
// 5 Hello Friends !
// 6 Hello Friends !
// 7 Hello Friends !
// 8 Hello Friends !
// 9 Hello Friends !

//never terminated infinite condition for loop
for(var j=0 ; j<10 ; ) {
    console.log(j + " Hello Duniya Waloon !");
}

// OUTPUT : 
// 0 Hello Duniya Waloon !
// 0 Hello Duniya Waloon !
// 0 Hello Duniya Waloon !
// ^C

//expression missing in for loop
for(var k=0 ; ; k++) {
    console.log(k + " Hi User ! can i crash system32")
}
// OUTPUT : 
// 338147 Hi User ! can i crash system32
// 338148 Hi User ! can i crash system32
// 338149 Hi User ! can i crash system32
// 338150 Hi User ! can i crash system32
// ^C

/**
 * While
 */
let hello = 0

while(hello<10) {
    console.log(hello + " Hello Aliens")
    hello++;
}
// OUTPUT : 
// 0 Hello Aliens
// 1 Hello Aliens
// 2 Hello Aliens
// 3 Hello Aliens
// 4 Hello Aliens
// 5 Hello Aliens
// 6 Hello Aliens
// 7 Hello Aliens
// 8 Hello Aliens
// 9 Hello Aliens

while(hello<10) {
    console.log(hello + " Hello Aliens")
}
// OUTPUT :
// 0 Hello Aliens
// 0 Hello Aliens
// 0 Hello Aliens
// ^C
// _______________________________________________________________________________________________________________________________
/**
 * Continue And Break Statement...
 */
//que : print only even numbers using continue statement?
for(var i=0 ; i <= 50 ; i++) {
    if(i % 2 != 0) {
        continue;
    }
    process.stdout.write(i + " ");
}
// OUTPUT : 0 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50

//same question using nested loop
for(var i=0 ; i<10 ; i++) {
    for(var j=0 ; j<10 ; j++) {
        if(j % 2 != 0) {
            continue
        }
        process.stdout.write(j + " ")
    }
}
// OUTPUT : 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8

/**
 * Break
 */
for(var i=0 ; i <10 ; i++) {
    if(i == 5) {
        break
    }
    console.log("Hey " + i + " let's date !")
}
// OUTPUT : 
// Hey 0 let's date !
// Hey 1 let's date !
// Hey 2 let's date !
// Hey 3 let's date !
// Hey 4 let's date !

// Note:(1)continue keyword continues the execution of code skipping particular 
//         steps. 
//      (2)break keyword stops the execution of code when the break statement 
//         has arrived, then rest of steps are not executed. 