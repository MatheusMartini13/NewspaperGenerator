let testsVariable;
countFront = 0;
countNews = 0;
button01 = document.getElementById("newNews")
button02 = document.getElementById("createCode")
let sectionNews = document.getElementById("newNewsSection")
let newsSection = [] 

function createFrontFields(){
  if (countFront === 0){
    countFront += 1;
    const newLabel = document.createElement("label")
    countNews +=1
    newLabel.id = "noticia" + countNews
    newLabel.innerText = "Capa"
    const newspaperNumber = document.createElement("input")
    newspaperNumber.placeholder = "Digite o número da edição"
    newspaperNumber.id = "newspaperNumber"
    const newspaperDate = document.createElement("input")
    newspaperDate.placeholder =  "Digite a data"
    newspaperDate.id = "newspaperDate"
    const divForPreview = document.createElement("div")
    divForPreview.id = "divPreview" + countNews
    const previewBtn = document.createElement("button")
    previewBtn.id = "button" + countNews
    previewBtn.innerText = "Visualizar"
    previewBtn.value = countNews
    previewBtn.addEventListener("click", function (ev){
      ev.preventDefault()
      const changePreview = document.getElementById("divPreview"+this.value)

      changePreview.innerHTML = returnFrontCode();
    })

    sectionNews.append(document.createElement("br"))
    sectionNews.append(newLabel)
    sectionNews.append(document.createElement("br"))
    sectionNews.append(document.createElement("br"))
    sectionNews.append(newspaperNumber)
    sectionNews.append(document.createElement("br"))
    sectionNews.append(newspaperDate)
    sectionNews.append(document.createElement("br"))
    sectionNews.append(document.createElement("br"))
    sectionNews.append(previewBtn)
    sectionNews.append(document.createElement("br"))
    sectionNews.append(divForPreview)
    sectionNews.append(document.createElement("br"))
  } else {
    alert("O jornal já possui uma capa.")
    return
  }
}

function returnFrontCode(){
  const getNumber = document.getElementById("newspaperNumber").value
  const getDate = document.getElementById("newspaperDate").value
  const finalCode = `<div style="width: 500px; padding: 15px;  background-image: url(http://i.imgur.com/FdBN0w3.png); border: 1px dashed #888888; "><div style="font-family: 'Slabo 27px', serif; text-align:center;font-size: 40px; margin-top: 20px;letter-spacing: 5px; color: #222;">O JORNAL DO OCEANO</div><br><div style="font-family: 'Slabo 27px', serif; text-align:center;font-size: 13px; margin-top: 20px; letter-spacing: 2px; color: #222;"><hr>EDIÇÃO nº`+ getNumber + `<div style="display: inline-block; width: 45px;"></div>`+ getDate + `<div style="display: inline-block; width: 45px;"></div>Preço sugerido: B$ 0,25<hr></div>`
  return finalCode
}

function returnUpCode(buttonUsed){
  console.log(buttonUsed.value)
  const inputUsed = document.getElementById("input" + buttonUsed.value)
  const inputUsed2 = document.getElementById("secondInput" + buttonUsed.value)
  const textareaUsed = document.getElementById("news" + buttonUsed.value)
  let realText = ""
  const addingBr = textareaUsed.value.split("\n")
  
  for (let index = 0; index < addingBr.length; index++) {
    const element = addingBr[index];
    realText += addingBr[index] + "<br>"
  }

  const textFinal = `<div style="margin-top: -40px;width: 500px; padding: 15px;  background: url(https://i.imgur.com/FdBN0w3.png); border: 1px dashed #888888;"><div style="font-family: 'Slabo 27px', serif; text-align:center;font-size: 30px; margin-top: 20px; color: #222;">` + inputUsed2.value + ` </div><br><div style="-webkit-filter: grayscale(0%); filter: grayscale(0%); width: 480px; max-height: 200px; overflow: hidden; border: 1px solid #888; display: inline-block; "><img src="` + inputUsed.value + `"
width="100%"></div><div style="width: 480px; padding: 5px; font-family: 'Slabo 27px', serif; text-align:center;font-size: 13px; text-align: justify; columns: 2; color: #222;"> `+ realText +` </div></div>`
  
  return textFinal
}

function createImgUpFields(){
  const newLabel = document.createElement("label")
  countNews +=1
  newLabel.id = "noticia" + countNews
  newLabel.innerText = "Notícia " + countNews
  const imgLink = document.createElement("input")
  imgLink.placeholder = "Coloque o Título da notícia aqui"
  imgLink.id = "input" + countNews
  imgLink.size = "102"
  const imgLink2 = document.createElement("input")
  imgLink2.placeholder = "Coloque o link da imagem de topo aqui"
  imgLink2.id = "secondInput" + countNews
  imgLink2.size = "102"
  const newField = document.createElement("textarea")
  newField.id = "news" + countNews
  newField.placeholder = "Escreva o texto da notícia " + countNews + " aqui."
  newField.name = "news" + countNews
  newField.cols = "100"
  newField.rows = "10"
  const divForPreview = document.createElement("div")
  divForPreview.id = "divPreview" + countNews
  const previewBtn = document.createElement("button")
  previewBtn.id = "button" + countNews
  previewBtn.innerText = "Visualizar"
  previewBtn.value = countNews
  previewBtn.addEventListener("click", function (ev){
    ev.preventDefault()
    const changePreview = document.getElementById("divPreview"+this.value)

    changePreview.innerHTML = returnUpCode(previewBtn);
    })


  sectionNews.append(newLabel)
  sectionNews.append(document.createElement("br"))
  sectionNews.append(document.createElement("br"))
  sectionNews.append(imgLink2)
  sectionNews.append(document.createElement("br"))
  sectionNews.append(document.createElement("br"))
  sectionNews.append(imgLink)
  sectionNews.append(document.createElement("br"))
  sectionNews.append(document.createElement("br"))
  sectionNews.append(newField)
  sectionNews.append(document.createElement("br"))
  sectionNews.append(document.createElement("br"))
  sectionNews.append(previewBtn)
  sectionNews.append(document.createElement("br"))
  sectionNews.append(divForPreview)
  sectionNews.append(document.createElement("br"))}

function createNews(ev) {
  ev.preventDefault()
  const selectionType = document.getElementById("newsType")
  switch(selectionType.value){
    case "front":
      if (countFront === 0){
        createFrontFields()
        newsSection.push(["front", countNews])
      } else{
        alert("O jornal já possui uma capa.")
      }
      break;
    case "imgUp":
      createImgUpFields()
      break;
    case "noImg2":
      break;
    case "imgSide":
      break
    case "noImg3":
      newsSection.push(["noImg3", countNews+1])
      break
    case "imgUpAndDown":
      break
    case "imgDown":
      break
    case "wanted":
      break
  }
}

function createCode(ev){
  ev.preventDefault()
  const getCode = document.getElementById("finalCode")
  for (let index = 0; index < newsSection.length; index++) {
    const typeOfCode = newsSection[index][0];
    const numberOfId = newsSection[index][1];
    if (index === 0) {
      getCode.value = ""
    }
    switch (typeOfCode){
    case "front":
      getCode.value += returnFrontCode()
      break;
    case "imgUp":
      break;
    case "noImg2":
      break;
    case "imgSide":
      break
    case "noImg3":
      break
    case "imgUpAndDown":
      break
    case "imgDown":
      break
    case "wanted":
      break 
    }
  }
  getCode.value = "[dohtml]<center>" + getCode.value + "</center>[/dohtml]"
}

function test() {
  // label link
  // input link
  // button preview
  // cancel preview
}

button01.addEventListener("click", createNews)
button02.addEventListener("click", createCode)