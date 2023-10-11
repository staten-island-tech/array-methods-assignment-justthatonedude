const sillyism = [
    {
        Name : "yes",
        numArray : ["2314","23432","5436"],
        dumb : true,
    },
    {
        Name: "no",
        numArray : ["232","12034","1203"],
        dumb: false,
    },
]
function printName(sillyism){
    sillyism.forEach((obj) => console.log(obj.Name));
};
function printnumArray(sillyism){
    sillyism.forEach((obj) => obj.numArray.forEach((num) => console.log(num)));
};

function printnewArray(sillyism){
    const newArray = sillyism.filter((obj)=>obj.dumb === true);
    newArray.forEach((obj) => obj.numArray.forEach((num) => console.log(num)));
};

printnewArray(sillyism)
printnumArray(sillyism)
printName(sillyism)