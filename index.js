window.addEventListener('load', ()=>{
    let form= document.querySelector("#todo-form");
    let input= document.querySelector("#todo-input");
    let list= document.querySelector("#tasks");


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        let task = input.value;
        if (!task) {
            return;
        } 

        let task_div = document.createElement("div");
        task_div.classList.add("task");
        list.appendChild(task_div);


        let task_content_div = document.createElement("div");
        task_content_div.classList.add("content");
        task_div.appendChild(task_content_div);
   

        let task_input= document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value= task;
        task_input.setAttribute("readonly", "readonly");
        task_content_div.appendChild(task_input);


        let task_actions_div= document.createElement("div");
        task_actions_div.classList.add("actions");
        task_div.appendChild(task_actions_div);


        let task_edit_botton= document.createElement("button");
        task_edit_botton.classList.add("Edit");
        task_edit_botton.innerHTML = "Edit";

        let task_delete_button= document.createElement("button");
        task_delete_button.classList.add("Delete");
        task_delete_button.innerHTML = "Delete";


        task_actions_div.appendChild(task_edit_botton);
        task_actions_div.appendChild(task_delete_button);
        

        task_edit_botton.addEventListener('click', ()=>{
            
            if (task_edit_botton.innerText.toLowerCase() =="edit") {
                    task_input.removeAttribute("readonly");
                    task_input.focus();
                    task_edit_botton.innerText = "Save";
                    task_input.style.textDecoration="none"
            }else{
                task_input.setAttribute("readonly", "readonly");
                task_edit_botton.innerText ="Edit";
                
            }
        });

        task_delete_button.addEventListener('click', ()=>{
            if (confirm("Do you want to delete this task?")) {
                list.removeChild(task_div);
                

            }
        })
        

   
        input.value = "";


    });
});
