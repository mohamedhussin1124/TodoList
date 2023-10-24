const inputBox = document.getElementById("input-todo")
const addTodo = document.getElementById("add-todo-btn")
const listContener = document.getElementById("listContener")



     console.log("first")
    addTodo.addEventListener("click", function () {
        if (inputBox.value == "") {
            alert("Please Set Todo")
            
        
        } else {
            
            let Lists = document.createElement("li")
            Lists.innerHTML = inputBox.value
            Lists.classList.add("item-unchecked");
            Lists.classList.add("list-group-item");
            listContener.appendChild(Lists)
            
    
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        Lists.appendChild(span)
        inputBox.value = ""
        setlocalStorages(listContener)
    }
    })

listContener.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        if(e.target.classList.contains("item-unchecked"))
        {
            e.target.classList.add("item-checked")
            e.target.classList.remove("item-unchecked")
            setlocalStorages(listContener)
        }
        else{
            e.target.classList.add("item-unchecked")
            e.target.classList.remove("item-checked")
            setlocalStorages(listContener)
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        setlocalStorages(listContener)
    }
}, false)


function setlocalStorages(data) {
    let stor =localStorage.setItem("locStorage" , data)
}

function getlocalStorages(nameStorage) {
    let stor = localStorage.getItem(nameStorage)
    return stor
}