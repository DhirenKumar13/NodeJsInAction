#########################################################################################

Starting Application
Finishing Application
Timed out ....

#########################################################################################

PS E:\NodeJsWorkspace\weather-app> node app.js
{
  "results": [
    {
      "address_components": [
        {
          "long_name": "Bengaluru",
          "short_name": "Bengaluru",
          "types": [
            "locality",
            "political"
          ]
        },
        {
          "long_name": "Karnataka",
          "short_name": "KA",
          "types": [
            "administrative_area_level_1",
            "political"
          ]
        },
        {
          "long_name": "India",
          "short_name": "IN",
          "types": [
            "country",
            "political"
          ]
        },
        {
          "long_name": "560037",
          "short_name": "560037",
          "types": [
            "postal_code"
          ]
        }
      ],
      "formatted_address": "10 Kasavanahalli Village, Marathahalli, Bengaluru, Karnataka 560037, India",
      "geometry": {
        "location": {
          "lat": 12.9508191,
          "lng": 77.7049031
        },
        "location_type": "GEOMETRIC_CENTER",
        "viewport": {
          "northeast": {
            "lat": 12.9521680802915,
            "lng": 77.7062520802915
          },
          "southwest": {
            "lat": 12.9494701197085,
            "lng": 77.70355411970849
          }
        }
      },
      "place_id": "ChIJE4G_4zUSrjsRUoCJmmG-mDI",
      "types": [
        "bakery",
        "establishment",
        "food",
        "point_of_interest",
        "store"
      ]
    }
  ],
  "status": "OK"
}

#########################################################################################

PS E:\GitRepositories\NodeJsInAction\weather-app> node app.js
Address searched is : 10 Kasavanahalli Village, Marathahalli, Bengaluru, Karnataka 560037, India

#########################################################################################

PS E:\GitRepositories\NodeJsInAction\weather-app> node app.js
Address searched is : 10 Kasavanahalli Village, Marathahalli, Bengaluru, Karnataka 560037, India
####################@@@@@@@@@@@@@@@@@@@####################
Address located at Longitude : 77.7049031
Address located at Latitude : 12.9508191

#########################################################################################

PS E:\GitRepositories\NodeJsInAction\weather-app> node app.js --help
Options:
  --version      Show version number                                   [boolean]
  --address, -a  Address to fetch the weather ...            [string] [required]
  --help         Show help                                             [boolean]

PS E:\GitRepositories\NodeJsInAction\weather-app> node app.js -h
Options:
  --version      Show version number                                   [boolean]
  --address, -a  Address to fetch the weather ...            [string] [required]
  --help, -h     Show help                                             [boolean]

#########################################################################################

PS E:\GitRepositories\NodeJsInAction\weather-app> node app.js --address 'Wipro Technologies , Bangalore'
Wipro%20Technologies%20%2C%20Bangalore
Address searched is : EC3, Indra Nagar, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100, India

Address located at Longitude : 77.65990029999999
Address located at Latitude : 12.8367348

#########################################################################################

PS E:\GitRepositories\NodeJsInAction\weather-app> node app.js --address 764001asa
Address Not Available ...

#########################################################################################

#########################################################################################

#########################################################################################

#########################################################################################

#########################################################################################

#########################################################################################

#########################################################################################

#########################################################################################

#########################################################################################

#########################################################################################


#########################################################################################


#########################################################################################

#########################################################################################