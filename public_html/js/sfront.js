/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function SfrontDecode(){
    var langCode,resTitle,resHref;
    var gasTitle=       ["Поставка и транспортировка газа",
                         "Supply and transportation of gas",
                         "Lieferung und Transport von Gas"],
        
        gasHref=        ["index.php?option=com_content&view=article&id=15:postavka-i-transportirovka-gaza-ru&catid=11:toplivo-i-energetika-ru&Itemid=195",
                         "index.php?option=com_content&view=article&id=16:postavka-i-transportirovka-gaza-en&catid=12:toplivo-i-energetika-en&Itemid=209",
                         "index.php?option=com_content&view=article&id=17:postavka-i-transportirovka-gaza-de&catid=13:toplivo-i-energetika-de&Itemid=215"],
          
            
        gasStroyTitle=  ["Строительство газопроводов",
                         "Construction of gas pipelines",
                         "Bau von Gas-Pipelines"],  
        
        gasStroyHref=   ["index.php?option=com_content&view=article&id=28:stroitelstvo-gazoprovodov-ru&catid=11:toplivo-i-energetika-ru&Itemid=206",
                         "index.php?option=com_content&view=article&id=29:stroitelstvo-gazoprovodov-en&catid=12:toplivo-i-energetika-en&Itemid=210",
                         "index.php?option=com_content&view=article&id=30:stroitelstvo-gazoprovodov-de&catid=13:toplivo-i-energetika-de&Itemid=216"],
            
            
        enServTitle=    ["Энергосервисные услуги",
                         "Energy services",
                         "Energiedienstleistungen"], 
        
        enServHref=     ["index.php?option=com_content&view=article&id=164:energoservisnye-uslugi-ru&catid=11:toplivo-i-energetika-ru&Itemid=207",
                         "index.php?option=com_content&view=article&id=31:energostervis-en&catid=12:toplivo-i-energetika-en&Itemid=211",
                         "index.php?option=com_content&view=article&id=32:energostervis-de&catid=13:toplivo-i-energetika-de&Itemid=217"],
                  
            
        azsTitle=       ["Автозаправочный комплекс",
                         "Refueling complex",
                         "Tanken komplexen"],
        
        azsHref=        ["index.php?option=com_content&view=article&id=33:avtozapravochnyj-kompleks-ru&catid=11:toplivo-i-energetika-ru&Itemid=208",
                         "index.php?option=com_content&view=article&id=34:avtozapravochnyj-kompleks-en&catid=12:toplivo-i-energetika-en&Itemid=212",
                         "index.php?option=com_content&view=article&id=35:avtozapravochnyj-kompleks-de&catid=13:toplivo-i-energetika-de&Itemid=218"],  
                             
   
            
        wineTitle=      ["Виноделие и производство коньяков",
                         "Viticulture and production of cognac",
                         "Weinbau und Produktion von Cognac"],
     
        wineHref=       ["index.php?option=com_content&view=article&id=39:vinodelie-i-konyak-ru&catid=14:selskoe-khozyajstvo-ru&Itemid=219",
                         "index.php?option=com_content&view=article&id=40:vinodelie-i-konyak-en&catid=15:selskoe-khozyajstvo-en&Itemid=223",
                         "index.php?option=com_content&view=article&id=41:vinodelie-i-konyak-de&catid=16:selskoe-khozyajstvo-de&Itemid=227"],  
  
     
        sadTitle=       ["Садоводство",
                         "Horticulture",
                         "Gartenbau"],
        
        sadHref=        ["index.php?option=com_content&view=article&id=42:sadovodstvo-ru&catid=14:selskoe-khozyajstvo-ru&Itemid=220",
                         "index.php?option=com_content&view=article&id=43:sadovodstvo-en&catid=15:selskoe-khozyajstvo-en&Itemid=224",
                         "index.php?option=com_content&view=article&id=44:sadovodstvo-de&catid=16:selskoe-khozyajstvo-de&Itemid=228"],  
 
        
        sxTitle=        ["Выращивание сельскохозкультур",
                         "Growing crops",
                         "Der Anbau von Kulturen"],
        
        sxHref=         ["index.php?option=com_content&view=article&id=45:selkhozkultury-ru&catid=14:selskoe-khozyajstvo-ru&Itemid=221",
                         "index.php?option=com_content&view=article&id=46:selkhozkultury-en&catid=15:selskoe-khozyajstvo-en&Itemid=225",
                         "index.php?option=com_content&view=article&id=47:selkhozkultury-de&catid=16:selskoe-khozyajstvo-de&Itemid=229"], 
                             
                  
        
        umoksTitle=     ["Экспорт меда",
                         "Exports of honey",
                         "Exporte von Honig"],
     
        umoksHref=      ["index.php?option=com_content&view=article&id=48:eksport-meda-ru&catid=14:selskoe-khozyajstvo-ru&Itemid=222",
                         "index.php?option=com_content&view=article&id=49:eksport-meda-en&catid=15:selskoe-khozyajstvo-en&Itemid=226",
                         "index.php?option=com_content&view=article&id=50:eksport-meda-de&catid=16:selskoe-khozyajstvo-de&Itemid=230 "],  
         
     
        restTitle=      ["Ресторанный бизнес",
                         "Catering",
                         "Gastronomie"],
                             
        restHref=       ["index.php?option=com_content&view=article&id=54:restorannyj-biznes-ru&catid=17:otdykh-i-ozdorovlenie-ru&Itemid=231",
                         "index.php?option=com_content&view=article&id=55:restorannyj-biznes-en&catid=18:otdykh-i-ozdorovlenie-en&Itemid=233",
                         "index.php?option=com_content&view=article&id=56:restorannyj-biznes-de&catid=19:otdykh-i-ozdorovlenie-de&Itemid=235"],   
 
     
        gostTitle=      ["Гостиничный бизнес",
                         "Hospitality",
                         "Gastfreundschaft"],
                             
        gostHref=       ["index.php?option=com_content&view=article&id=57:gostinichnyj-biznes-ru&catid=17:otdykh-i-ozdorovlenie-ru&Itemid=232",
                         "index.php?option=com_content&view=article&id=58:gostinichnyj-biznes-en&catid=18:otdykh-i-ozdorovlenie-en&Itemid=234",
                         "index.php?option=com_content&view=article&id=59:gostinichnyj-biznes-de&catid=19:otdykh-i-ozdorovlenie-de&Itemid=236"],      
 
     
        bcentTitle=     ["Бизнес-центры",
                         "Business Centres",
                         "Business Centres"],
                             
        bcentHref=      ["index.php?option=com_content&view=article&id=63:biznes-tsentry-ru&catid=20:nedvizhimost-ru&Itemid=237",
                         "index.php?option=com_content&view=article&id=64:biznes-tsentry-en&catid=21:nedvizhimost-en&Itemid=239",
                         "index.php?option=com_content&view=article&id=65:biznes-tsentry-de&catid=22:nedvizhimost-de&Itemid=241"],   
                         
 
     
        torgTitle=      ["Торговые площади",
                         "Trading platforms",
                         "Shopping-, Lager-und Industriehallen"],
        
        torgHref=       ["index.php?option=com_content&view=article&id=66:torgovye-ploshchadi-ru&catid=20:nedvizhimost-ru&Itemid=238",
                         "index.php?option=com_content&view=article&id=67:torgovye-ploshchadi-en&catid=21:nedvizhimost-en&Itemid=240",
                         "index.php?option=com_content&view=article&id=68:torgovye-ploshchadi-de&catid=22:nedvizhimost-de&Itemid=242"],   
                             
 
     
        torgcsTitle=    ["Торговля ЦБ",
                         "Trade Bank and deposit activity",
                         "Trade Bank und Depositengeschäft"],
       
         torgcsHref=    ["index.php?option=com_content&view=article&id=72:torgovlya-tsb-ru&catid=23:fondovyj-rynok-ru&Itemid=243",
                         "index.php?option=com_content&view=article&id=73:torgovlya-tsb-en&catid=24:fondovyj-rynok-en&Itemid=246",
                         "index.php?option=com_content&view=article&id=74:torgovlya-tsb-de&catid=25:fondovyj-rynok-de&Itemid=249"],        
 
     
        actcompTitle=   ["Компании по управлению активами",
                         "Asset Management Company",
                         "Gesellschaft für die Verwaltung des Vermögens"],
                             
        actcompHref=    ["index.php?option=com_content&view=article&id=75:kompanii-po-upravleniyu-aktivami-ru&catid=23:fondovyj-rynok-ru&Itemid=244",
                         "index.php?option=com_content&view=article&id=76:kompanii-po-upravleniyu-aktivami-en&catid=24:fondovyj-rynok-en&Itemid=247",
                         "index.php?option=com_content&view=article&id=77:kompanii-po-upravleniyu-aktivami-de&catid=25:fondovyj-rynok-de&Itemid=250"],  
 
                             
        compPerTitle=   ["Утилизауия отходов",
                         "utilization of wastes",
                         "Abfallverwertung"],
                             
        compPerHref=    ["http://sodruzhestvo.ua/index.php/en/utilization-of-wastes",
                         "http://sodruzhestvo.ua/index.php/en/utilization-of-wastes",
                         "http://sodruzhestvo.ua/index.php/en/utilization-of-wastes"] ; 

    //--------------------------------------------------------------------------
      this.init=function(lang){
          if (lang==="ru"){
             langCode=0;
            
          };    
         
          if (lang==="en"){
             langCode=1;
         };  
         
           if (lang==="de"){
             langCode=2;
         }; 
         
          resTitle=[gasTitle[langCode],
                    gasStroyTitle[langCode],
                    enServTitle[langCode], 
                    azsTitle[langCode],
                    wineTitle[langCode],
                    sadTitle[langCode],
                    sxTitle[langCode],
                    umoksTitle[langCode],
                    restTitle[langCode],
                    gostTitle[langCode],
                    bcentTitle[langCode],
                    torgTitle[langCode],
                    torgcsTitle[langCode],
                    actcompTitle[langCode],
                    compPerTitle[langCode]]; 
                
           resHref=[gasHref[langCode],
                    gasStroyHref[langCode],
                    enServHref[langCode], 
                    azsHref[langCode],
                    wineHref[langCode],
                    sadHref[langCode],
                    sxHref[langCode],
                    umoksHref[langCode],
                    restHref[langCode],
                    gostHref[langCode],
                    bcentHref[langCode],
                    torgHref[langCode],
                    torgcsHref[langCode],
                    actcompHref[langCode],
                    compPerHref[langCode]]; 
             
      };
      
     this.GetResult=function(){
          return [resTitle, resHref ]; 
     }; 
          
          
 
};


function SodrFrontSl(){
    var SDecode=new SfrontDecode();
    var btnPos=1;  
    var btnTag="#sodr-head-button-";
    var imgTegName="sod-front-slide-img-";
    var wrapTextTeg="#sod-front-slide-img-wrap-text-";
    var wrapHrefTeg="#sod-front-slide-img-a-";
    
    var langCode=0; 
    
    
    this.init=function(lang){
       
        SDecode.init(lang);
       // fff=SDecode.GetResult()[1][1];  
        for (var i=1;i<=15;i++){             
           $(wrapHrefTeg+i).attr("href",SDecode.GetResult()[1][i-1]);
           $(wrapTextTeg+i).html("<p>"+SDecode.GetResult()[0][i-1]+"</p>");
        };
        
          
    };
//------------------------------------------------------------------------------    
    
    this.mMove=function(aVar){
          
          for (var i=1; i<=15;i++){
               
               if(aVar===imgTegName+i){
                   $(wrapTextTeg+i).css({"bottom":"0%"});                   
               };
          };
        
          
    };
//------------------------------------------------------------------------------    
    this.mOut=function(aVar){
          for (var i=1; i<=15;i++){
               
               if(aVar===imgTegName+i){
                   $(wrapTextTeg+i).css({"bottom":"-110%"});                   
               };
          };
    };
    
    this.lrButtenCkick=function(lrBtn){     
         if (lrBtn==="lbtn"){
              if (btnPos>=1){ 
                  btnPos-- ;
              if (btnPos===0){
                      btnPos=5;};   
             };
         };
         
         if (lrBtn==="rbtn"){
              if (btnPos>=1 && btnPos<6){ 
                  btnPos++ ;
                  if (btnPos===6){
                      btnPos=1;};
              };
         };
       
         $("#sodr-head-button-"+btnPos).prop("checked", true);
        
    };
};


var sodrFrontSlider= new SodrFrontSl();

$(document).ready(function () {    
    sodrFrontSlider.init("ru");
  var intervals = setInterval( function(){
                  sodrFrontSlider.lrButtenCkick('rbtn');
    }, 10000);
});