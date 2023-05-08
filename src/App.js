import { employ_data } from './employ_data'
import './App.css'
import Chart from './PieChart'

function App() {
  return (
    <div className='App'>
      <h1>Emp Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Worked Hours</th>
          </tr>
        </thead>

        <tbody>
          {employ_data.map((data, index) => {
            return (
              <tr key={index} style={{ backgroundColor: data.TimeWorked < 100 && 'red' }}>
                <td>{data.EmployeeName}</td>
                <td>{data.TimeWorked}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Chart/>
    </div>
  )
}

export default App
