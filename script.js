var arr = [{ id: 1, name: "john", age: 18, profession: "developer" }, { id: 2, name: "jack", age: 20, profession: "developer" }, { id: 3, name: "karen", age: "19", profession: "admin" }]


const parentdiv = document.getElementById('cardcon')

const createElement = (list) => {
    list.forEach(element => {
        const carddiv = document.createElement('div')
        carddiv.classList.add('card')
        const id = document.createElement('p')
        const name = document.createElement('p')
        const profe = document.createElement('p')
        const age = document.createElement('p')
        id.innerHTML = element.id
        name.innerHTML = `Name: ${element.name}`
        profe.innerHTML = `Profession: ${element.profession}`
        age.innerHTML = `Age: ${element.age}`
        carddiv.appendChild(id)
        carddiv.appendChild(name)
        carddiv.appendChild(profe)
        carddiv.appendChild(age)
        parentdiv.appendChild(carddiv)
    });
}

createElement(arr)

const filterResult = () => {
    const profession = document.getElementById("profession").value
    if (profession == "Profession") {
        alert("Please select a profession")
        return
    }

    else {
        parentdiv.innerHTML = ' '
        var newarr = arr.filter((item) => {
            return item.profession == profession
        })
        createElement(newarr)
    }
}

const addNewUser = () => {
    const username = document.getElementById("uname").value
    const userProfession = document.getElementById("uprofe").value
    const userage = document.getElementById("uage").value

    if (username === "" || userProfession === "" || userage === "") {
        alert("Please fill all the fields")
    } else {
        var newUser = { id: arr[arr.length - 1].id + 1, name: username, profession: userProfession, age: userage }
        arr.push(newUser)
        parentdiv.innerHTML = ' '
        createElement(arr)
    }
}
