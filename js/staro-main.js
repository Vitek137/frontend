//Сценарий, исполняемый при появлении блоков в зоне видимости.------------------------------
	var windowHeight = $(window).height();
    var off = 0
    var ons = 0;
    var onse = 0;
    var time = 350;
    var interval = 350;
    var modul3 = $('.section-3');
    var flag = 0;
    // Убираем заранее с экрана блоки секции №2 для правильной последовательности дальнейшей анимации.
            
            if ($(this).scrollTop() > (modul3.position().top - $(window).height()-3500)) {
                    
                    if (ons == 0) {
                        $(".animate1").fadeOut();
                        $(".animate2").fadeOut();
                        $(".animate3").fadeOut();
                        $(".animate4").fadeOut();
                        $(".animate5").fadeOut();
                        $(".animate2").fadeOut();
                        $(".animate6").fadeOut();
                        $(".animate7").fadeOut();
                        $(".animate8").fadeOut();
                        $(".animate9").fadeOut();
                        $(".animate10").fadeOut();
                        ons = 1;
                    }  
                }
    // Убираем заранее с экрана блоки секции №2 для правильной последовательности дальнейшей анимации.
            
	$(document).on('scroll', function() {
        
         //Анимация секции №1. Плавное появление блоков + въезд справа H2, H3, P.------------------------------
		$('p.animate, .section-1').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                $("h2, p.animate",".section-1").addClass('animated fadeInRight'); 
			}
		});
        
        $('div.animate, .section-1').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) { 
                    $(".centr-section-1").css("opacity", "1")
                    $("div.animate",".section-1").addClass('animated zoomIn');
			}
		});
        //Анимация секции №1. Плавное появление блоков + въезд справа H2, H3, P.------------------------------
        
        
        //Анимация секции №2. Контентные блоки появляются поледовательно.------------------------------
		$('.scroll').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                
                $("h2, h3, p.animate",".section-2").addClass('animated fadeInRight');
                $(".centr-section-2").css("opacity", "1")
                if (ons == 1) {
                
                    //$(".blok-uslug").css("display", "inline-block");
                    $(".animate1").delay(time).fadeIn();
                    $(".animate1").addClass('animated fadeInDown');
                        time += interval;
                    $(".animate2").delay(time).fadeIn();
                        $(".animate2").addClass('animated fadeInDown');
                        time += interval;
                    $(".animate3").delay(time).fadeIn();
                        $(".animate3").addClass('animated fadeInDown');
                        time += interval;
                    $(".animate4").delay(time).fadeIn();
                        $(".animate4").addClass('animated fadeInDown');
                        time += interval;
                    $(".animate5").delay(time).fadeIn();
                        $(".animate5").addClass('animated fadeInDown');
                        time += interval;
                    $(".animate6").delay(time).fadeIn();
                        $(".animate6").addClass('animated fadeInDown');
                        time += interval;
                    $(".animate7").delay(time).fadeIn();
                        $(".animate7").addClass('animated fadeInDown');
                        time += interval;
                    $(".animate8").delay(time).fadeIn(); 
                        $(".animate8").addClass('animated fadeInDown');
                        time += interval;
                    $(".animate9").delay(time).fadeIn();
                        $(".animate9").addClass('animated fadeInDown');
                        time += interval;
                    $(".animate10").delay(time).fadeIn();
                        $(".animate10").addClass('animated fadeInDown');
                        
                     ons = 2;
                    }
			}
		});
        //Анимация секции №2. Контентные блоки появляются поледовательно.------------------------------
        
        //Анимация секции №3. Плавное появление блоков + въезд справа H2, H3, P.------------------------------
		$('.section-3 p').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                $("h2, p.animate",".section-3").addClass('animated fadeInRight');     
			}
		});
        
        $('.animatess').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) { 
                    $(".centr-section-3").css("opacity", "1")
                    $(".animatess",".section-3").addClass('animated zoomIn');
			}
		});
        //Анимация секции №3. Плавное появление блоков + въезд справа H2, H3, P.------------------------------
        
        //Анимация секции №4. Разворот блоков.------------------------------
		$('.section-4 p').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                $("h2, h3, p.animate",".section-4").addClass('animated fadeInRight');
			}
		});
        
        $('.blok-uslug-4').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                $(".blok-uslug-4").css("transform", "rotateY(0deg)")
				$(".blok-uslug-4").css("opacity", "1")
			}
		});
        //Анимация секции №4. Разворот блоков.------------------------------
        
        //Анимация секции №5. Последовательное отображение блоков.------------------------------
        $('.section-5 h2').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                $("h2",".section-5").addClass('animated fadeInRight');
			}
		});
        
        $('.posanime').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                if (off == 0) {
                        $(".blok-1-5").fadeOut()
                        $(".blok-2-5").fadeOut()
                        $(".blok-3-5").fadeOut()
                        $(".blok-4-5").fadeOut()
                        off = 1;
                    }
                $(".posanime").css("opacity", "1")
                    $(".blok-1-5").fadeIn()
                    $(".blok-2-5").delay(500).fadeIn()
                    $(".blok-3-5").delay(1000).fadeIn()
                    $(".blok-4-5").delay(1500).fadeIn()
                
			}
		});
        //Анимация секции №5. Последовательное отображение блоков.------------------------------
        
        //Анимация секции №6. Разворот блоков.------------------------------
		$('.section-6 p').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                $("h2, p.animate",".section-6").addClass('animated fadeInRight');
			}
		});
        
        $('.blok-uslug-6').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                $(".blok-uslug-6").css("transform", "rotateY(0deg)")
                    $(".blok-uslug-6").css("opacity", "1")
			}
		});
        //Анимация секции №6. Разворот блоков.------------------------------
        
        //Анимация секции №7. H2, H3, P.------------------------------
        
		$('.section-7 h2').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                $("h2, p.animate",".section-7").addClass('animated fadeInRight');
			}
		});
        
        $('.blokskroll').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                     //$(".centr-box-7").addClass('animated fadeInRight');
                if (flag == 0)
                {
                    $(".centr-box-7").addClass('animated rotateInUpRight');
                    flag = 1;
                }
			}
		});
        //Анимация секции №7. H2, H3, P.------------------------------
        
         //Анимация секции №8. H2, H3, P.------------------------------
		$('.left-section-8 h2').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
                $("h2, p.animate",".section-8").addClass('animated fadeInLeft');
                $(".forms-bottom").addClass('animated fadeInRight');
			}
		});
        
        $('.blok-uslug-8').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
			if ($(document).scrollTop() + windowHeight >= height) {
               
                if (onse == 0) {
                        $(".blok-1-8").fadeOut()
                        $(".blok-2-8").fadeOut()
                        $(".blok-3-8").fadeOut()
                        $(".blok-4-8").fadeOut()
                        onse = 1;
                    }
                $(".blok-uslug-8").css("opacity", "1")
                    $(".blok-1-8").fadeIn()
                    $(".blok-2-8").delay(500).fadeIn()
                    $(".blok-3-8").delay(1000).fadeIn()
                    $(".blok-4-8").delay(1500).fadeIn()
                
			}
		});
        //Анимация секции №8. H2, H3, P.------------------------------
	});
//Сценарий, исполняемый при появлении блоков в зоне видимости.------------------------------          
 

