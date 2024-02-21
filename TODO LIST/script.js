 var ul=document.getElementById("list")
     var input=document.getElementById("input")

     function update(){
        var list=document.createElement("li")
        list.innerHTML=input.value +" "+"<button onclick='dell(event)'>Delete</button>";
        ul.append(list)

     }
     function dell(event)
     {
          event.target.parentElement.remove()
           
     }