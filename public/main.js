let complete = document.getElementsByClassName("complete");
let trash = document.getElementsByClassName("delete");


Array.from(complete).forEach(function(element) {
      element.addEventListener('click', function(event){
        const listItem = this.parentNode.childNodes[1].innerText
        // console.log(event.target.parentNode.childNodes[0])
        // console.log(event.target.parentNode.childNodes[1])
        // console.log(event.target.parentNode.childNodes[2])
        fetch('/editTask', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'task': listItem,
            'completed' :false
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
         window.location.reload(true)
        })
      });
});



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        fetch('/deleteList', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});