const parent = React.createElement("div", {
    id: "parent"
}, "hello world from React!", React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h1", {}, "i am an h2 tag")
]));
console.log(parent);
// const heading = React.createElement("h1",{},"hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
