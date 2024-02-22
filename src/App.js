import logo from './logo.svg';
import './App.css';




const hedy = {
  name : 'hedy lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  size : 130,
}


function AboutPage() {
  return (
    <>
    <h1 id="daTitle">The ugliest Web page On Github XD</h1>
      <h1>About</h1>
      <h2>Wanna learn about {hedy.name} ?</h2>
      <p>Kifach la .. zid gallak .<br /> 
      that's her .. look how pretty she is (*was)..</p>

      <img 
        src={hedy.imageUrl} 
        style = {{
            width:hedy.size,
            height:hedy.size
        }}></img>
      <p>Safi yallah lay3aawn</p>
      <MyBtn/>
    </>
  );
}

function MyBtn(){
  return (
      <>
        <p id="miw"> Why so serious ? malk mamrtahch </p>
        <button id="hada"> brek hna  </button>
      </>
  );
}


export  default AboutPage;





