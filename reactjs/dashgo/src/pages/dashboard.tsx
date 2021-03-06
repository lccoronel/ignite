import { useEffect } from 'react';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { parseCookies } from 'nookies';

import { Header } from "../components/Header";
import { SideBar } from '../components/SideBar';
import { api } from '../services/api';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Dashboard() {
  const series = [
    { name: "series1", data: [31, 120, 18, 19, 0, 67, 56]}
  ];

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2021-03-18T00:00:000z',
        '2021-03-19T00:00:000z',
        '2021-03-20T00:00:000z',
        '2021-03-21T00:00:000z',
        '2021-03-22T00:00:000z',
        '2021-03-23T00:00:000z',
        '2021-03-24dT00:00:000z'
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.7
      }
    }
  };

  useEffect(() => {
    const { 'dashgo.token': token } = parseCookies();

    if (token) {
      api.get('/me').then(response => console.log(response.data))
    }
  }, [])

  return (
    <Flex direction="column" h="100vh"> 
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">Inscritos de semana</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}