/* =================================
   CREACIÓN DEL MAPA
   ================================= */

var map = L.map('map').setView(
    [4.611765, -74.083418],
    15
);


/* =================================
   MAPA BASE
   ================================= */

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,

        attribution:
            '&copy; OpenStreetMap contributors'
    }
).addTo(map);


/* =================================
   MARCADOR DEL ÁREA DE ESTUDIO
   ================================= */

var marker = L.marker(
    [4.611765, -74.083418]
).addTo(map);

marker.bindPopup(
    "<b>Área de estudio</b><br>Los Mártires, Bogotá D.C."
);


/* =================================
   POLÍGONO DEL ÁREA DE TRABAJO
   ================================= */

var polygon = L.polygon([

    [4.606905, -74.083226],

    [4.608847, -74.081729],

    [4.609123, -74.082339],

    [4.607288, -74.083696]

]).addTo(map);


/* =================================
   INFORMACIÓN DE LAS CAJAS
   ================================= */

var informacion = {

    /* =================================
       LOS MÁRTIRES
       ================================= */

    martires: {

        titulo: "🏙️ Los Mártires",

        contenido: `

            <p class="intro-martires">
                La localidad de Los Mártires se encuentra en el centro
                de Bogotá D.C. y constituye un territorio con importantes
                procesos históricos, urbanos y sociales.
            </p>


            <div class="componentes-martires">


                <!-- ÁREA DE ESTUDIO -->

                <details class="componente-martires">

                    <summary>

                        <span class="icono-componente">
                            📍
                        </span>

                        <span class="texto-componente">

                            <strong>
                                Área de estudio
                            </strong>

                            <small>
                                Ubicación y características del territorio
                            </small>

                        </span>

                    </summary>


                    <div class="contenido-componente">

                        <h4>
                            📍 Área de estudio
                        </h4>

                        <p>
                            El área de estudio corresponde a la localidad
                            de Los Mártires, ubicada en el centro de
                            Bogotá D.C.
                        </p>

                        <p>
                            Su localización permite analizar diferentes
                            procesos relacionados con la transformación
                            urbana, los usos del suelo y las dinámicas
                            territoriales.
                        </p>

                        <p>
                            La localidad presenta una relación entre
                            actividades residenciales, comerciales,
                            servicios, movilidad y espacios asociados
                            a su evolución histórica.
                        </p>

                    </div>

                </details>


                <!-- TRANSFORMACIÓN URBANA -->

                <details class="componente-martires">

                    <summary>

                        <span class="icono-componente">
                            🏙️
                        </span>

                        <span class="texto-componente">

                            <strong>
                                Transformación urbana
                            </strong>

                            <small>
                                Cambios en la estructura y uso del suelo
                            </small>

                        </span>

                    </summary>


                    <div class="contenido-componente">

                        <h4>
                            🏙️ Transformación urbana
                        </h4>

                        <p>
                            Los Mártires ha experimentado diferentes
                            transformaciones relacionadas con el
                            crecimiento urbano y la modificación de
                            los usos del suelo.
                        </p>

                        <p>
                            Estos cambios pueden observarse en la
                            evolución de las actividades residenciales,
                            comerciales y de servicios, así como en la
                            transformación de determinados sectores
                            y espacios urbanos.
                        </p>

                        <p>
                            El análisis temporal permite reconocer cómo
                            las dinámicas urbanas han modificado la
                            organización y funcionalidad del territorio.
                        </p>

                    </div>

                </details>


                <!-- EJE HISTÓRICO -->

                <details class="componente-martires">

                    <summary>

                        <span class="icono-componente">
                            🚂
                        </span>

                        <span class="texto-componente">

                            <strong>
                                Eje histórico
                            </strong>

                            <small>
                                Ferrocarril y evolución urbana
                            </small>

                        </span>

                    </summary>


                    <div class="contenido-componente">

                        <h4>
                            🚂 Eje histórico
                        </h4>

                        <p>
                            El desarrollo histórico de Los Mártires
                            está relacionado con procesos de movilidad
                            y actividades económicas que contribuyeron
                            a la configuración urbana de la localidad.
                        </p>

                        <p>
                            La actividad ferroviaria constituye un
                            elemento importante para comprender parte
                            de la evolución histórica del territorio,
                            particularmente en el entorno de la
                            Estación de La Sabana.
                        </p>

                        <p>
                            Este componente permite relacionar la
                            transformación espacial de la localidad
                            con los procesos históricos que han
                            influido en su estructura urbana.
                        </p>

                    </div>

                </details>


                <!-- PATRIMONIO URBANO -->

                <details class="componente-martires">

                    <summary>

                        <span class="icono-componente">
                            🏛️
                        </span>

                        <span class="texto-componente">

                            <strong>
                                Patrimonio urbano
                            </strong>

                            <small>
                                Elementos patrimoniales de la localidad
                            </small>

                        </span>

                    </summary>


                    <div class="contenido-componente">

                        <h4>
                            🏛️ Patrimonio urbano
                        </h4>

                        <p>
                            Los elementos patrimoniales permiten
                            relacionar la historia de la localidad
                            con su configuración urbana actual.
                        </p>

                        <p>
                            Estos elementos representan parte de la
                            memoria histórica y cultural del territorio
                            y permiten reconocer procesos de conservación
                            y transformación urbana.
                        </p>

                        <p>
                            Su identificación resulta relevante para
                            analizar la relación entre patrimonio,
                            usos actuales del suelo y dinámicas de
                            transformación territorial.
                        </p>

                    </div>

                </details>


            </div>

        `
    },


    /* =================================
       PREGUNTA DE INVESTIGACIÓN
       ================================= */

    pregunta: {

        titulo: "❓ Pregunta de investigación",

        contenido: `

            <p>
                Esta sección presenta la pregunta central que
                orienta el desarrollo de la investigación.
            </p>


            <h4>
                Pregunta
            </h4>


            <p>
                ¿Cómo se han transformado los usos del suelo,
                las dinámicas comerciales y la estructura urbana
                de la localidad de Los Mártires a través del tiempo,
                y qué cambios se han presentado en relación con
                la actividad ferroviaria y el patrimonio urbano?
            </p>


            <h4>
                Enfoque territorial
            </h4>


            <p>
                El estudio busca relacionar los cambios urbanos,
                los usos del suelo, el patrimonio y las dinámicas
                territoriales dentro del área de trabajo.
            </p>

        `
    },


    /* =================================
       CAMBIOS EN LA ZONA DE TRABAJO
       ================================= */

    cambios: {

        titulo: "🔄 Cambios en la zona de trabajo",

        contenido: `

            <p>
                En esta sección se mostrarán los principales
                cambios identificados dentro de la zona de trabajo.
            </p>


            <h4>
                🗺️ Comparación territorial
            </h4>

            <p>
                Se incorporarán mapas y representaciones que
                permitan comparar diferentes momentos y observar
                la transformación espacial del territorio.
            </p>


            <h4>
                🏙️ Usos del suelo
            </h4>

            <p>
                Se analizarán los cambios relacionados con los
                usos y las dinámicas del territorio.
            </p>


            <h4>
                🏪 Dinámicas comerciales
            </h4>

            <p>
                Se estudiará la relación entre las actividades
                comerciales y las transformaciones de la estructura
                urbana.
            </p>


            <h4>
                🚂 Actividad ferroviaria
            </h4>

            <p>
                Se analizará la importancia histórica de la
                actividad ferroviaria y su relación con la
                evolución urbana de Los Mártires.
            </p>

        `
    },


    /* =================================
       ANEXOS
       ================================= */

    anexos: {

        titulo: "📎 Anexos",

        contenido: `

            <p>
                Esta sección estará destinada al material
                complementario de la investigación.
            </p>


            <h4>
                Material previsto
            </h4>


            <p>
                📷 Fotografías de campo
            </p>


            <p>
                🗺️ Mapas complementarios
            </p>


            <p>
                📊 Tablas y datos
            </p>


            <p>
                📄 Documentos de apoyo
            </p>

        `
    }

};


/* =================================
   SELECCIONAR LAS CAJAS
   ================================= */

var cajas =
    document.querySelectorAll('.info-box');


/* =================================
   PANEL DE INFORMACIÓN
   ================================= */

var infoPanel =
    document.getElementById('info-panel');


/* =================================
   INTERACCIÓN DE LAS CAJAS
   ================================= */

cajas.forEach(function(caja) {

    caja.addEventListener('click', function() {


        /* Obtener categoría */

        var categoria =
            caja.getAttribute('data-info');


        /* Buscar información */

        var info =
            informacion[categoria];


        /* Mostrar información */

        infoPanel.innerHTML = `

            <h3>
                ${info.titulo}
            </h3>

            ${info.contenido}

        `;


        /* Mostrar panel */

        infoPanel.classList.add('visible');


        /* Quitar selección anterior */

        cajas.forEach(function(c) {

            c.classList.remove('active');

        });


        /* Marcar caja seleccionada */

        caja.classList.add('active');

    });

});