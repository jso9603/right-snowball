import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { rangeArr } from '../../utils/array';
import { numberWithCommas } from '../../utils/number';

const BarChart =({ chartData }) => {
    const colors = { 매출액: 'lightGray', 영업이익: 'gray', 이슈매출액: '#51abf3', 이슈영업이익: '#1f6aa7' };
    const indexArray = rangeArr(chartData.startYear, chartData.endYear);

    let processedData = [];
    let revenueAvg = 0;
    let profitAvg = 0;
    let diffRatio = 0;
    let highestProfit = 0;

    indexArray.forEach((item, index) => {
        revenueAvg += chartData.revenueData[index];
        profitAvg += chartData.profitData[index];

        if (chartData.profitData[index] > highestProfit) {
            highestProfit = chartData.profitData[index];
        }

        if (index === indexArray.length - 1) {
            revenueAvg = revenueAvg / indexArray.length;
            profitAvg = profitAvg / indexArray.length;

            if (highestProfit > (revenueAvg - profitAvg * 3)) {
                diffRatio = highestProfit + 50;
            }
        }
    })

    indexArray.forEach((item, index) => {
        processedData.push({
            year: item.toString(), 
            매출액: (chartData.revenueData[index] - diffRatio).toString(),
            영업이익: chartData.profitData[index].toString()
        })
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
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisLeft={null}
            enableGridY={false}
            markers={[
                {
                    axis: 'y',
                    value: diffRatio,
                    lineStyle: { stroke: '#ffc440', strokeWidth: 3 },
                    legendOrientation: 'vertical',
                },
            ]}
            labelSkipWidth={0}
            labelSkipHeight={0}
            labelTextColor={'black'}
            labelFormat={d => {
                const value = (d < diffRatio) ? d : parseInt(d) + diffRatio;
                return <tspan y={ 20 }>{`${numberWithCommas(value)} 억원`}</tspan>
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'top-right',
                    direction: 'row',
                    justify: false,
                    translateY: -30,
                    itemWidth: 65,
                    itemHeight: 20,
                }
            ]}
            tooltipFormat={() => {}}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    </>
  )}
  
  export default BarChart;