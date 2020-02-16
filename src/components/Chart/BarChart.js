import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { rangeArr } from '../../utils/array';
import { numberWithCommas } from '../../utils/number';

const BarChart = ({ chartData }) => {
  const colors = { 매출액: 'rgba(81, 170, 243, 0.1)', 영업이익: 'rgba(81, 170, 243, 0.5)', 이슈매출액: 'rgba(243, 213, 81, 0.5)', 이슈영업이익: 'rgba(243, 213, 81, 1)' };
  const indexArray = rangeArr(chartData.startYear, chartData.endYear);

  let processedData = [];
  let revenueAvg = 0;
  let profitAvg = 0;
  let revenueSum = 0;
  let profitSum = 0;
  let diffRatio = 0;
  let highestProfit = 0;
  let maxValue = 0;
  let minValue = 0;

  indexArray.forEach((item, index) => {
    revenueSum += chartData.revenueData[index];
    profitSum += chartData.profitData[index];

    if (chartData.profitData[index] > highestProfit) {
      highestProfit = chartData.profitData[index];
    }

    if (index === indexArray.length - 1) {
      revenueAvg = revenueSum / indexArray.length;
      profitAvg = profitSum / indexArray.length;
      diffRatio = Math.round((revenueAvg - profitAvg) / 2);

      if (highestProfit > diffRatio) {
        console.log('highestProfit > diffRatio');
        diffRatio = highestProfit + 50;
      }
    }
  })

  indexArray.forEach((item, index) => {
    const revenue = chartData.revenueData[index];

    processedData.push({
      year: item.toString(),
      매출액: revenue.toString(),
      영업이익: chartData.profitData[index].toString()
    })

    // calulate max, min value
    if ((indexArray.length - 1) === index) {
      for (let i = 0; i < processedData.length; i++) {
        if (+processedData[i].매출액 > maxValue) {
          maxValue = +processedData[i].매출액;
        }

        if (+processedData[i].영업이익 < minValue) {
          minValue = +processedData[i].영업이익;
        }
      }
    }
  })

  return (
    <>
      <ResponsiveBar
        data={processedData}
        groupMode="grouped"
        keys={["매출액", "영업이익"]}
        indexBy="year"
        margin={{ top: 50, right: 0, bottom: 45, left: 0 }}
        padding={0.3}
        colors={d => {
          if (d.indexValue === chartData.issuedYear.toString()) return colors[`이슈${d.id}`]
          return colors[d.id]
        }}
        maxValue={maxValue}
        minValue={minValue}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisLeft={null}
        axisBottom={{
          legend: `(단위: ${chartData.unit})`,
          legendPosition: 'end',
          legendOffset: 20,
          tickSize: 0,
          tickPadding: 0
        }}
        enableGridY={false}
        // markers={[
        //   {
        //     axis: 'y',
        //     value: diffRatio,
        //     lineStyle: { stroke: '#ffc440', strokeWidth: 3 },
        //     legendOrientation: 'vertical',
        //   },
        // ]}
        labelSkipWidth={0}
        labelSkipHeight={0}
        labelTextColor={'black'}
        labelFormat={d => {
          // const value = (d < diffRatio) ? d : parseInt(d) + diffRatio;
          return <tspan y={-10}>{numberWithCommas(d)}</tspan>
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'top-right',
            direction: 'row',
            justify: false,
            translateY: -30,
            itemWidth: 65,
            itemHeight: -20,
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </>
  )
}

export default BarChart;