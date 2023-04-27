import PropTypes from 'prop-types';
import { Box, Card, CardHeader, Tab, Tabs } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../../components/chart';

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      stacked: true,
      toolbar: {
        show: false
      }
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.mode === 'dark'
        ? theme.palette.primary.darkest
        : theme.palette.primary.light
    ],
    dataLabels: {
      enabled: false
    },
    legend: {
      labels: {
        colors: theme.palette.text.secondary
      },
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
      }
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '32px'
      }
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      y: {
        formatter: (value) => `${value}k events`
      }
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
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
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  };
};

export const OverviewSubscriptionUsage = (props) => {
  const { chartSeries } = props;
  const chartOptions = useChartOptions();

  return (
    <Card>
      <CardHeader
        subheader="Based on the selected period"
        title="Subscription Usage"
        action={<Tabs value="year">
          <Tab
            label="Year"
            value="year"
          />
          <Tab
            label="Month"
            value="month"
          />
          <Tab
            label="Week"
            value="week"
          />
        </Tabs>}
      />
      <Box sx={{ height: 336 }}>
        <Chart
          height={300}
          options={chartOptions}
          series={chartSeries}
          type="bar"
        />
      </Box>
    </Card>
  );
};

OverviewSubscriptionUsage.propTypes = {
  chartSeries: PropTypes.array.isRequired
};
