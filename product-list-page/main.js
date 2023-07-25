// Función para manejar el evento de clic en la ventana
function handleClick(event) {
    // Verificar si el elemento clicado tiene la clase "filter-parent" o es un descendiente de un elemento con esa clase
    if (event.target.matches('.filter-parent')) {
      // Agregar o quitar la clase "active" al elemento
      event.target.classList.toggle('active');
    }
  }
  
  // Agregar el evento de clic en la ventana
  window.addEventListener('click', handleClick);



  //funcion para pintar los elementos en los diferentes componentes
  function renderElements(data, loopType, templateLiteral, containerId) {
    const container = document.getElementById(containerId);
    let elements = '';
  
    if (loopType === 'map') {
      elements = data.map(item => templateLiteral.replace('$item', item));
    } else if (loopType === 'forEach') {
      data.forEach(item => {
        elements += templateLiteral.replace('$item', item);
      });
    } else if (loopType === 'for') {
      for (let i = 0; i < data.length; i++) {
        elements += templateLiteral.replace('$item', data[i]);
      }
    }
  
    container.innerHTML = elements;
  }

  let contenedorFiltros = document.querySelector(".products-filters");
  const url = 'https://hub9b8szvc.execute-api.us-east-1.amazonaws.com/prd/products/v1/classifications/PWL1-01/products?order_by=&size=10&agency=99&project_id=10&page=1';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Aquí puedes realizar cualquier operación con los datos obtenidos
      data.filters.forEach(element => {
        let parent = `
        <ul class="filter-parent active">
            <li class="title">
                <span></span>
                Filtros
            </li>  
        </ul>`;
        console.log(parent)
        contenedorFiltros.innerHTML += parent;
      });
    })
    .catch(error => console.error(error));
  
  
  