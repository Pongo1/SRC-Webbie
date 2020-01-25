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
    background: #388b05 !important;
    border: solid 2px #0a090900;
    width: 50%;
    margin-top: 30px;
    border-radius: 5px;

  }

</style>
<body>
  <div class="first-name-box">
    <h3 style="font-weight:800;text-align:center; font-size:3rem; color:white;">ALU</h3>
  </div>
  <div class="second-name-box">
    <h3 style="font-weight:800;text-align:center; font-size:3rem; color:white;">SRC</h3>
  </div>
  <div class="country-box"> 
    <h3 style="font-weight:800;text-align:center; font-size:3rem; color:black;">MAURITIUS</h3>

  </div>
  <img src={{asset('imgs/alu-m-3.jpg')}} class="div" > 
  <div class="div div-2" > 
    <div style="bottom:200px; position:absolute; left:7%;" class="">
      <center>
        <h1 style="color:white">Which Branch Would You Like To Visit?</h1>
        <div class="select-box z-depth-1">
        <select class="m-undefault"> 
          <option>first 1</option>
          <option>first 1</option>
          <option>first 1</option>
          <option>first 1</option>
        </select>
      </div>
      </center>
    </div>
  </div>
  <div>
  
  </div>
</body>
</html>