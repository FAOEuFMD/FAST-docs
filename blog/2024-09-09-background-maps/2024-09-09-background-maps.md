---
slug: background-maps
title: Background Maps
authors:
  name: Pilar Rius
  title: Data Scientist @ EuFMD
  url: https://github.com/PilarRius
  image_url: https://github.com/PilarRius.png
tags: [maps, geodata, background maps]
---

### Set up background maps that are consitent with UN guidelines

#### Introduction

Whether you’re using Tableau, Power BI, Python, R, Leaflet, or any other tool or programming language in your web application at EuFMD and as a division of FAO/UN we have very specific guidelines on borders and naming conventions. Thankfully the geospatial unit at UN has provided a WSM ( a wsm/wsmt is a .... ) for applications to use. In addition all maps must display the disclaimers.

**DISCLAIMERS**

"The designations employed and the presentation of material on this map do not 
imply the expression of any opinion whatsoever on the part of the Secretariat of 
the United Nations concerning the legal status of any country, territory, city or 
area or of its authorities, or concerning the delimitation of its frontiers or 
boundaries."


Here's a step-by-step guide on how to use it according to your tool:

**TABLEAU**

1.  In the main menu: select Map > Background > WMS Servers
2.  In the WMS Server Connections prompt: select ADD
3.  In the Dialogue box: type the URL as: 
https://geoservices.un.org/arcgis/rest/services/ClearMap_WebTopo/MapServer/WMSServer?
4.  In the main menu: select Map > Background Layers, then select the map layers to be shown in the view
5.  In the Map Layers: switch on the layers that are needed

**POWER BI**

1. In the Visualization pane: select ArcGIS Maps for Power BI icon
2. In the Dialogue prompt: select ArcGIS Entreprise, type the URL as: https://geoportal.un.org/arcgis
3. In the Sign-in prompt: enter you Unite ID credentials
(Note as a report author, you must first add location data to the map to activate the visual and see 
the map tools.)
4. In the top Toolbar: select Get Data and then the common data sources connection to your data (for 
example excel)
5. In the Open prompt: select your file from folder and Open
6. In the Navigator prompt: select the table to import from the file and then Load
7. In the Fields prompt: from the loaded table, drag and drop latitude and longitude into the 
appropriate fields (see Figure, right)
8. In the left-hand side (yellow icons): select the 3 horizontal line (hamburger) button
9. In the map tool ribbon: select the basemap icons (enable if needed)
10. In the basemap prompt: select your preferred Clear Map flavor that will be added as a background 
to your excel geo-enabled data

**LEAFLET**

***Using Leaflet, copy the sample code below in text editor and save it 
as html file, note the URL for the service is highlighted in red:***

```run<html>
<head >
<title>Leaflet - UN ClearMap</title>
<!-- Load Leaflet from CDN -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
<!-- Load Esri Leaflet from CDN -->
<script src="https://unpkg.com/esri-leaflet@3.0.10/dist/esri-leaflet.js"></script>
</head>
<body id="mainpage">
<div id="divmap" style="width: 100%; height: 100%; border-color: black;"></div>
<script>
var map = L.map('divmap').setView([16.263981,-0.027987], 4);
L.esri.tiledMapLayer({url: "https://geoservices.un.org/arcgis/rest/services/ClearMap_WebTopo/MapServer", maxZoom: 18, 
}).addTo(map);
</script>
</body>
</html>

