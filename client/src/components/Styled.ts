import styled from 'styled-components';

interface AnalyticsChartProps {
  backgroundColor: string;
  gridArea: string[];
}

export const AnalyticsDashbord = styled.div`
  max-width: 100%;
  min-height: 1600px;
  display: grid;
  grid-template: repeat(4, 25%) / repeat(6, 16.67%);
  @media (max-width: 1160px) {
    min-height: 2800px;
    grid-template: repeat(6, 400px) / repeat(2, 50%);
  }
`;

export const AnalyticsChart = styled.div`
  border: 0.5px solid #939393;
  background-color: ${(props: AnalyticsChartProps) => props.backgroundColor};
  padding: 0 7px;
  overflow: auto;
  grid-area: ${(props: AnalyticsChartProps) => props.gridArea[0]};
  @media (max-width: 1160px) {
    grid-area: ${(props: AnalyticsChartProps) => props.gridArea[1]};
  }
`;

export const AnalyticsChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
