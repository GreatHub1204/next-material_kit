import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as ComponentsLayout } from '../../layouts/components';
import { Layout as MarketingLayout } from '../../layouts/marketing';
import { Previewer } from '../../sections/components/previewer';
import { Modal1 } from '../../sections/components/modals/modal-1';
import { Modal2 } from '../../sections/components/modals/modal-2';
import { Modal3 } from '../../sections/components/modals/modal-3';
import { Modal4 } from '../../sections/components/modals/modal-4';
import { Modal5 } from '../../sections/components/modals/modal-5';
import { Modal6 } from '../../sections/components/modals/modal-6';
import { Modal7 } from '../../sections/components/modals/modal-7';
import { Modal8 } from '../../sections/components/modals/modal-8';
import { Modal9 } from '../../sections/components/modals/modal-9';
import { Modal10 } from '../../sections/components/modals/modal-10';

const components = [
  {
    element: <Modal1 />,
    title: 'Modal 1'
  },
  {
    element: <Modal2 />,
    title: 'Modal 2'
  },
  {
    element: <Modal3 />,
    title: 'Modal 3'
  },
  {
    element: <Modal4 />,
    title: 'Modal 4'
  },
  {
    element: <Modal5 />,
    title: 'Modal 5'
  },
  {
    element: <Modal6 />,
    title: 'Modal 6'
  },
  {
    element: <Modal7 />,
    title: 'Modal 7'
  },
  {
    element: <Modal8 />,
    title: 'Modal 8'
  },
  {
    element: <Modal9 />,
    title: 'Modal 9'
  },
  {
    element: <Modal10 />,
    title: 'Modal 10'
  }
];

export const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Components: Modals | Devias Kit PRO
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
    <ComponentsLayout title="Modals">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
