import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as ComponentsLayout } from '../../layouts/components';
import { Layout as MarketingLayout } from '../../layouts/marketing';
import { Previewer } from '../../sections/components/previewer';
import { Chart1 } from '../../sections/components/charts/chart-1';
import { Chart2 } from '../../sections/components/charts/chart-2';
import { Chart3 } from '../../sections/components/charts/chart-3';
import { Chart4 } from '../../sections/components/charts/chart-4';
import { Chart5 } from '../../sections/components/charts/chart-5';
import { Chart6 } from '../../sections/components/charts/chart-6';
import { Chart7 } from '../../sections/components/charts/chart-7';
import { Chart8 } from '../../sections/components/charts/chart-8';
import { Chart9 } from '../../sections/components/charts/chart-9';
import { Chart10 } from '../../sections/components/charts/chart-10';
import { Chart11 } from '../../sections/components/charts/chart-11';
import { Chart12 } from '../../sections/components/charts/chart-12';
import { Chart13 } from '../../sections/components/charts/chart-13';

const components = [
  {
    element: <Chart1 />,
    title: 'Chart 1'
  },
  {
    element: <Chart2 />,
    title: 'Chart 2'
  },
  {
    element: <Chart3 />,
    title: 'Chart 3'
  },
  {
    element: <Chart4 />,
    title: 'Chart 4'
  },
  {
    element: <Chart5 />,
    title: 'Chart 5'
  },
  {
    element: <Chart6 />,
    title: 'Chart 6'
  },
  {
    element: <Chart7 />,
    title: 'Chart 7'
  },
  {
    element: <Chart8 />,
    title: 'Chart 8'
  },
  {
    element: <Chart9 />,
    title: 'Chart 9'
  },
  {
    element: <Chart10 />,
    title: 'Chart 10'
  },
  {
    element: <Chart11 />,
    title: 'Chart 11'
  },
  {
    element: <Chart12 />,
    title: 'Chart 12'
  },
  {
    element: <Chart13 />,
    title: 'Chart 13'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Components: Charts | Devias Kit PRO
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={8}>
            {components.map((component) => (
              <Previewer
                key={component.title}
                title={component.title}
              >
                {component.element}
              </Previewer>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <MarketingLayout>
    <ComponentsLayout title="Charts">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
