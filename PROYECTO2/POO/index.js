class Encuesta {
    constructor(nombre) {
        this.nombre = nombre;
        this.preguntas = [];
        this.resultados = {}; // Cambiar Map por un objeto simple para coherencia
    }

    agregarPregunta(pregunta) {
        this.preguntas.push(pregunta);
        this.resultados[pregunta.id] = {}; // Inicializar resultados para esta pregunta
        pregunta.opciones.forEach(opcion => {
            this.resultados[pregunta.id][opcion] = 0; // Cada opción empieza con 0 votos
        });
    }

    votar(preguntaId, opcion) {
        if (this.resultados[preguntaId] && this.resultados[preguntaId][opcion] !== undefined) {
            this.resultados[preguntaId][opcion]++;
        } else {
            console.error("Pregunta o opción inválida.");
        }
    }

    obtenerResultados() { // Método para obtener resultados
        return this.resultados;
    }
}

class Pregunta {
    constructor(id, texto, opciones) {
        this.id = id;
        this.texto = texto;
        this.opciones = opciones; // Array de opciones
    }
}

// Crear encuesta
const encuesta = new Encuesta("Encuesta sobre helados");
encuesta.agregarPregunta(new Pregunta(1, "¿Qué sabor prefieres?", ["Chocolate", "Vainilla", "Crema"]));
encuesta.agregarPregunta(new Pregunta(2, "¿Lo recomendarías?", ["Sí", "No"]));

// Votar
encuesta.votar(1, "Chocolate");
encuesta.votar(2, "Sí");
encuesta.votar(2, "No");

// Mostrar resultados
console.log(encuesta.obtenerResultados());

