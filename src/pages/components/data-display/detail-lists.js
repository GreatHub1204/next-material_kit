import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as ComponentsLayout } from '../../../layouts/components';
import { Layout as MarketingLayout } from '../../../layouts/marketing';
import { Previewer } from '../../../sections/components/previewer';
import { DetailList1 } from '../../../sections/components/detail-lists/detail-list-1';
import { DetailList2 } from '../../../sections/components/detail-lists/detail-list-2';
import { DetailList3 } from '../../../sections/components/detail-lists/detail-list-3';
import { DetailList4 } from '../../../sections/components/detail-lists/detail-list-4';
import { DetailList5 } from '../../../sections/components/detail-lists/detail-list-5';
import { DetailList6 } from '../../../sections/components/detail-lists/detail-list-6';
import { DetailList7 } from '../../../sections/components/detail-lists/detail-list-7';
import { DetailList8 } from '../../../sections/components/detail-lists/detail-list-8';

const components = [
  {
    element: <DetailList1 />,
    title: 'Detail list 1'
  },
  {
    element: <DetailList2 />,
    title: 'Detail list 2'
  },
  {
    element: <DetailList3 />,
    title: 'Detail list 3'
  },
  {
    element: <DetailList4 />,
    title: 'Detail list 4'
  },
  {
    element: <DetailList5 />,
    title: 'Detail list 5'
  },
  {
    element: <DetailList6 />,
    title: 'Detail list 6'
  },
  {
    element: <DetailList7 />,
    title: 'Detail list 7'
  },
  {
    element: <DetailList8 />,
    title: 'Detail list 8'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Components: Detail Lists | Devias Kit PRO
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
    <ComponentsLayout title="Detail Lists">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
