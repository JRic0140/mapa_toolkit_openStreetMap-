import acrylic_toolbox from "../css/Toolkit_box.module.css";

export default  class MarkerTools {

    events:Array<string> = [];
    draw_list: Array<L.Marker | L.Polyline> = [];
    map: L.Map;
    tool_kit_map_buttons: Array<{icon:string}>;
    prev_coords: L.LatLng | null = null;
    constructor(map: L.Map,tool_kit_map_buttons:Array<{icon:string}> , options?: unknown) {
        this.map = map;
        this.tool_kit_map_buttons = tool_kit_map_buttons;


        this.tool_click_events(this.map, this.tool_kit_map_buttons);
    }

    addMarker(latlng: L.LatLngExpression, options?: L.MarkerOptions): L.Marker {
        // Lógica para añadir un marcador al mapa
        const marker = L.marker(latlng, options).addTo(this.map);
        return marker;
    }

    trazarRuta(puntos: L.LatLngExpression[], options?: L.PolylineOptions): L.Polyline {
        // Lógica para trazar una ruta en el mapa
        const polyline = L.polyline(puntos, options).addTo(this.map);
        return polyline;
    }

    tool_click_events(map: L.Map, tool_kit_map_buttons: Array<{icon:string}>) {
        // Lógica para manejar los eventos de clic en las herramientas del mapa
        if (tool_kit_map_buttons) {
            tool_kit_map_buttons.forEach((button) => {
                const buttonElement = document.getElementById(button.icon);
                if (buttonElement) {
                    buttonElement.addEventListener('click', () => {
                        if(button.icon != 'delete') {this.style_toggle_button(document.querySelector(`#${button.icon}`) as HTMLElement);}
                        switch (button.icon) {
                            case 'add_location_alt':
                                this.add_location_alt()
                                    break;
                            case 'route':
                                this.route()
                                    break;
                            case 'delete':
                                    
                                    break;
                            
                            default:
                                break;
                        }
                    });
                }

            });

        }
    }

    // función para añadir marcador al hacer clic en el mapa
    add_location_alt() {
        console.log("Add location tool activated");
        // if add_location_alt in events, remove it event listener and return
        if (this.events.includes('add_location_alt')) {
            console.log("Remove add_location_alt event listener");
            this.map.off('click', this.add_location_fun);
            this.events = this.events.filter(event => event !== 'add_location_alt');
            return;
        }
        // leaflet set onclick interaction
        this.map.on('click', this.add_location_fun);
        this.events.push('add_location_alt');
    }

    // función para trazar ruta en el mapa
    route() {
        console.log("Route tool activated");

        if (this.events.includes('route')) {
            console.log("Remove route event listener");
            this.map.off('click', this.add_route_fun);
            this.events = this.events.filter(event => event !== 'route');
            return;
        }

        // leaflet set onclick interaction
        this.map.on('click', this.add_route_fun);
        this.events.push('route');
    }


    // toggle style of button
    style_toggle_button(buttonElement: HTMLElement) {
        // Lógica para cambiar el estilo del botón al hacer clic
        buttonElement.classList.toggle(acrylic_toolbox.active);
    }

    // función para añadir marcador al hacer clic en el mapa
    add_location_fun = (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;

          this.addMarker([lat, lng], { title: "Hello Marker!" , icon: L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            iconSize: [25, 41]})});

            // guardar coordenadas previas para trazar ruta
            this.prev_coords = e.latlng;
          }

    add_route_fun = (e: L.LeafletMouseEvent) => {

        const { lat, lng } = e.latlng;
        // if this.prev_coords is  null return
        console.log(`ruta en coords ${lat}, ${lng} a previas ${this.prev_coords}`);
        
        if (this.prev_coords == null) { return this.prev_coords = e.latlng;}

        this.trazarRuta(
        [[this.prev_coords!.lat, this.prev_coords!.lng],
        [lat, lng]],
        { color: 'blue'}
        ); 
        
        // guardar coordenadas previas para trazar ruta
        this.prev_coords = e.latlng;
    }
}