// its a react element which is actually a js object
// the createElement takes - tag type, attribute object, children
// if required to add nested elements, the third argument should be React element
// for siblings, the third argument simply is an array of React elements
const heading = React.createElement("h1", {}, "Hello world from React");


const parent = React.createElement("div", { id: "parent1" },
    [React.createElement("div", { id: "child1" },
        React.createElement("h1", {}, "I am h1 tag")),
     React.createElement("div", { id: "child2" },
        React.createElement("h1", {}, "I am h1 tag"))
    ])
// root level render container
const root = ReactDOM.createRoot(document.getElementById("root"));

// it renders the object as html element into the browser
root.render(parent);