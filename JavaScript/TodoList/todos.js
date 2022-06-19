let keyword = prompt("What would you like to do?")
const toDoList = []

while (keyword !== 'quit' && keyword !== 'q') {
    if (keyword === 'new') {
        newItem = (prompt("Enter new to do item:"));
        toDoList.push(newItem);
        console.log(`${newItem} added to the list`);
    } else if (keyword === 'list') {
        console.log('**********');
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`);
        }
        console.log('**********');
    } else if (keyword === 'delete') {
        let index = parseInt(prompt("which index would you like removed?"));
        if (!Number.isNaN(index) && index <= toDoList.length) {
            const deleted = toDoList.splice(index, 1);
            console.log(`${deleted} removed from the list`);
        } else {
            console.log('Invalid index entered');
        }
    }
    keyword = prompt("What would you like to do?");
}

console.log("Ok, exiting app now");