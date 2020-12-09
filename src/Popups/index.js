const grittingroutesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-road" aria-hidden="true"></i><p class="title">Gritting Routes</p>
  <p></p>
  <p class="info">Route Type: ${feature.properties.classification}</p>
  <p class="info">Route No: ${feature.properties.route}</p>
  <p class="info">Route Description: ${feature.properties.name}</p>

  
  </div>`
 
  layer.bindPopup(content)
 }

const gritboxPopup = (feature, layer) => {
 
 const content = `<div class="item"><i class="fa fa-snowflake-o" aria-hidden="true"></i><p class="title">Grit Bins</p>
 <p></p>
 <p class="info">Street: ${feature.properties.street}</p>
 <p class="info">Position: ${feature.properties.position}</p>
  
 </div>`
 
 layer.bindPopup(content)
}

//function streetLightingPopup(feature, layer) {
//  if (feature.properties.raise_new_job = ("1   ")) {
//    var content = "this is writing";
//  } 
//
//  else if (feature.properties.raise_new_job = ("2   ")) {
//    var content = "this is different writing";
//  }
//
//layer.bindPopup(content)
//}

export {
  grittingroutesPopup,
  gritboxPopup
}