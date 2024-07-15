const heading = React.createElement("h1",{id:"heading"},"Hello World from React");
    //react needs a root where it can do all the dom manipulation
    /*React.createElement("div",{id:parent},)*/
    //{} it helps in giving attributes to the tag
    /*
    <div id="parent">
    <div id="child">
    <h1> i'm h1 tag</h1>
    <h2> i'm h2 tag </h1>
    </div> */
    const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"i'm an h2 tag")));
    const rootElement = document.getElementById("root");
    const root = ReactDOM.createRoot(rootElement);
    console.log(parent);
    root.render(parent);