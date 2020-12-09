function getColor_grittingroutes(d) {
switch  (d) {   case 'Trailer'    :
                    return '#ffff99'    
                case 'Supervisor'    :
                    return '#6a3d9a'
                case 'Primary'    :
                    return '#e31a1c'  
                case 'Other'    :
                    return '#33a02c'    
            }
}
function grittingroutesStyle (feature) {
return {
    color: getColor_grittingroutes (feature.properties.classification),
    weight: 4,
    opacity: 1,
    }
}

const gritboxStyle = {
    radius: 6,
    color: '#000',
    weight:2,
    opacity:1,
    fillColor: '#ff7f00',
    fillOpacity:1
}

export {
grittingroutesStyle,
gritboxStyle
}