// variables iniciales
const tareaNueva = document.getElementById("tareaNueva");
const btnNuevaTarea = document.getElementById("botonAgregar");
const litasTareas = document.getElementById("listadoTareas");
const totalTareas = document.getElementById("total_tareas");
const tareasRealizadas = document.getElementById("tareas_completadas")

// defininiendo las tareas predeterminados

const tareas = [
    { id: 10, 
    descripcion: "lavar el carro", 
    completado: false },

    { id: 20, 
    descripcion: "Sacar la basura", 
    completado: false },

    { id: 30, 
    descripcion: "hacer el desafio de metodos", 
    completado: false },
];

//funcionalidad de boton-input
btnNuevaTarea.addEventListener("click", function () {
    let tareaNuevaTexto = tareaNueva.value.trim();
    if (tareaNuevaTexto !== "") {
        const nuevaTarea = {
            id: Math.floor(Math.random() * 100) + 1,
            descripcion: tareaNuevaTexto,
            completado: false,
        }
        tareas.push(nuevaTarea);
        renderizarLista(tareas);
        tareaNueva.value = "";
    }else {
        alert("Debes ingresar una tarea, Por favór");
    }
})



// renderizado de tareas 
function renderizarLista(tareas) {
    let html = "";
    for (let tarea of tareas) {
        html += `
        
        <tbody>
        <tr>
            <td>${tarea.id}</td>
            <td style="text-decoration: ${tarea.completado ? "line-through" : ""};">${tarea.descripcion}</td>
            <td><input type="checkbox" onclick=completado(${tarea.id})></button></td>
            <td><button onclick=eliminarTarea(${tarea.id})>🚫</button></td>
        </tr>
        </tbody>`
    }
    litasTareas.innerHTML = html;
    totalTareas.textContent = tareas.length;
    tareasRealizadas.textContent = tareas.filter(tarea => tarea.completado).length;
}
renderizarLista(tareas);

//funcionalidad de checkbox
function completado(id) {
    const tarea = tareas.find((x) => x.id === id);
if (tarea) {
    tarea.completado =!tarea.completado;
    renderizarLista(tareas);
}
}

//funcionalidad de eliminar tarea

function eliminarTarea(id) {
    const index = tareas.findIndex((lis) => lis.id === id);
    if (index !== -1) {
        tareas.splice(index, 1);
        renderizarLista(tareas);
    }
}
