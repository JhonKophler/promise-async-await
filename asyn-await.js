const datos = [
  
    {
      id:1,
      title:'Iron Man',
      year: 2008
    },
    {
      id:2,
      title:'Spiderman: Homecoming',
      year: 2017
    },
    {
      id:3,
      title:'Avengers : Engame',
      year: 2019
    },
  
];


const getDatos = () => {
    return new Promise((resolve,reject) => {
      if(datos.length === 0){
        reject(new Error('No existen datos'));
      };
      setTimeout(() =>{
          resolve(datos);
        },2500);
    });
}

async function datosEsperados (){
  try{
    const datosFetched = await getDatos();
    console.log(datosFetched)
  }catch(err){
    console.log(err.message);
  }
    
}

datosEsperados();