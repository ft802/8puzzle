var main = function() {

//создание псеводокласса---------------------------------------------
  function Fishka(name) {
    this.name = name;
    this.x = name[1]%3;
	if (this.x === 0) {
	  this.x = 3;
	}
	this.y = Math.ceil(name[1]/3);
  }

  var n0 = new Fishka('n0');
  n0.x = 3;
  n0.y = 3;
  var n1 = new Fishka('n1');
  var n2 = new Fishka('n2');
  var n3 = new Fishka('n3');
  var n4 = new Fishka('n4');
  var n5 = new Fishka('n5');
  var n6 = new Fishka('n6');
  var n7 = new Fishka('n7');
  var n8 = new Fishka('n8');
  
  mas_of_n = [n0,n1,n2,n3,n4,n5,n6,n7,n8];
  
  for (var i=1; i<9; i++){
    $("#"+mas_of_n[i].name).css("left",String((mas_of_n[i].x-1)*100));
    $("#"+mas_of_n[i].name).css("top",String((mas_of_n[i].y-1)*100));
  };

//------------------------------------------------------------------  
  
  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var mix = function(){ 
    var list_for_mixing = [9,9,9,9,9,9,9,9,9];
    var k;
	for (var i=0; i<9; i++){
      do {
        k=1;
        list_for_mixing[i]=getRandomInt(0,8);
        for (var j=0; j<9; j++){
          if (list_for_mixing[i]===list_for_mixing[j] && j!=i){
            k=0;
		  };
		};
      } while (k===0);
	  
	  mas_of_n[i].x = list_for_mixing[i]%3;
	  if (mas_of_n[i].x === 0) {
	    mas_of_n[i].x = 3;
	  }
	  mas_of_n[i].y = Math.ceil(list_for_mixing[i]/3);
	  
	  if (list_for_mixing[i]===0){
	    mas_of_n[i].x=3;
		mas_of_n[i].y=3;
	  };
	
	  $("#"+mas_of_n[i].name).animate({
	    left: String((mas_of_n[i].x-1)*100),
	    top: String((mas_of_n[i].y-1)*100)
      }, 500);
	};
  };
	
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
	
	$('.numbers').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
	
	$('.numbers').animate({
      left: "0px"
    }, 200);
  });

  
  var moving = function(i) {
	if (mas_of_n[0].x === mas_of_n[i].x && Math.abs(mas_of_n[0].y-mas_of_n[i].y)===1 
	|| mas_of_n[0].y === mas_of_n[i].y && Math.abs(mas_of_n[0].x-mas_of_n[i].x)===1){
	  var temp_x;
	  var temp_y;
		
	  $("#"+mas_of_n[i].name).animate({
	    left: String((mas_of_n[0].x-1)*100),
	    top: String((mas_of_n[0].y-1)*100)
      }, 500);

      temp_x=mas_of_n[0].x;
	  temp_y=mas_of_n[0].y;
	  mas_of_n[0].x = mas_of_n[i].x;
	  mas_of_n[0].y = mas_of_n[i].y;
	  mas_of_n[i].x = temp_x;
	  mas_of_n[i].y = temp_y;
	  
	  var win=true;
 	  for (var j=1; j<9; j++){
		if (mas_of_n[j].x===3) {mas_of_n[j].x=0};
		if (mas_of_n[j].x!=mas_of_n[j].name[1]%3 || mas_of_n[j].y!=Math.ceil(mas_of_n[j].name[1]/3)){ win=false; };
	  };
	  for (var j=1; j<9; j++) { if (mas_of_n[j].x===0) {mas_of_n[j].x=3}; };
	  if (win===true) {
		alert("Вы победили!");
	  };
	};
  };
  
  $("#"+mas_of_n[1].name).click(function() { moving(1) });
  $("#"+mas_of_n[2].name).click(function() { moving(2) });
  $("#"+mas_of_n[3].name).click(function() { moving(3) });
  $("#"+mas_of_n[4].name).click(function() { moving(4) });
  $("#"+mas_of_n[5].name).click(function() { moving(5) });
  $("#"+mas_of_n[6].name).click(function() { moving(6) });
  $("#"+mas_of_n[7].name).click(function() { moving(7) });  
  $("#"+mas_of_n[8].name).click(function() { moving(8) });
  
   
  $('#rules').click(function() {  
    alert("Игра в 8 - головоломка, представляющая собой 8 квадратных костяшек с нанесенными числами от 1 до 8. Все костяшки заключены в квадратную коробку размером 3x3 (сторона квадрата коробки в три раза длиннее, чем у костяшки). Таким образом при размещении костяшек в коробке остается одно пустое место размером с одну костяшку, которое можно использовать для перемещения костяшек внутри коробки. Цель игры - упорядочить размещение чисел в коробке, разместив их по возрастанию слева направо и сверху вниз, начиная с костяшки с номером 1 в левом верхнем углу и заканчивая пустым местом в правом нижнем углу коробки.");
  });
  
  $('#contacts').click(function() {  
    alert("В случае обнаружения ошибок обратитесь к разработчику ( https://vk.com/gorbich )");
  });
  
  $('#about').click(function() {  
    alert("Данная игра является проектом по ИССиТ группы Фт-410802 ( https://vk.com/ft802 )");
  });
  
  $('#mix').click(function() {
    mix();
  });
    
};

$(document).ready(main);
