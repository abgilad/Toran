import { Routes, Route, useNavigate } from 'react-router-dom';
import Modal from 'react-modal'
import './App.css';
import Logo from './Components/Logo';
import Main from './Components/Main';
import Menu from './Components/Menu';
import { useState, useEffect } from 'react';
import NotRegistredMenuCustomer from './Components/NotRegistredMenuCustomer';

Modal.setAppElement('#root');

function App() {

  const nav = useNavigate();



  const [currentNum, setCurrentNum] = useState('')

  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState([{ clientName: 'alex', id: '123456789' }, { clientName: 'moshe', id: '123123123' }, { clientName: 'gilad', id: '987654321' }])
  const [appointment, setAppointment] = useState([])
  const [tempClient, setTempClient] = useState('')

  const newNumber = (mahlaka) => {
    const torHadash = appointment.filter((val) => val.name === mahlaka)
      .find((val, i, obj) => i === obj.length - 1);
    if (torHadash) {
      let temp = {
        clientName: tempClient.clientName,
        id: tempClient.id,
        name: mahlaka,
        num: String(Number(torHadash.num) + 1)
      };
      setAppointment([...appointment, temp]);
      setCurrentNum(temp)

      modalNum()
      nav('/')
    }
    else {
      let temp = {
        clientName: tempClient.clientName,
        id: tempClient.id,
        name: mahlaka,
        num: 1
      };
      setAppointment([...appointment, temp]);
      setCurrentNum(temp)
      modalNum()
      nav('/')
    }
  }

  console.log(appointment)

  const modalNum = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000)
  }

  return (
    <div className="App">
      <Logo setTempClient={setTempClient} />
      <Modal isOpen={isOpen}>
        <h5>{currentNum.name}</h5><br />
        <h1>{currentNum.num}</h1>
      </Modal>

      <Routes>
        <Route path='/' element={<Main currentNum={currentNum} data={data} setTempClient={setTempClient} tempClient={tempClient} appointment={appointment} />} />
        <Route path='/menu' element={<Menu newNumber={newNumber} appointment={appointment} />} />
        <Route path='/pratit' element={<NotRegistredMenuCustomer newNumber={newNumber} appointment={appointment} />} />
      </Routes>
    </div>
  );
}

export default App;
