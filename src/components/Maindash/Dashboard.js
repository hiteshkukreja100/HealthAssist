import React from 'react'
import Table_totalmachines from './Table_totalmachines'
import DataCards from './DataCards'
import LineChartOverall from './LineChartOverall'
import GeneralMachineTable from '../Machines/GeneralMachineTable'
import SpecificMachineTable from '../Machines/SpecificMachineTable'
import { useGlobalState } from '../constants/GlobalStateProvider'
import GensetMonitoringTable from '../Machines/GensetMonitoringTable'
import SeparateApi from '../Machines/SeparateApi'
import HealthDashboard from './HealthDashboard'
import MriScan from '../Scanner/MriScan'
import RecordsAndReports from '../RecordsAndReports'
import WeightAndBmi from '../WeightAndBmi'
import Stress from '../BloodPressure/Stress'


function Dashboard() {
  const { getGlobal, setGlobal } = useGlobalState();
  const globalState = getGlobal();

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
          <LineChartOverall/>
            <DataCards />
            {/* <HealthDashboard/> */}
            {/* <WeightAndBmi/> */}
            <RecordsAndReports/>
            {/* <GeneralMachineTable/> */}
            {/* <SeparateApi/> */}
            {/* <SpecificMachineTable/>
            <GensetMonitoringTable/> */}
            {/* <Table_totalmachines /> */}
            <Stress/>

          </div>


        </section>
      </main>

    </>

  )
}

export default Dashboard