const mydatabase = [
    {id : 1, name : "jakir"},
    {id : 2, name : "apple"},
    {id : 3, name : "moin"},
    {id : 4, name : "emon"}
]

const getter = () => {
    return mydatabase
}

const setter = (name) => {
 mydatabase.push({id:Math.floor(Math.random() * 10),name : name})
}

module.exports = {
    getter,
    setter
}