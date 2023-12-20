import './App.css';
import Buttons from './components/Buttons';
import Card from './components/Card';
import Headers from './components/Header';
import InputTwo from './components/InputTwo';
import Inputs from './components/Inputs';
import Menu from './components/Menu';
import MenuTwo from './components/MenuTwo';
import Nonfictionals from './components/Nonfictionals';
import Paginations from './components/Paginations';
import Tooltips from './components/Tooltips';
import Typograpy from './components/Typograpy';

function App() {
  return (
    <div className=''>
        <Headers/><br />
        <Buttons/>
        <Inputs/>     
        <InputTwo/><br /><br />
        <Menu/><br /><br /><br /><br />
        <MenuTwo/><br /><br />
        <Paginations/><br /><br />
        <Nonfictionals/><br />
        <Typograpy/><br /><br /><br />
        <Card/><br /><br /><br />
        <h1 className='text-3xl mt-4 ml-36 text-gray-600'>Angular Native Componenets</h1>
        <Tooltips/>
    </div>
  );
}
export default App;