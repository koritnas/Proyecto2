// Crear encuesta
const crearEncuesta = (nombre) => ({
    nombre,
    preguntas: [],
    resultados: {},
});

// Agregar pregunta
const agregarPregunta = (encuesta, id, texto, opciones) => {
    const nuevaPregunta = { id, texto, opciones };
    const nuevosResultados = { ...encuesta.resultados };
    nuevosResultados[id] = opciones.reduce((obj, opcion) => ({ ...obj, [opcion]: 0 }), {});

    return {
        ...encuesta,
        preguntas: [...encuesta.preguntas, nuevaPregunta],
        resultados: nuevosResultados,
    };
};

// Registrar un voto
const votar = (encuesta, idPregunta, opcion) => {
    if (encuesta.resultados[idPregunta] && encuesta.resultados[idPregunta][opcion] !== undefined) {
        return {
            ...encuesta,
            resultados: {
                ...encuesta.resultados,
                [idPregunta]: {
                    ...encuesta.resultados[idPregunta],
                    [opcion]: encuesta.resultados[idPregunta][opcion] + 1,
                },
            },
        };
    } else {
        console.error("Pregunta o opción inválida.");
        return encuesta; 
    }
};

// Obtener resultados 
const obtenerResultados = (encuesta) => encuesta.resultados;

// Crear nueva encuesta
let encuesta = crearEncuesta("Encuesta sobre helados");

// Agregar preguntas
encuesta = agregarPregunta(encuesta, 1, "¿Qué sabor prefieres?", ["Chocolate", "Vainilla", "Crema"]);
encuesta = agregarPregunta(encuesta, 2, "¿Lo recomendarías?", ["Sí", "No"]);

// Registrar votos
encuesta = votar(encuesta, 1, "Chocolate");
encuesta = votar(encuesta, 2, "Sí");
encuesta = votar(encuesta, 2, "No");

// Mostrar resultados
console.log(obtenerResultados(encuesta));
