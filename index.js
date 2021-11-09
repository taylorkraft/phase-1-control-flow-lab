function scuberGreetingForFeet(distance){
  let fee;
  if (distance <= 400) {
    fee = 'This one is on me!'
  } else if (distance > 2500) {
    fee = 'No can do.'
  } else if (distance > 2000) {
    fee = 'I will gladly take your thirty bucks.'
  }
  return fee
}

function ternaryCheckCity(city){
  const response = (city == 'NYC') ? 'Ok, sounds good.' : 'No go.'
  return response
}

function switchOnCharmFromTip(tip){
  let response;
  switch(tip) {
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    default:
      response = 'Bye.'
      break;
  }
  return response;
}