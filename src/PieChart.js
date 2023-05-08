
import { PieChart } from 'react-minimal-pie-chart';
import { employ_data } from './employ_data'


const Chart = () => {

  return (

    <PieChart style={{width:500}}
  data={[
    { title: 'raju', value: 250, color: '#B55627' },
    { title: 'John Black', value: 45, color: '#C13C37' },
    { title: 'Tim Perkinson', value: 50, color: '#6A2135' },
    { title: 'Patrick Huthinson', value: 150, color: '#4A2135' },
    { title: 'Rita Alley', value: 200, color: '#5A2135' },
    { title: 'Kavvay Verma', value: 50, color: '#2A2135' },
    { title: 'Abhay Singh', value: 80, color: '#1A2212' },
    { title: 'Rita Alley', value: 90, color: '#5A2125' },
  ]}/>
    
  )
}

export default Chart
