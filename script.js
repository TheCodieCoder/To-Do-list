let plusBtn = document.querySelector(".plus-sign")
let listContainer = document.querySelector(".listContainer")
let inputBox = document.querySelector(".enter-task")


plusBtn.addEventListener("click", () => {
    if(inputBox.value.trim() !== "") {
        let task = document.createElement("li")
        task.className = "task-todo"
        task.innerHTML = `
            <span class = "pre-check"><i class="fa-regular fa-circle fa-xl "></i></span>
            <div class = "content">${inputBox.value}</div>
            <span class = "delete"><i class="fa-solid fa-xmark fa-lg" "></i></span>
        `
        listContainer.appendChild(task)
        inputBox.value = ""
    
        

        document.addEventListener("click", (e) => {
            if (e.target.closest(".pre-check")) {
                let preCheck = e.target.closest(".pre-check")
                let postCheck = document.createElement("span")
                postCheck.className = "post-check"
                postCheck.innerHTML = `<i class="fa-solid fa-circle-check fa-xl" style="color: #298807;"></i>`
            
                preCheck.replaceWith(postCheck)
            }
        })


        let delete_ = document.querySelector(".delete")

        listContainer.addEventListener("click", (e) => {
            if (e.target.closest(".delete")) {
                const theTask = e.target.closest(".task-todo");
                if (theTask) theTask.remove();
            }
        });
    }

    else {
        alert("Enter some task to add")
    }
})