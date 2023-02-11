import './App.css';
import {useState} from 'react'
import {BarChart,Bar,CartesianGrid,XAxis,YAxis,Tooltip,Legend} from 'recharts'
function App() {
  
  const Data = [
    {a:5},
    {b:3},
    {c:0}
  ]
  
  const [count1, setCount1] = useState(Data[0].a);
  const [count2, setCount2] = useState(Data[1].b);
  const [count3,setCount3] = useState(Data[2].c);
  const handleClickIncrease1 = () => {
    setCount1(count1 + 1);
  };
  const handleClickDecrease1 = () => {
    setCount1(count1 - 1);
  };
  const handleClickIncrease2 = () => {
    setCount2(count2 + 1);
  };
  const handleClickDecrease2 = () => {
    setCount2(count2 - 1);
  };
  const handleClickIncrease3 = () => {
    setCount3(count3 + 1);
  };
  const handleClickDecrease3 = () => {
    setCount3(count3 - 1);
  };

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  let zero= "Zero"

  // let flag = false;
  const [flag,setFlag] = useState(false)
  const show = () =>{
    setFlag(!flag)
  }
  const updatedData =[
    {a:count1},
    {b:count2},
    {c:count3}
  ]
  return (
    <div className="App">
      <div className='element'>
        <div><p>a</p></div>
        <div>
          <p style={{ backgroundColor: isPrime(count1) ? 'blue' : 'yellow' }}>
            {
              count1===0 ? zero : count1
            }
          </p>
        </div>
        <div>
          <button onClick={handleClickIncrease1} >+</button>
          <button onClick={handleClickDecrease1}>-</button>
        </div>
      </div>
      <div className='element'>
        <div><p>b</p></div>
        <div>
          <p style={{ backgroundColor: isPrime(count2) ? 'blue' : 'yellow' }}>
            {
              count2===0 ? zero : count2
            }
          </p>
        </div>
        <div>
          <button onClick={handleClickIncrease2} >+</button>
          <button onClick={handleClickDecrease2}>-</button>
        </div>
      </div>
      <div className='element'>
        <div><p>c</p></div>
        <div>
          <p style={{ backgroundColor: isPrime(count3) ? 'blue' : 'yellow' }}>
            {
              count3===0 ? zero : count3
            }
          </p>
        </div>
        <div>
          <button onClick={handleClickIncrease3} >+</button>
          <button onClick={handleClickDecrease3}>-</button>
        </div>
      </div>
      <div className='chart-button'>
        <button onClick={show}>Show chart</button>
      </div>
      {
        flag ? (
          <div>
            <BarChart width={400} height={200} data={updatedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="a" fill="red" />
              <Bar dataKey="b" fill="green" />
              <Bar dataKey="c" fill="blue" />
            </BarChart>
        </div>
        ) : <></>
      }
      
    </div>
  );
}

export default App;
