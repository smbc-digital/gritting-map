import Leaflet from 'leaflet'
import { grittingroutesPopup, gritboxPopup} from './Popups'
import { grittingroutesStyle, gritboxesStyle} from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.391067,-2.1197936],
        StartingZoom: 17,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true
    },
    DynamicData: 
    [
        {
            key: 'Gritting Routes',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:gritting_routes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: grittingroutesPopup,
                maxZoom: 16,
                style: grittingroutesStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Highway Grit Boxes',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:grit_boxes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                onEachFeature: gritboxPopup,
                style: gritboxesStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker (latlng)

                }
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'os1250_line',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_text',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        }
        
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration