import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WeatherMap = () => {
  const [hurricanes, setHurricanes] = useState([]);
  const floridaBounds = new LatLngBounds([24.396308, -81.603506], [31.000968, -79.974307]);

  const geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.2,
          21.5
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "TD",
        "pressure-mb": 1005.0,
        "datetime-utc": "2014-08-23 18:00:00+00:00",
        "wind-speed": 30.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.5,
          22.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "TD",
        "pressure-mb": 1004.0,
        "datetime-utc": "2014-08-24 00:00:00+00:00",
        "wind-speed": 30.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.9,
          22.6
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "TS",
        "pressure-mb": 1002.0,
        "datetime-utc": "2014-08-24 06:00:00+00:00",
        "wind-speed": 35.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.0,
          23.3
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "TS",
        "pressure-mb": 1001.0,
        "datetime-utc": "2014-08-24 12:00:00+00:00",
        "wind-speed": 40.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.0,
          24.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "TS",
        "pressure-mb": 1001.0,
        "datetime-utc": "2014-08-24 18:00:00+00:00",
        "wind-speed": 45.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.0,
          24.2
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "TS",
        "pressure-mb": 998.0,
        "datetime-utc": "2014-08-25 00:00:00+00:00",
        "wind-speed": 45.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.9,
          24.4
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "TS",
        "pressure-mb": 996.0,
        "datetime-utc": "2014-08-25 06:00:00+00:00",
        "wind-speed": 45.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.7,
          24.7
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "TS",
        "pressure-mb": 993.0,
        "datetime-utc": "2014-08-25 12:00:00+00:00",
        "wind-speed": 50.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.4,
          24.9
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "TS",
        "pressure-mb": 992.0,
        "datetime-utc": "2014-08-25 18:00:00+00:00",
        "wind-speed": 50.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.1,
          25.1
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 989.0,
        "datetime-utc": "2014-08-26 00:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.0,
          25.6
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 989.0,
        "datetime-utc": "2014-08-26 06:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.8,
          26.7
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 988.0,
        "datetime-utc": "2014-08-26 12:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.4,
          28.1
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 987.0,
        "datetime-utc": "2014-08-26 18:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.5,
          29.5
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 983.0,
        "datetime-utc": "2014-08-27 00:00:00+00:00",
        "wind-speed": 70.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.0,
          30.6
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 983.0,
        "datetime-utc": "2014-08-27 06:00:00+00:00",
        "wind-speed": 70.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.2,
          31.6
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 983.0,
        "datetime-utc": "2014-08-27 12:00:00+00:00",
        "wind-speed": 70.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.8,
          32.3
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 984.0,
        "datetime-utc": "2014-08-27 18:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.7,
          33.5
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 984.0,
        "datetime-utc": "2014-08-28 00:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.0,
          34.8
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 982.0,
        "datetime-utc": "2014-08-28 06:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -67.1,
          36.3
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 979.0,
        "datetime-utc": "2014-08-28 12:00:00+00:00",
        "wind-speed": 70.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -63.6,
          37.5
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 971.0,
        "datetime-utc": "2014-08-28 18:00:00+00:00",
        "wind-speed": 75.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.8,
          39.1
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 965.0,
        "datetime-utc": "2014-08-29 00:00:00+00:00",
        "wind-speed": 75.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -53.9,
          41.2
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "HU",
        "pressure-mb": 967.0,
        "datetime-utc": "2014-08-29 06:00:00+00:00",
        "wind-speed": 70.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -49.0,
          44.2
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 970.0,
        "datetime-utc": "2014-08-29 12:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -45.9,
          46.7
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 972.0,
        "datetime-utc": "2014-08-29 18:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -42.8,
          48.6
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 974.0,
        "datetime-utc": "2014-08-30 00:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -39.5,
          49.9
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 974.0,
        "datetime-utc": "2014-08-30 06:00:00+00:00",
        "wind-speed": 65.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -36.2,
          51.3
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 971.0,
        "datetime-utc": "2014-08-30 12:00:00+00:00",
        "wind-speed": 60.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -32.0,
          54.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 971.0,
        "datetime-utc": "2014-08-30 18:00:00+00:00",
        "wind-speed": 60.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -28.9,
          58.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 971.0,
        "datetime-utc": "2014-08-31 00:00:00+00:00",
        "wind-speed": 60.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -27.0,
          61.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 963.0,
        "datetime-utc": "2014-08-31 06:00:00+00:00",
        "wind-speed": 60.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -26.0,
          62.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 964.0,
        "datetime-utc": "2014-08-31 12:00:00+00:00",
        "wind-speed": 60.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -24.5,
          63.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 968.0,
        "datetime-utc": "2014-08-31 18:00:00+00:00",
        "wind-speed": 55.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.0,
          64.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 974.0,
        "datetime-utc": "2014-09-01 00:00:00+00:00",
        "wind-speed": 50.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -19.5,
          65.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 978.0,
        "datetime-utc": "2014-09-01 06:00:00+00:00",
        "wind-speed": 50.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -17.0,
          66.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 980.0,
        "datetime-utc": "2014-09-01 12:00:00+00:00",
        "wind-speed": 45.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.4,
          67.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 982.0,
        "datetime-utc": "2014-09-01 18:00:00+00:00",
        "wind-speed": 45.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.0,
          68.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 984.0,
        "datetime-utc": "2014-09-02 00:00:00+00:00",
        "wind-speed": 40.0
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.0,
          69.0
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014",
        "id-code": "",
        "status": "EX",
        "pressure-mb": 985.0,
        "datetime-utc": "2014-09-02 06:00:00+00:00",
        "wind-speed": 35.0
      }
    },
    {
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -72.2,
            21.5
          ],
          [
            -72.5,
            22.0
          ],
          [
            -72.9,
            22.6
          ],
          [
            -73.0,
            23.3
          ],
          [
            -73.0,
            24.0
          ],
          [
            -73.0,
            24.2
          ],
          [
            -72.9,
            24.4
          ],
          [
            -72.7,
            24.7
          ],
          [
            -72.4,
            24.9
          ],
          [
            -72.1,
            25.1
          ],
          [
            -72.0,
            25.6
          ],
          [
            -71.8,
            26.7
          ],
          [
            -71.4,
            28.1
          ],
          [
            -71.5,
            29.5
          ],
          [
            -72.0,
            30.6
          ],
          [
            -72.2,
            31.6
          ],
          [
            -71.8,
            32.3
          ],
          [
            -70.7,
            33.5
          ],
          [
            -69.0,
            34.8
          ],
          [
            -67.1,
            36.3
          ],
          [
            -63.6,
            37.5
          ],
          [
            -58.8,
            39.1
          ],
          [
            -53.9,
            41.2
          ],
          [
            -49.0,
            44.2
          ],
          [
            -45.9,
            46.7
          ],
          [
            -42.8,
            48.6
          ],
          [
            -39.5,
            49.9
          ],
          [
            -36.2,
            51.3
          ],
          [
            -32.0,
            54.0
          ],
          [
            -28.9,
            58.0
          ],
          [
            -27.0,
            61.0
          ],
          [
            -26.0,
            62.0
          ],
          [
            -24.5,
            63.0
          ],
          [
            -22.0,
            64.0
          ],
          [
            -19.5,
            65.0
          ],
          [
            -17.0,
            66.0
          ],
          [
            -15.4,
            67.0
          ],
          [
            -15.0,
            68.0
          ],
          [
            -15.0,
            69.0
          ]
        ]
      },
      "type": "Feature",
      "properties": {
        "basin": "AL",
        "number": "04",
        "name": "CRISTOBAL",
        "year": "2014"
      }
    }
  ]
};


  return (
    <MapContainer
      center={[27.9944024, -81.7602544]}  // Central Florida coordinates
      zoom={7}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100vh' }}
      bounds={floridaBounds}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Render GeoJSON */}
      <GeoJSON data={geojsonFeature} />

      {/* Render Hurricane Markers */}
      {hurricanes.map((hurricane, index) => (
        <Marker key={index} position={[hurricane.lat, hurricane.lon]}>
          <Popup>{hurricane.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WeatherMap;
