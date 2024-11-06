import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescription = ['Fundamental', "Crucial", 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

//component is nothing but a function that returns JSX
// function name should start with capital letter
// component should return JSX
export default function Header() {
    const description = reactDescription[getRandomInt(2)];
    return (<header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>)
  }

// export default Header;

