var form = document.getElementById('addForm');
let list = document.querySelector(".list");

form.addEventListener('submit', addItem);
list.addEventListener('click', removeItem);
function addItem(e){
    e.preventDefault();

    let newItem = document.getElementById('item').value;
    if(newItem===""){
        alert("Please enter something")
    }else{

        let li=document.createElement('li');
        li.className = 'listItems';
        li.appendChild(document.createTextNode(newItem));

        let deleteBtn= document.createElement('button');
        deleteBtn.appendChild(document.createTextNode("X"));
        deleteBtn.className = "btn btn-danger btn-sm float-right delete";
        li.appendChild(deleteBtn)
        list.appendChild(li);
        console.log(li)
    }
    
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            let li = e.target.parentElement;
            list.removeChild(li);
        }
    }
    else{
        let li = e.target;
        li.style.textDecoration='line-through';
    }
    
}


