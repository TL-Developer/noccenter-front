import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import {
  CardStyled,
  HeaderStyled,
  TitleStyled,
  SettingsStyled,
  ChartStyled,
} from './style';

const options = {
  chart: {
    type: 'column',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    height: '250px',
  },
  credits: {
    enabled: false,
  },
  title: {
    text: null,
  },
  subtitle: {
      text: null,
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    labels: {
      style: {
        color: '#fff',
      },
    },
    crosshair: true
  },
  yAxis: {
    min: 0,
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    labels: {
      style: {
        color: '#fff',
      },
    },
  },
  tooltip: {
    borderRadius: 4,
    shadow: false,
    style: {
      color: '#000',
    },
    shared: false,
  },
  plotOptions: {
    series: {
      stickyTracking: true,
    },
    column: {
      softThreshold : true,
      pointWidth: 7,
      pointPadding: 0,
      borderWidth: 0,
      borderRadius: 3,
    }
  },
  labels: {
    formatter: (e) => {
      const { value } = e;
      const valueThreeChars = value.slice(0, 3);
      const valueThreeCharsUpper = valueThreeChars.toUpperCase();

      return `<b>${valueThreeCharsUpper}</b>`;
    },
  },
  series: [{
    name: 'Tokyo',
    showInLegend: false,
    color: '#fff',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
}

const MacroViewIncidents = () => (
  <CardStyled>
    <HeaderStyled>
      <TitleStyled>
        <h1>
          Visão macro Incidentes
        </h1>
        <p>
          Hi Tiago,
        </p>
      </TitleStyled>

      <SettingsStyled>
        <p>Settings</p>
      </SettingsStyled>
    </HeaderStyled>

    <ChartStyled>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </ChartStyled>
  </CardStyled>
);

export default MacroViewIncidents;
