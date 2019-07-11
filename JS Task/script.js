function addli()
            {

                var txtVal = document.getElementById('add').value,
                    listNode = document.getElementById('items'),
                    liNode = document.createElement("LI"),
                    txtNode = document.createTextNode(txtVal);
            
                 liNode.appendChild(txtNode);
                 listNode.appendChild(liNode);
                 liNode.className="list-group-item";
                 
            }
function Search() {
                
     var input, filter, ul, li, a, i, txtValue;
     input = document.getElementById('search');
     filter = input.value.toUpperCase();
     ul = document.getElementById("items");
     li = ul.getElementsByTagName('li');
              
                
     for (i = 0; i < li.length; i++) {
          a = li[i];
          txtValue = a.textContent || a.innerText;
             if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                  } else {
                    li[i].style.display = "none";
                  }
        }
 }