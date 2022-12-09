function app(){
var op; 

const buttons=document.querySelectorAll('.bottton')
buttons.forEach((button) =>{
  button.addEventListener('click',() => {
      const tanba =button.dataset.f
      func(tanba)
      console.log(button.dataset.f)
  })
})
function func(kali) {
  var result;
  var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
  switch (kali){
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  document.getElementById("result").innerHTML = result;

}
}
app()