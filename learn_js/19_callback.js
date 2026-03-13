function greet(name, callback) {
    const greeting = "Hello " + name
    callback(greeting)
}

function displayGreeting(message) {
    console.log(message)
}

greet("anoop", displayGreeting)

// OUTPUT- Hello anoop



/**
 * callback hell | pyramid of doom
 */
getUser(function(user) {
    getposts(user.id, function(post) {
        displayUserInfoAndPost(user, posts, function() {
            console.log("User info and posts successfully displayed")
        })
    })
})
/*when fun. is passed as argument to another function and creates a series of passing many fun.s as argument to
 next func. is called callback hell ya pyramid of doom*/