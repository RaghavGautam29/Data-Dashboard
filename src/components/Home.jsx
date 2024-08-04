import PropTypes from 'prop-types'; 
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, PolarArea } from 'react-chartjs-2';
import revenueData from "../revenueData.json";
export default function Home({ sidebarVisible }) {
    const fullSidebarWidth = '275px';
    const collapsedSidebarWidth = '110px';

    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-2 gap-x-3" style={{
                marginLeft: sidebarVisible ? fullSidebarWidth : collapsedSidebarWidth,
                borderRadius: '30px',
                marginTop: '15px'
            }}>
                <div className='h-[200px] w-[380px] bg-slate-100 rounded-3xl p-[10px]'>
                    <Bar
                        data={{
                            labels: ["2021", "2022", "2023","2024"],
                            datasets: [
                                {
                                    label: "Revenue",
                                    data: [350, 300, 500,400],
                                },
                            
                                {
                                    label:"Loss",
                                    data:[170,100,200,150],
                                },
                            ],
                        }}
                    />
                </div>
                <div className='flex h-[200px] w-[380px] bg-slate-100 ml-[55px] rounded-3xl p-[10px]'>
                   <Doughnut
                data = {{
                    labels: [
                      'Product A',
                      'Product B',
                      'Product C',
                      'Product D'
                    ],
                    datasets: [{
                      label: 'Items sold',
                      data: [300, 50, 100],
                      backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(201, 203, 207)'
                      ],
                      hoverOffset: 4
                    },],
                  }}
                   />
                     <Doughnut 
                data = {{
                    labels: [
                      'Product A',
                      'Product B',
                      'Product C',
                      'Product D'
                    ],
                    datasets: [{
                      label: 'Items sold',
                      data: [200, 250, 400],
                      backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(201, 203, 207)'
                      ],
                      hoverOffset: 4
                    },],
                  }}
                   />
                   
                </div>
                <div className="bg-slate-100 h-[470px] w-[200px] ml-[110px] rounded-3xl">
                    <h4 className='p-[30px]'>Recent Customers</h4>
                    <hr/>
                    <ol className='p-2 py-3'>
                      <li className='py-3'>Raghav Gautam<i className="fa-regular fa-message pl-[30px]"></i></li>
                      <li className='py-3'>Sahil Singh<i className="fa-regular fa-message pl-[30px]"></i></li>
                      <li className='py-3'>Shivam Jain<i className="fa-regular fa-message pl-[30px]"></i></li>
                      <li className='py-3'>Chiraj Bhardwaj<i className="fa-regular fa-message pl-[30px]"></i></li>
                      <li className='py-3'>Somesh Sharma<i className="fa-regular fa-message pl-[30px]"></i></li>
                      <li className='py-3'>Anurag Singh<i className="fa-regular fa-message pl-[30px]"></i></li>
                    </ol>
                </div>
                <div className="h-[250px] w-[505px] bg-slate-100 rounded-3xl p-[10px] -mt-[250px]">
                     <Line
                     data={{
                       labels:revenueData.map((data)=>data.label),
                       datasets: [{
                         label: "Revenue",
                         data: revenueData.map((data)=>data.revenue),
                         fill: false,
                         borderColor: 'rgb(75, 192, 192)',
                         tension: 0.1
                       },],
                     }}
                     />
                </div>
                <div className="bg-slate-100 rounded-3xl h-[250px] -mt-[250px] ml-[185px] w-[250px]">
               <PolarArea
                data = {{
  labels: [
    'Product A',
    'Product B',
    'Product C',
    'Product D',
  ],
  datasets: [{
    label: 'Customer report',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)'
    ]
  }]
}
}/>
                </div>
            </div>
           
        </div>
    );
}

Home.propTypes = {
    sidebarVisible: PropTypes.bool.isRequired,
};
