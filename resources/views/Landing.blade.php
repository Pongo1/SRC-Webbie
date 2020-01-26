<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
        <link rel="stylesheet" href="{{asset('css/mdb.min.css')}}">
        <link rel="stylesheet" href="{{asset('css/style.min.css')}}">
        <link rel="stylesheet" href="{{asset('css/extra.css')}}">
        <link rel="shortcut icon" type="image/png" href="{{asset('imgs/src-logo.png')}}"/>
   
        <script rel="stylesheet" src="{{asset('js/jquery.min.js')}}"></script>
  <title>SRC Website</title>
</head>

<style>   
  body{
    margin:0px !important; 
    padding:0px !important; 
    height:100%;
    overflow: hidden;
  }
  html{
    margin:0px !important; 
    padding:0px !important; 
  }
  .div{
    position:fixed;
    width:50%; 
    display:inline-block; 
    height:100%;
    border:solid 0px black; 
    object-fit: cover;
  }
  .div-1{
    left:0px;
  }
  .div-2{
    background:#040c49;
    right:0px;
    
  }
  .first-name-box{
    position:fixed; 
    top:140px; 
    left:calc(38%); 
    width:200px; 
    padding:25px; 
    background:black; 
    z-index:11;
  }
  .second-name-box{
    position:fixed; 
    top:140px; 
    left:calc(50%); 
    width:200px; 
    padding:25px; 
    background:#680000; 
    z-index:11;
  }
  .country-box{
    position:fixed; 
    top:272px; 
    left:calc(52%); 
    width:400px; 
    padding:25px; 
    background:white; 
    z-index:11;
  }
  .m-undefault{
    outline: 0;
    background: transparent;
    border-width: 0px;
    color: white;
    padding: 30px 70px;
    font-size: 1.5rem;
    width: 100%;
    text-align: center

  }
  .select-box{
    padding: 30px 70px;
    background: #c76118 !important;
    border: solid 2px #0a090900;
    width: 50%;
    margin-top: 30px;
    border-radius: 5px;

  }
  .vanish{
    display:none;
  }

</style>
<body>
  <div class="first-name-box" style="opacity:0; left:43%;">
    <h3 style="font-weight:800;text-align:center; font-size:3rem; color:white;">ALU</h3>
  </div>
  <div class="second-name-box" style="opacity:0; left:45%;">
    <h3 style="font-weight:800;text-align:center; font-size:3rem; color:white;">SRC</h3>
  </div>
  <div class="country-box vanish"> 
    <h3 style="font-weight:800;text-align:center; font-size:3rem; color:black;">MAURITIUS</h3>

  </div>
  <img src={{asset('imgs/alu-m-3.jpg')}} class="div" style="opacity:0 !important;top:-100vh !important;" id="img-box"/> 
  <div class="div div-2 " id="box" style="opacity:0 !important;bottom:-100vh !important;"> 
    <div style="bottom:21vh; position:absolute; left:7%;" class=" vanish choice-box">
      <center>
        <h1 style="color:white">Which Branch Would You Like To Visit?</h1>
        <div class="select-box z-depth-1">
        <select class="m-undefault"> 
          <option>first 1</option>
          <option>first 2</option>
          <option>first 3</option>
          <option>first 4</option>
        </select>
      </div>
      </center>
    </div>
  </div>
  <div>
  
  </div>
  <script> 
    const imgBox = $('#img-box'); 
    const contentBox = $('#box');
    const alu = $('.first-name-box'); 
    const src = $('.second-name-box');
    const country = $('.country-box');
    const choice  =$('.choice-box');
     //imgBox.css({opacity:1,transform:'translateY(0vh)', transition:'5s ease-in-out'})
     imgBox.animate({opacity:1,top:0},1000)
     contentBox.animate({opacity:1,bottom:0},1000)
     setTimeout(() => {
       alu.animate({opacity:1,left:'38%'},1500)
       src.animate({opacity:1,left:'50%'},1500)
     }, 1500);
     setTimeout(() => {
      country.fadeIn(700,()=>{
        choice.fadeIn(800);
      });
     }, 2500);
    console.log("I am done here");
  </script>
</body>
</html>