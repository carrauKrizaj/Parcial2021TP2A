 
/**
 * Con el objeto de inventario, se pide desarrollor una function que reciba como parametro
 * el articulo (shoes, socks, shirts, pants) y una cantidad. Si la cantidad es menor o igual a la cantidad 
 * del inventario, se actualiza el objeto disminuyendo la cantidad y se retorna el codigo 200 que significa 'Venta exitosa'. 
 * Si la cantidad es mayor al stock existente, no se actualiza el objeto y se retorna el codigo 500 'Imposible de realizar la venta'
 * 
 */

 const inventory = {
    shoes: 10,
    socks: 6,
    shirts: 10,
    pants: 5,
  }

const sale = function (article, cant){
  const art1 = 'shoes';
  const art2 = 'socks';
  const art3 = 'shirts';
  const art4 = 'pants';
  const ventaOk = 200
  let retorno = 500;

  switch (article) {
    case art1:
      if(cant<=inventory.shoes){ 
        retorno = ventaOk;
        inventory.shoes -= cant;
      }
    case art2:
      if(cant<=inventory.socks){ 
        retorno = ventaOk;
        inventory.socks -= cant;
      }
    case art3:
      if(cant<=inventory.shirts){ 
        retorno = ventaOk;
        inventory.shirts -= cant;
      }
    case art4:
      if(cant<=inventory.pants){ 
        retorno = ventaOk;
        inventory.pants -= cant;
      }
  }
  return ventaOk;
}


// TESTS (no modificar)
console.log(sale('shoes',8) === 200 && inventory.shoes === 2);
console.log(sale('shoes',3) === 500 && inventory.shoes === 2);
console.log(sale('pants',5) === 200 && inventory.pants === 0);