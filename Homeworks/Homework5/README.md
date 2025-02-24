Paso1: se inició desde el directorio del módulo 5 del pc oprimiendo alt + f y abriendo powershell
seguido de code . para abrir el visualStudio

2. luego se accedió a la carpeta Homework 5 usando Copypath y cd en la terminal para luego copiar el resto de la  ruta y ubicarse donde creamos el npm

3. en el siguiente paso se utilizó npm init y para crear el package.json

4.luego se creó manualmente el archivo calculadora.js que es donde se trabajará principalmente el código, seguido de crear la constante args = process.argv.splice(2) para acceder a funciones internas del pc y el splice(2) para que no nos muestre datos irrelevantes por el momento.

5. luego definimos el valor 1, la operación y el valor 2 que son los datos relevantes para nuestra calculadora.

6. se define un error posible, usando console.error, en caso de que alguno de los datos no existe.

7. en el siguiente paso vamos a convertir nuestros datos de string a números para poder operarlos sin errores, para eso creamos una nueva constante llama número 1 y luego otra llamada número 2, luego aplicamos parseFloat y lo enlazamos con nuestras variables iniciales que era valor1 y valor2.

8.una vez convertidas en números usamos un bucle if y la función interna isNaN para prevenir que el usuario no ponga un valor de letras donde debería ir un número y volvemos a adelantarnos al error poniendo un console.error donde indicamos atraves de un mensaje que el valor ingresado no es un número.

9.finalmente utilizamos varios bucles en donde dependiendo de la operación habrá un posible resultado y ya que estamos en eso, en caso de que el usuario intente dividir entre 0, dejaremos un mensaje de error donde se le informará que esto no es posible.

finalmente la calculadora será funcional atraves de node calculadora.js <numero1> <operación> <numero2>