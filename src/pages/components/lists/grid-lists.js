import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as ComponentsLayout } from '../../../layouts/components';
import { Layout as MarketingLayout } from '../../../layouts/marketing';
import { Previewer } from '../../../sections/components/previewer';
import { GridList1 } from '../../../sections/components/grid-lists/grid-list-1';
import { GridList2 } from '../../../sections/components/grid-lists/grid-list-2';
import { GridList3 } from '../../../sections/components/grid-lists/grid-list-3';
import { GridList4 } from '../../../sections/components/grid-lists/grid-list-4';
import { GridList5 } from '../../../sections/components/grid-lists/grid-list-5';
import { GridList6 } from '../../../sections/components/grid-lists/grid-list-6';

const components = [
  {
    element: <GridList1 />,
    title: 'Grid list 1'
  },
  {
    element: <GridList2 />,
    title: 'Grid list 2'
  },
  {
    element: <GridList3 />,
    title: 'Grid list 3'
  },
  {
    element: <GridList4 />,
    title: 'Grid list 4'
  },
  {
    element: <GridList5 />,
    title: 'Grid list 5'
  },
  {
    element: <GridList6 />,
    title: 'Grid list 6'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Components: Grid Lists | Devias Kit PRO
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
    <ComponentsLayout title="Grid Lists">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
