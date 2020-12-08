function getColor_grittingroutes(d) {
switch  (d) {   case 'Trailer'    :
                    return '#ff7f00'    
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
    weight: 2,
    opacity: 1,
    }
}

const gritboxStyle = {
    radius: 6,
    color: '#000',
    weight:2,
    opacity:1,
    fillColor: '#cab2d6',
    fillOpacity:1
}

export {
grittingroutesStyle,
gritboxStyle
}