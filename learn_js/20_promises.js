/**
 * promise from simran
 */
const simranPromise = new Promise((resolve, reject) => { //calllback fn.
    let parentDecision = true
    if(parentDecision) {
        resolve("Yayy, ab shadi ki taiyari kro!")
    } else {
        reject("papa ne IAS dhoond lia hai !, Sorry ...")
    }
});

simranPromise.then((msg) => {
    console.log("simran message: ", msg)
    console.log("Let's book the wedding venue")
}).catch((msg) => {
    console.log("simran message: ", msg)
    console.log("Tinder kaha ho yaar !")
}).finally(() => console.log("chalo life mein clarity mili ")) //finally hamesa run hoga

// OUTPUT
// simran message:  papa ne IAS dhoond lia hai !, Sorry ...
// Tinder kaha ho yaar !





//suppose three frnd make a promise to plan a Goa trip...
const f1Promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        if(Math.random() > 0.5) {
            resolve("Friend 1:Hey, I am ready for a Goa trip")
        } else {
            reject("Friend 1:Sorry bhai papa ne mana kr dia")
        }

    }, 3000)
})

const f2Promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        if(Math.random() > 0.5) {
            resolve("Friend 2:Hey, I am ready for a Goa trip")
        } else {
            reject("Friend 2:Sorry yar mere exams ha")
        }

    }, 2000)
})


const f3Promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        if(Math.random() > 0.5) {
            resolve("Friend 3:Hey, I am ready for a Goa trip")
        } else {
            reject("Friend 3:Sorry mai nhi aa rha hoon")
        }

    }, 2000)
})


Promise.all([f1Promise, f2Promise, f3Promise]).then((msg) => {
    console.log(msg)
    console.log("Yay we are going Goa !")
}).catch((msg) => {
    console.log(msg)
    console.log("tum log churi pen lo re apne haatho mai !")
})


//_______________________________________________________________________________________________________________
const gf1Promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        if(Math.random() > 0.5) {
            resolve("GF1: Hey I'll come for dinner")
        } else {
            reject("GF1: Phone is unreachable!")
        }

    }, 3000)
})

const gf2Promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        if(Math.random() > 0.5) {
            resolve("GF2: Hey I'll come for dinner")
        } else {
            reject("GF2: Nayan i am with someone else!")
        }

    }, 3000)
})

const gf3Promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        if(Math.random() > 0.5) {
            resolve("GF3: Hey I'll come for dinner")
        } else {
            reject("GF3: Nayan i hate you!")
        }

    }, 3000)
})

//if anyone gets agree
Promise.any([gf1Promise, gf2Promise, gf3Promise]).then((result) => {
    console.log(result)
    console.log("My valentine day is sorted, i have gf")
}).catch((result) => {
    console.log(result)
    console.log("I am joining bajrangdal")
})

// OUTPUT:
// GF1: Hey I'll come for dinner
// My valentine day is sorted, i have gf
