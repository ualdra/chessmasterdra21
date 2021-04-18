const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fetch = require('node-fetch');
const axios = require('axios')

async function getSimplePage(webpage){

    const web = await fetch(webpage)
    
    return await web.text();

}
async function init(){
    
    const web = await getSimplePage("https://es.wikipedia.org/wiki/Ranking_FIDE");
    const $ = cheerio.load(web);
    const browser = await puppeteer.launch();
	const page = await browser.newPage();
	var filas =[]
    
     
 for(var i=2;i<=101;i++){
	var auxiliar = $("#mw-content-text > div.mw-parser-output > table:nth-child(7) > tbody > tr:nth-child("+i+")");
	var posicion= await auxiliar.find("th").text();
	
	var nombre = await auxiliar.find("td").find("a").attr("title");
	var href = await auxiliar.find("td").find("a").attr("href");
	var bandera= await auxiliar.find("td").find("img").attr("src");
	var pais=await auxiliar.find("td:nth-child(3) ").find("a").attr("title");
	var elo= await auxiliar.find(" td:nth-child(4)").html();
	 posicion=posicion.slice(0,posicion.length-1)
	 elo=elo.slice(0,elo.length-1)
	datos={Posicion:posicion,Nombre:nombre,href:"https://es.wikipedia.org"+href,bandera:"https:"+bandera,pais:pais,elo:elo}
	filas.push(datos)
	//console.log(filas[i-2])   
	axios
  .post('http://localhost:3400/api/jugadors', {
    "nombre":datos.Nombre,
    "href":datos.href,
    "bandera":datos.bandera,
    "pais":datos.pais,
    "elo":datos.elo,
    "posicion":datos.Posicion
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
 }
}
init()
