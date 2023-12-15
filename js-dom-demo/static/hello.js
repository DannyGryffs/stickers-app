console.log("It's working!")

console.log("Displaying info using the console object methods");

const myObj = {
    fruits: ["apples", "berries", "cherries"],
    veggies:["broccoli", "kale", "yams", "carrots"]
}

console.table(myObj)
console.log(console)

console.error("it's broken")

console.log(window.location.href)
console.log(window)

const html = {
    head: {
        title: "Document"
    },
    body: {
        h1: "First Heading",
        h2: {
            textContent: "Second Heading"

            }
        }
}
console.log(html.body.h2)