(function($){"use strict";$("#sidebarToggle").on('click',function(e){e.preventDefault();$("body").toggleClass("sidebar-toggled");$(".sidebar").toggleClass("toggled");});$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel',function(e){if($(window).width()>768){var e0=e.originalEvent,delta=e0.wheelDelta||-e0.detail;this.scrollTop+=(delta<0?1:-1)*30;e.preventDefault();}});$(document).on('scroll',function(){var scrollDistance=$(this).scrollTop();if(scrollDistance>100){$('.scroll-to-top').fadeIn();}else{$('.scroll-to-top').fadeOut();}});$(document).on('click','a.scroll-to-top',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:($($anchor.attr('href')).offset().top)},1000,'easeInOutExpo');event.preventDefault();});})(jQuery);$(document).ready(function(){$("#giveawayhistory").DataTable({order:[],paging:false,info:false})});$(document).ready(function(){$("#sites").DataTable({order:[],searching:false,paging:false,info:false,language:{emptyTable:"No sites available",zeroRecords:"No sites found"}});});$(document).ready(function(){$("#promotedfaucets").DataTable({order:[],searching:false,paging:false,info:false,language:{emptyTable:"No faucets available",zeroRecords:"No faucets found"}});});$(document).ready(function(){$("#premiumfaucets").DataTable({order:[[1,"desc"]],language:{emptyTable:"No faucets available",zeroRecords:"No faucets found"}})});$(document).ready(function(){$("#normalfaucets").DataTable({order:[[1,"desc"]],language:{emptyTable:"No faucets available",zeroRecords:"No faucets found"}})});$(document).ready(function(){$("#inactivefaucets").DataTable({order:[[1,"desc"]],language:{emptyTable:"No faucets available",zeroRecords:"No faucets found"}})});!function e(t){var a={prefix:"",suffix:"",seconds:"Seconds",minute:"1&nbspMinute",minutes:"%d&nbspMinutes",hour:"1&nbspHour",hours:"%d&nbspHours",day:"1&nbspDay",days:"%d&nbspDays",month:"1&nbspMonth",months:"%d&nbspMonths",year:"1&nbspYear",years:"%d&nbspYears"},r=function(e,t){return a[e]&&a[e].replace(/%d/i,Math.abs(Math.round(t)))},n=document.getElementsByClassName("timeago");for(var o in n){var u=n[o];"object"==typeof u&&(u.innerHTML=function(e){if(e){e=(e=(e=(e=e.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),e=new Date(1e3*e||e);var t=.001*((new Date).getTime()-e)>>0,n=t/60,o=n/60,u=o/24,s=u/365;return a.prefix+(t<45&&r("seconds",t)||t<90&&r("minute",1)||n<45&&r("minutes",n)||n<90&&r("hour",1)||o<24&&r("hours",o)||o<42&&r("day",1)||u<30&&r("days",u)||u<45&&r("month",1)||u<365&&r("months",u/30)||s<1.5&&r("year",1)||r("years",s))+a.suffix}}(u.getAttribute("title")||u.getAttribute("datetime")))}
setTimeout(e,6e4)}();