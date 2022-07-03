function read() {
    const items=fs.readFileSync("./new", "utf-8");
    console.log("items",items)
   
}

module.exports = read;