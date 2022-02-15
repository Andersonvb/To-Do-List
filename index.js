function addBtn() {
    document.querySelector(".add-menu").classList.remove("invisible");
}

function addTask() {
    if (document.querySelector(".add-menu__input").value.replace(/\s/g,"") == "") {
        document.querySelector(".empty-input").classList.remove("invisible");
        return;
    }

    var text = document.querySelector(".add-menu__input").value;

    var item = document.createElement("div");
    item.classList.add("item");

    var inputTask = document.createElement("input");
    inputTask.classList.add("item__checkbox");
    inputTask.setAttribute("type", "checkbox");

    var labelTask = document.createElement("label");
    labelTask.classList.add("item__label");
    labelTask.innerHTML = text;

    var deleteTask = document.createElement("a");
    deleteTask.classList.add("item__trash");
    deleteTask.setAttribute("onclick", "deleteTask(this)");
    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid");
    deleteIcon.classList.add("fa-trash-can");
    deleteTask.appendChild(deleteIcon);

    item.appendChild(inputTask);
    item.appendChild(labelTask);
    item.appendChild(deleteTask);

    document.querySelector(".item-list").insertBefore(item, document.querySelector("#item__add-task"));
    document.querySelector(".add-menu__input").value = "";
    document.querySelector(".add-menu").classList.add("invisible");
}

function cancelTask() {
    document.querySelector(".add-menu").classList.add("invisible");
}

function deleteTask(task) {
    task.parentElement.remove();
}

function emptyBtn() {
    document.querySelector(".empty-input").classList.add("invisible");
}