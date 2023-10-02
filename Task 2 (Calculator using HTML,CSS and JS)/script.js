// Todo: Make M+ M- and MC functional
let string = "";
let button = document.querySelectorAll('.button');
let button1 = document.querySelectorAll('.button1');
let button2 = document.querySelectorAll('.button2');
let button3 = document.querySelectorAll('.button3');
Array.from(button).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
Array.from(button1).forEach((button1)=>{
  button1.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
Array.from(button2).forEach((button2)=>{
    button2.addEventListener('click', (e)=>{
      if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'C'){
        string = ""
        document.querySelector('input').value = string;
      }
      else{ 
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
        }
    })
  })
  Array.from(button3).forEach((button3)=>{
    button3.addEventListener('click', (e)=>{
      if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'C'){
        string = ""
        document.querySelector('input').value = string;
      }
      else{ 
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
        }
    })
  })