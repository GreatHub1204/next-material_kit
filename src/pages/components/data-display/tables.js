import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as ComponentsLayout } from '../../../layouts/components';
import { Layout as MarketingLayout } from '../../../layouts/marketing';
import { Previewer } from '../../../sections/components/previewer';
import { Table1 } from '../../../sections/components/tables/table-1';
import { Table2 } from '../../../sections/components/tables/table-2';
import { Table3 } from '../../../sections/components/tables/table-3';
import { Table4 } from '../../../sections/components/tables/table-4';
import { Table5 } from '../../../sections/components/tables/table-5';
import { Table6 } from '../../../sections/components/tables/table-6';
import { Table7 } from '../../../sections/components/tables/table-7';
import { Table8 } from '../../../sections/components/tables/table-8';
import { Table9 } from '../../../sections/components/tables/table-9';
import { Table10 } from '../../../sections/components/tables/table-10';
import { Table11 } from '../../../sections/components/tables/table-11';

const components = [
  {
    element: <Table1 />,
    title: 'Table 1'
  },
  {
    element: <Table2 />,
    title: 'Table 2'
  },
  {
    element: <Table3 />,
    title: 'Table 3'
  },
  {
    element: <Table4 />,
    title: 'Table 4'
  },
  {
    element: <Table5 />,
    title: 'Table 5'
  },
  {
    element: <Table6 />,
    title: 'Table 6'
  },
  {
    element: <Table7 />,
    title: 'Table 7'
  },
  {
    element: <Table8 />,
    title: 'Table 8'
  },
  {
    element: <Table9 />,
    title: 'Table 9'
  },
  {
    element: <Table10 />,
    title: 'Table 10'
  },
  {
    element: <Table11 />,
    title: 'Table 11'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Components: Tables | Devias Kit PRO
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
    <ComponentsLayout title="Tables">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
