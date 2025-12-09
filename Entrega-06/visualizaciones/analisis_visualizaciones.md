<h1>Visualizaciones</h1>
Los gráficos funcionan como aporte para mostrar de forma directa los cambios que han ocurrido a lo largo de los años. Nuestra primera visualización es una muestra de las 255 teleseries diferenciadas por cada canal de televisión, contabilizadas en nuestra base de datos. Esto es netamente para que los usuarios puedan saber cuáles teleseries analizamos y un muestrario general y directo. 


Después, comenzamos a realizar nuestros gráficos en base a la submuestra con 29 teleseries. Mostramos los roles/funciones que repite más cada género. Por ejemplo: ¿quiénes son más protagonistas, antagonistas o personajes secundarios? La idea es que el usuario pueda ver directamente si los protagonistas son más hombres o mujeres, y así en cada uno. Acá se muestra que los hombres tienden a ser más protagonistas, y las mujeres más personajes secundarios. En antagonistas se mantiene un equilibrio.

Considerando lo anterior, decidimos hacer un clic más allá, mostrando en qué tipos de trama hay más protagonismo femenino o masculino, demostrando que entre los 80-90, el drama estaba relacionado con las mujeres. Entre 2020 y 2025, el drama y comedia también lo protagonizan mujeres. Así se van destacando las tramas analizadas y la relación directa con los géneros. 

El último gráfico, indica algo más profundo. Tomamos las tramas y las fuerzas que actúan de cada personaje, por ejemplo la venganza, los celos, el poder, etc. Y eso, lo agrupamos en tres grupos: dominante (que agrupa a personajes líderes, decisivos y con poder económico o social), conflictivo (que reúne a personajes perjudicados, celosos o emocionalmente afectados) y emotivo (vinculado a emociones como el enamoramiento, la búsqueda de justicia, la venganza u obligaciones afectivas). En el gráfico se puede notar que las mujeres tienden a ser más dominantes y emotivas, y los hombres más conflictivos, aunque anduvieron muy parejos, algo que no esperábamos. 

_Este gráfico lo decidimos hacer en barra porque sentíamos que funcionaba más al ser solo tres categorías. El usuario puede distinguir de forma rápida que en dominante y emotivo hay más mujeres que hombres._

En conclusión, los últimos tres gráficos, muestran más a profundidad el análisis de los personajes y la relación con las tramas, aumento de mujeres y relación con las fuerzas que actúan (lo que conecta con los estereotipos que se tienden a hacer). 


<h3>Realización de gráficos</h3>
La visualización 01, 02 y 04 están hechas con Altair. Fue un gran reto para nosotras, porque en todo el semestre fue lo que más nos costó lograr, pero decidimos tomar el reto y generar nuestros gráficos de nuevo en google colab. Los códigos de estos tres están incorporados en la carpeta. La visualización 03, que es la de tramas, está hecha en Flourish, que fue la aplicación que estábamos usando cuando no logramos hacerlo con códigos. Este gráfico lo deje así, porque cumplía la función de mostrar que tramas estaban más relacionadas a cada género, y los puntos no se sobreponen (este tema fue el que nos hizo también realizar los gráficos de nuevo, para intentar lograr que los puntos se dispersaran). 


En la última reunión que tuvimos con la profesora Kat logramos hacer el gráfico 2, de forma entendible y distinta a la presentada anteriormente. Queríamos que se vieran ordenados los puntos, pero no superpuestos y que se notara a simple vista cuanta cantidad había. En esa misma reunión, la profesora nos recomendó cambiar la última visualización porque decía que no se comprendía, entonces la dejamos como un gráfico de barras porque efectivamente era mucho más claro. 

También consideramos la retroalimentación. Por ende, la visualización 1 la dejamos jerarquizada por colores: TVN (puntos rojos) está primero. Le siguen T13 (naranjo), MEGA (verde) y CHV (morado). Así el usuario puede distinguir más rápido y no debe estar buscando los colores. 

<h2>¿Cómo hicimos la visualización 03?</h2>
Usamos la base de datos de la submuestra (29 teleseries). Utilizamos la fila de género, género-teleserie y año. Los colores son los mismos que en todas las visualizaciones (menos en la 1, que son los colores de los canales).  
