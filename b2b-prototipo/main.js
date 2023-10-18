
// Variables globales
let preciosInsumos = 
    [
      {
        "codigo": "I007573",
        "precio": "39724",
        "descripcion": "ESPUMA EX ROSADA D26 100X200X3",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1696971826/IMAGENES/JAMAR/B2B/qh4cyfvvh3onqvk4athn.png"
      },
      {
        "codigo": "9003218",
        "precio": "46704",
        "descripcion": "ESPUMA EX ROSADA D26 100X200X5",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1696971826/IMAGENES/JAMAR/B2B/qh4cyfvvh3onqvk4athn.png"
        
    },
    {
        "codigo": "I083122",
        "precio": "39724",
        "descripcion": "ESPUMA PENTA 26 GRIS 100X200X3",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1696971826/IMAGENES/JAMAR/B2B/ws4arxhgkqcoa194kjbr.png"
    },
    {
        "codigo": "9003211",
        "precio": "43368",
        "descripcion": "ESPUMA PENTA 26 GRIS 100X200X05",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1696971826/IMAGENES/JAMAR/B2B/ws4arxhgkqcoa194kjbr.png"
    },
    {
        "codigo": "I007570",
        "precio": "25036",
        "descripcion": "ESPUMA SF AZUL D18 100X200X3",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1696971826/IMAGENES/JAMAR/B2B/xkaxozpnayen931nzlll.png"
      },
      {
        "codigo": "9003210",
        "precio": "33805",
        "descripcion": "ESPUMA SF AZUL D18 100X200X5",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1696971826/IMAGENES/JAMAR/B2B/xkaxozpnayen931nzlll.png"
    },
    {
        "codigo": "I007579",
        "precio": "5606",
        "descripcion": "ESPUMA TSE AMARILLA D15 100X200X1",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1696971827/IMAGENES/JAMAR/B2B/qxcwzbrxgv9wc9eba1ak.png"
      },
      {
        "codigo": "I007578",
        "precio": "11211",
        "descripcion": "ESPUMA TSE AMARILLA D15 100X200X2",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1696971827/IMAGENES/JAMAR/B2B/qxcwzbrxgv9wc9eba1ak.png"
      },
      {
        "codigo": "I8001619",
        "precio": "26699",
        "descripcion": "EUROLINO MARFIL",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/f_auto,q_auto/v1/IMAGENES/JAMAR/B2B/lhhr8pqp5ts66csszzmu"
      },
      {
        "codigo": "9002258",
        "precio": "24192",
        "descripcion": "TELA BOUQUET ROSA",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1696971827/IMAGENES/JAMAR/B2B/qxcwzbrxgv9wc9eba1ak.png"
      },
      {
        "codigo": "I8001500",
        "precio": "15012",
        "descripcion": "TELA KAZAN AZUL",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1696971827/IMAGENES/JAMAR/B2B/qxcwzbrxgv9wc9eba1ak.png"
      },
      {
        "codigo": "9000336",
        "precio": "15012",
        "descripcion": "TELA KAZAN PLOMO",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1697039981/IMAGENES/JAMAR/B2B/nsriwpgelsrrz26ghfiu.png"
      },
      {
        "codigo": "9002257",
        "precio": "23716",
        "descripcion": "TELA LUXURY GRIS OSCURO",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1697039854/IMAGENES/JAMAR/B2B/iwfzoo9d7bcgm02026p7.png"
      },
      {
        "codigo": "9002926",
        "precio": "2000",
        "descripcion": "TELA TAFETA NEGRA",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1697039326/IMAGENES/JAMAR/B2B/ak4knpzfeh8d8zqhtbd0.png"
      },
      {
        "codigo": "9002604",
        "precio": "13759",
        "descripcion": "TELA VELVET RICH PETROLEO",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1697039729/IMAGENES/JAMAR/B2B/wovoyzlv3gmqppxizx7v.png"
      },
      {
        "codigo": "I8001700",
        "precio": "2658",
        "descripcion": "GUATA INT 80GR X 1.60 M",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1697039326/IMAGENES/JAMAR/B2B/xecil7r7l3sdkx6bcjjd.png"
      },
      {
        "codigo": "9001429",
        "precio": "7983",
        "descripcion": "FIELTRO BLACKTEX 220 GR 2X2 MT",
        "imageEsponja":"https://res.cloudinary.com/www-ismyt-com/image/upload/v1697039326/IMAGENES/JAMAR/B2B/zisngelrnoziwyhobyuc.png"
      }
]

  let espumas = [
    {
        "sku": "7026484",
        "material": "I007573",
        "unidad": "0.00"
    },
    {
        "sku": "7023395",
        "material": "I007573",
        "unidad": "0.00"
    },
    {
        "sku": "7024699",
        "material": "I007573",
        "unidad": "0.00"
    },
    {
        "sku": "7024132",
        "material": "I007573",
        "unidad": "1.00"
    },
    {
        "sku": "7024076",
        "material": "I007573",
        "unidad": "0.00"
    },
    {
        "sku": "7026052",
        "material": "I007573",
        "unidad": "0.00"
    },
    {
        "sku": "7020529",
        "material": "I007573",
        "unidad": "0.00"
    },
    {
        "sku": "7023980",
        "material": "I007573",
        "unidad": "0.00"
    },
    {
        "sku": "7024116",
        "material": "I007573",
        "unidad": "0.00"
    },
    {
        "sku": "7026484",
        "material": "9003218",
        "unidad": "0.20"
    },
    {
        "sku": "7023395",
        "material": "9003218",
        "unidad": "1.63"
    },
    {
        "sku": "7024699",
        "material": "9003218",
        "unidad": "1.63"
    },
    {
        "sku": "7024132",
        "material": "9003218",
        "unidad": "0.00"
    },
    {
        "sku": "7024076",
        "material": "9003218",
        "unidad": "1.30"
    },
    {
        "sku": "7026052",
        "material": "9003218",
        "unidad": "0.82"
    },
    {
        "sku": "7020529",
        "material": "9003218",
        "unidad": "0.00"
    },
    {
        "sku": "7023980",
        "material": "9003218",
        "unidad": "1.63"
    },
    {
        "sku": "7024116",
        "material": "9003218",
        "unidad": "0.16"
    },
    {
        "sku": "7026484",
        "material": "I083122",
        "unidad": "0.20"
    },
    {
        "sku": "7023395",
        "material": "I083122",
        "unidad": "1.60"
    },
    {
        "sku": "7024699",
        "material": "I083122",
        "unidad": "1.60"
    },
    {
        "sku": "7024132",
        "material": "I083122",
        "unidad": "0.00"
    },
    {
        "sku": "7024076",
        "material": "I083122",
        "unidad": "1.30"
    },
    {
        "sku": "7026052",
        "material": "I083122",
        "unidad": "1.80"
    },
    {
        "sku": "7020529",
        "material": "I083122",
        "unidad": "0.00"
    },
    {
        "sku": "7023980",
        "material": "I083122",
        "unidad": "1.60"
    },
    {
        "sku": "7024116",
        "material": "I083122",
        "unidad": "0.48"
    },
    {
        "sku": "7026484",
        "material": "9003211",
        "unidad": "0.00"
    },
    {
        "sku": "7023395",
        "material": "9003211",
        "unidad": "0.00"
    },
    {
        "sku": "7024699",
        "material": "9003211",
        "unidad": "0.00"
    },
    {
        "sku": "7024132",
        "material": "9003211",
        "unidad": "1.00"
    },
    {
        "sku": "7024076",
        "material": "9003211",
        "unidad": "0.00"
    },
    {
        "sku": "7026052",
        "material": "9003211",
        "unidad": "0.00"
    },
    {
        "sku": "7020529",
        "material": "9003211",
        "unidad": "2.60"
    },
    {
        "sku": "7023980",
        "material": "9003211",
        "unidad": "0.00"
    },
    {
        "sku": "7024116",
        "material": "9003211",
        "unidad": "0.00"
    },
    {
        "sku": "7026484",
        "material": "I007570",
        "unidad": "0.50"
    },
    {
        "sku": "7023395",
        "material": "I007570",
        "unidad": "0.00"
    },
    {
        "sku": "7024699",
        "material": "I007570",
        "unidad": "0.00"
    },
    {
        "sku": "7024132",
        "material": "I007570",
        "unidad": "0.80"
    },
    {
        "sku": "7024076",
        "material": "I007570",
        "unidad": "0.75"
    },
    {
        "sku": "7026052",
        "material": "I007570",
        "unidad": "0.96"
    },
    {
        "sku": "7020529",
        "material": "I007570",
        "unidad": "0.00"
    },
    {
        "sku": "7023980",
        "material": "I007570",
        "unidad": "0.00"
    },
    {
        "sku": "7024116",
        "material": "I007570",
        "unidad": "0.03"
    },
    {
        "sku": "7026484",
        "material": "9003210",
        "unidad": "0.00"
    },
    {
        "sku": "7023395",
        "material": "9003210",
        "unidad": "1.20"
    },
    {
        "sku": "7024699",
        "material": "9003210",
        "unidad": "1.20"
    },
    {
        "sku": "7024132",
        "material": "9003210",
        "unidad": "0.07"
    },
    {
        "sku": "7024076",
        "material": "9003210",
        "unidad": "0.00"
    },
    {
        "sku": "7026052",
        "material": "9003210",
        "unidad": "0.00"
    },
    {
        "sku": "7020529",
        "material": "9003210",
        "unidad": "0.00"
    },
    {
        "sku": "7023980",
        "material": "9003210",
        "unidad": "1.20"
    },
    {
        "sku": "7024116",
        "material": "9003210",
        "unidad": "0.00"
    },
    {
        "sku": "7026484",
        "material": "I007579",
        "unidad": "0.20"
    },
    {
        "sku": "7023395",
        "material": "I007579",
        "unidad": "3.33"
    },
    {
        "sku": "7024699",
        "material": "I007579",
        "unidad": "3.33"
    },
    {
        "sku": "7024132",
        "material": "I007579",
        "unidad": "1.50"
    },
    {
        "sku": "7024076",
        "material": "I007579",
        "unidad": "3.90"
    },
    {
        "sku": "7026052",
        "material": "I007579",
        "unidad": "2.50"
    },
    {
        "sku": "7020529",
        "material": "I007579",
        "unidad": "1.30"
    },
    {
        "sku": "7023980",
        "material": "I007579",
        "unidad": "3.33"
    },
    {
        "sku": "7024116",
        "material": "I007579",
        "unidad": "1.00"
    },
    {
        "sku": "7026484",
        "material": "I007578",
        "unidad": "0.00"
    },
    {
        "sku": "7023395",
        "material": "I007578",
        "unidad": "0.50"
    },
    {
        "sku": "7024699",
        "material": "I007578",
        "unidad": "0.50"
    },
    {
        "sku": "7024132",
        "material": "I007578",
        "unidad": "1.20"
    },
    {
        "sku": "7024076",
        "material": "I007578",
        "unidad": "0.16"
    },
    {
        "sku": "7026052",
        "material": "I007578",
        "unidad": "0.60"
    },
    {
        "sku": "7020529",
        "material": "I007578",
        "unidad": "0.60"
    },
    {
        "sku": "7023980",
        "material": "I007578",
        "unidad": "0.50"
    },
    {
        "sku": "7024116",
        "material": "I007578",
        "unidad": "0.00"
    }
]

let telas = [
    {
        "sku": "7026484",
        "material": "I8001619",
        "unidad": "0.00"
    },
    {
        "sku": "7023395",
        "material": "I8001619",
        "unidad": "15.00"
    },
    {
        "sku": "7024699",
        "material": "I8001619",
        "unidad": "15.00"
    },
    {
        "sku": "7024132",
        "material": "I8001619",
        "unidad": "0.00"
    },
    {
        "sku": "7024076",
        "material": "I8001619",
        "unidad": "0.00"
    },
    {
        "sku": "7026052",
        "material": "I8001619",
        "unidad": "0.00"
    },
    {
        "sku": "7020529",
        "material": "I8001619",
        "unidad": "0.00"
    },
    {
        "sku": "7023980",
        "material": "I8001619",
        "unidad": "0.00"
    },
    {
        "sku": "7024116",
        "material": "I8001619",
        "unidad": "0.00"
    },
    {
        "sku": "7026484",
        "material": "9002258",
        "unidad": "0.00"
    },
    {
        "sku": "7023395",
        "material": "9002258",
        "unidad": "0.00"
    },
    {
        "sku": "7024699",
        "material": "9002258",
        "unidad": "0.00"
    },
    {
        "sku": "7024132",
        "material": "9002258",
        "unidad": "0.00"
    },
    {
        "sku": "7024076",
        "material": "9002258",
        "unidad": "0.00"
    },
    {
        "sku": "7026052",
        "material": "9002258",
        "unidad": "0.00"
    },
    {
        "sku": "7020529",
        "material": "9002258",
        "unidad": "0.00"
    },
    {
        "sku": "7023980",
        "material": "9002258",
        "unidad": "0.00"
    },
    {
        "sku": "7024116",
        "material": "9002258",
        "unidad": "6.30"
    },
    {
        "sku": "7026484",
        "material": "I8001500",
        "unidad": "0.00"
    },
    {
        "sku": "7023395",
        "material": "I8001500",
        "unidad": "0.00"
    },
    {
        "sku": "7024699",
        "material": "I8001500",
        "unidad": "0.00"
    },
    {
        "sku": "7024132",
        "material": "I8001500",
        "unidad": "0.00"
    },
    {
        "sku": "7024076",
        "material": "I8001500",
        "unidad": "0.00"
    },
    {
        "sku": "7026052",
        "material": "I8001500",
        "unidad": "0.00"
    },
    {
        "sku": "7020529",
        "material": "I8001500",
        "unidad": "0.00"
    },
    {
        "sku": "7023980",
        "material": "I8001500",
        "unidad": "15.00"
    },
    {
        "sku": "7024116",
        "material": "I8001500",
        "unidad": "0.00"
    },
    {
        "sku": "7026484",
        "material": "9000336",
        "unidad": "0.00"
    },
    {
        "sku": "7023395",
        "material": "9000336",
        "unidad": "0.00"
    },
    {
        "sku": "7024699",
        "material": "9000336",
        "unidad": "0.00"
    },
    {
        "sku": "7024132",
        "material": "9000336",
        "unidad": "0.00"
    },
    {
        "sku": "7024076",
        "material": "9000336",
        "unidad": "0.00"
    },
    {
        "sku": "7026052",
        "material": "9000336",
        "unidad": "0.00"
    },
    {
        "sku": "7020529",
        "material": "9000336",
        "unidad": "6.20"
    },
    {
        "sku": "7023980",
        "material": "9000336",
        "unidad": "0.00"
    },
    {
        "sku": "7024116",
        "material": "9000336",
        "unidad": "0.00"
    },
    {
        "sku": "7026484",
        "material": "9002257",
        "unidad": "0.00"
    },
    {
        "sku": "7023395",
        "material": "9002257",
        "unidad": "0.00"
    },
    {
        "sku": "7024699",
        "material": "9002257",
        "unidad": "0.00"
    },
    {
        "sku": "7024132",
        "material": "9002257",
        "unidad": "18.00"
    },
    {
        "sku": "7024076",
        "material": "9002257",
        "unidad": "0.00"
    },
    {
        "sku": "7026052",
        "material": "9002257",
        "unidad": "0.00"
    },
    {
        "sku": "7020529",
        "material": "9002257",
        "unidad": "0.00"
    },
    {
        "sku": "7023980",
        "material": "9002257",
        "unidad": "0.00"
    },
    {
        "sku": "7024116",
        "material": "9002257",
        "unidad": "0.00"
    },
    {
        "sku": "7026484",
        "material": "9002926",
        "unidad": "1.00"
    },
    {
        "sku": "7023395",
        "material": "9002926",
        "unidad": "2.40"
    },
    {
        "sku": "7024699",
        "material": "9002926",
        "unidad": "2.40"
    },
    {
        "sku": "7024132",
        "material": "9002926",
        "unidad": "4.75"
    },
    {
        "sku": "7024076",
        "material": "9002926",
        "unidad": "2.00"
    },
    {
        "sku": "7026052",
        "material": "9002926",
        "unidad": "1.90"
    },
    {
        "sku": "7020529",
        "material": "9002926",
        "unidad": "2.70"
    },
    {
        "sku": "7023980",
        "material": "9002926",
        "unidad": "2.40"
    },
    {
        "sku": "7024116",
        "material": "9002926",
        "unidad": "2.00"
    },
    {
        "sku": "7026484",
        "material": "9002604",
        "unidad": "3.20"
    },
    {
        "sku": "7023395",
        "material": "9002604",
        "unidad": "0.00"
    },
    {
        "sku": "7024699",
        "material": "9002604",
        "unidad": "0.00"
    },
    {
        "sku": "7024132",
        "material": "9002604",
        "unidad": "0.00"
    },
    {
        "sku": "7024076",
        "material": "9002604",
        "unidad": "0.00"
    },
    {
        "sku": "7026052",
        "material": "9002604",
        "unidad": "0.00"
    },
    {
        "sku": "7020529",
        "material": "9002604",
        "unidad": "0.00"
    },
    {
        "sku": "7023980",
        "material": "9002604",
        "unidad": "0.00"
    },
    {
        "sku": "7024116",
        "material": "9002604",
        "unidad": "0.00"
    },
    {
        "sku": "7026484",
        "material": "I8001700",
        "unidad": "2.00"
    },
    {
        "sku": "7023395",
        "material": "I8001700",
        "unidad": "4.00"
    },
    {
        "sku": "7024699",
        "material": "I8001700",
        "unidad": "4.00"
    },
    {
        "sku": "7024132",
        "material": "I8001700",
        "unidad": "4.00"
    },
    {
        "sku": "7024076",
        "material": "I8001700",
        "unidad": "4.00"
    },
    {
        "sku": "7026052",
        "material": "I8001700",
        "unidad": "5.00"
    },
    {
        "sku": "7020529",
        "material": "I8001700",
        "unidad": "2.20"
    },
    {
        "sku": "7023980",
        "material": "I8001700",
        "unidad": "4.00"
    },
    {
        "sku": "7024116",
        "material": "I8001700",
        "unidad": "1.00"
    },
    {
        "sku": "7026484",
        "material": "9001429",
        "unidad": "0.57"
    },
    {
        "sku": "7023395",
        "material": "9001429",
        "unidad": "2.00"
    },
    {
        "sku": "7024699",
        "material": "9001429",
        "unidad": "2.00"
    },
    {
        "sku": "7024132",
        "material": "9001429",
        "unidad": "0.80"
    },
    {
        "sku": "7024076",
        "material": "9001429",
        "unidad": "1.03"
    },
    {
        "sku": "7026052",
        "material": "9001429",
        "unidad": "0.60"
    },
    {
        "sku": "7020529",
        "material": "9001429",
        "unidad": "0.45"
    },
    {
        "sku": "7023980",
        "material": "9001429",
        "unidad": "2.00"
    },
    {
        "sku": "7024116",
        "material": "9001429",
        "unidad": "0.17"
    }
]


window.addEventListener("click", (e) => {
    e.preventDefault()
    let productName = e.target.dataset.productName;

    if (e.target.classList.contains("card-product-page-list")) {
        let url = new URL(window.location.href);
        url.searchParams.set("product", e.target.dataset.urlProduct);

        let productSku = e.target.dataset.urlProduct;
    
        history.pushState(null, null, url.toString())

        let productObject = {
            productName: e.target.dataset.productName,
            productSku: e.target.dataset.urlProduct,
            productImage: e.target.dataset.productImage
        }
        
        renderProductPage(productObject)
    }


    if(e.target.classList.contains("sumar-valores")) {
        let elemento = e.target.parentNode.querySelector(".qty-product");
        let cantidad = parseInt(elemento.textContent)
        cantidad++;
        elemento.textContent = cantidad;
        document.querySelectorAll(".calc-container").forEach(elemento => {
            let precioInsumo = parseFloat(elemento.dataset.precio);
            let unidadInsumo = parseFloat(elemento.dataset.cantidad);
            let total = (precioInsumo * unidadInsumo) * cantidad;
            totalFabricacion.textContent = total.toFixed(0);
          })
    }
    if(e.target.classList.contains("restar-valores")) {
        let elemento = e.target.parentNode.querySelector(".qty-product");
        let cantidad = parseInt(elemento.textContent)
        cantidad < 2 ? 1 : cantidad--;
        elemento.textContent = cantidad;
        document.querySelectorAll(".calc-container").forEach(elemento => {
            let precioInsumo = parseFloat(elemento.dataset.precio);
            let unidadInsumo = parseFloat(elemento.dataset.cantidad);
            let total = (precioInsumo * unidadInsumo) * cantidad;
            totalFabricacion.textContent = total.toFixed(0);            

          })
    }
})


function renderProductPage(product){
    let { productName, productSku, productImage } = product;
    let renderProductsContainer = document.querySelector(".render-components");
    let objetoMateriales = preciosInsumos;
    renderProductsContainer.innerHTML = `
    <div class="row">
    <div class="col-md-5">
        <img class="img-fluid w-100" src="${productImage}" alt="">
    </div>
    <div class="col-md-7">
        
        <div class="container-materiales border h-100 rounded p-4">
            <div class="row">
                <h1 class="fs-4 text-dark">${productName}</h1>
                <p><b>Costo:</b> <span id="totalFabricacion">1</span> </p>
            </div>
            <div class="row d-flex mt-2 align-items-center">
            <button class="btn col-md-1 restar-valores">
                <i class="bi bi-dash-circle-fill fs-2"></i>
            </button>
            <div class="col-md-2 text-center qty-product">1</div>
            <button class="btn col-md-1 sumar-valores">
                <i class="bi bi-plus-circle-fill fs-2"></i>
            </button>
        </div>
            <div class="row mt-3 render-materiales gap-2 justify-content-center justify-content-md-start">
            </div>
        </div>
        
    </div>
</div>`;
//renderizando los elementos internos
renderMateriales(objetoMateriales, productSku)

}


function renderMateriales(objetoMateriales, productSku) {
    console.log(productSku)
    let renderMaterialesList = document.querySelector(".render-materiales")
    const elementosFiltrados = espumas.filter(espumas => espumas.sku == productSku);
    const elementosFiltradosTelas = telas.filter(espumas => espumas.sku == productSku);   

    elementosFiltrados.forEach(element => {
        //verificar el nombre de la espuma
        let espumasFiltradas = preciosInsumos.filter(preciosInsumos => preciosInsumos.codigo == element.material);
        if (element.unidad > 0) {
            renderMaterialesList.innerHTML += `
            <div class="card" style="width: 7rem;">
            <ul class="list-group list-group-flush d-flex justify-content-center text-center">
                <img class="rounded-pill" src="${espumasFiltradas[0].imageEsponja}" />
                <h5 class="text-start material-text-size mt-2 calc-container" data-cantidad="${element.unidad}" data-precio="${espumasFiltradas[0].precio}"> ${espumasFiltradas[0].descripcion}#1 </h5>
            </ul>
          </div>
        `
    }});
    elementosFiltradosTelas.forEach(element => {
        console.log(element)
        //verificar el nombre de la espuma
        let telasFiltradas = preciosInsumos.filter(preciosInsumos => preciosInsumos.codigo == element.material);
        if (element.unidad > 0) {
            renderMaterialesList.innerHTML += `
            <div class="card" style="width: 7rem;">
            <ul class="list-group list-group-flush d-flex justify-content-center text-center">
                <img class="rounded-pill" src="${telasFiltradas[0].imageEsponja}"/>
                <h5 class="text-start material-text-size mt-2 calc-container" data-cantidad="${element.unidad}" data-precio="${telasFiltradas[0].precio}"> ${telasFiltradas[0].descripcion}#2 </h5>
            </ul>
          </div>
        `
    }});
}

// Funcionalidad para regresar
window.addEventListener('popstate', function(event) {
    // Aquí puedes ejecutar tu código cuando el usuario hace clic en "Atrás"
    window.location.href ="/";
  });


 







