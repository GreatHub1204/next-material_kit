import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as ComponentsLayout } from '../../../layouts/components';
import { Layout as MarketingLayout } from '../../../layouts/marketing';
import { Previewer } from '../../../sections/components/previewer';
import { QuickStats1 } from '../../../sections/components/quick-stats/quick-stats-1';
import { QuickStats2 } from '../../../sections/components/quick-stats/quick-stats-2';
import { QuickStats3 } from '../../../sections/components/quick-stats/quick-stats-3';
import { QuickStats4 } from '../../../sections/components/quick-stats/quick-stats-4';
import { QuickStats5 } from '../../../sections/components/quick-stats/quick-stats-5';
import { QuickStats6 } from '../../../sections/components/quick-stats/quick-stats-6';
import { QuickStats7 } from '../../../sections/components/quick-stats/quick-stats-7';
import { QuickStats8 } from '../../../sections/components/quick-stats/quick-stats-8';
import { QuickStats9 } from '../../../sections/components/quick-stats/quick-stats-9';

const components = [
  {
    element: <QuickStats1 />,
    title: 'Quick stats 1'
  },
  {
    element: <QuickStats2 />,
    title: 'Quick stats 2'
  },
  {
    element: <QuickStats3 />,
    title: 'Quick stats 3'
  },
  {
    element: <QuickStats4 />,
    title: 'Quick stats 4'
  },
  {
    element: <QuickStats5 />,
    title: 'Quick stats 5'
  },
  {
    element: <QuickStats6 />,
    title: 'Quick stats 6'
  },
  {
    element: <QuickStats7 />,
    title: 'Quick stats 7'
  },
  {
    element: <QuickStats8 />,
    title: 'Quick stats 8'
  },
  {
    element: <QuickStats9 />,
    title: 'Quick stats 9'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Components: Quick Stats | Devias Kit PRO
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
    <ComponentsLayout title="Quick Stats">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
