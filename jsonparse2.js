import ObjectManager from "jsonobject/index";

let myobj = {
    "name" : "Admin",
    "age" : 36,
    "rights" : [ "admin", "editor", "contributor" ],
    "hobby" : ["bat","ball","secret","badminton"]
}
for (let i in myobj.hobby){
    console.log(myobj.hobby[i]);
}