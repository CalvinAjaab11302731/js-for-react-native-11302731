function createUserProfiles (originalNames,modifiedNames){
    if (originalNames.length !== modifiedNames.length){
        throw new Error("Two arrays must have the same lenght");
    }
    return originalNames.map((name,index)=>({
        id: index+1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}
const originalNames = ["Neeto","Calvin","Google"];
const modifiedNames = ["NEETO","calvin","CHARLIE"];
const userProfiles = createUserProfiles(originalNames,modifiedNames);
console.log(userProfiles);