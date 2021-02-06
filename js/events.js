//define functions here

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});


function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('').on('keydown', functino(){
    key.which === g
  })
}

function submitIt() {
  $('').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}