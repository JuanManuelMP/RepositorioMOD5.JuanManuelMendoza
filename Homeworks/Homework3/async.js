import axios from "axios";

const esperarSegundos = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        resolve(
            console.log("Ya ha pasado el tiempo especificado (5 segundos)")

        )

    }, 5000)
})
export default esperarSegundos;