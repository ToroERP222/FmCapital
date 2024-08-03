import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

// Características de la plataforma (ejemplos)
const features = [
  {
    id: 1,
    title: 'Acceso a Instrumentos Financieros',
    text: 'Obtén acceso a una amplia gama de instrumentos financieros, incluyendo acciones, bonos, y fondos mutuos, para diversificar tu cartera y maximizar tus oportunidades de inversión.',
  },
  {
    id: 2,
    title: 'Curso Básico de Trading e Inversión',
    text: 'Inscríbete en nuestro curso básico de trading e inversión para adquirir conocimientos fundamentales y habilidades prácticas que te permitirán navegar el mundo de la bolsa con confianza.',
  },
  {
    id: 3,
    title: 'Implementación de Conocimientos en Bolsa',
    text: 'Aprende cómo aplicar tus conocimientos de trading e inversión en el mercado de valores, utilizando estrategias probadas y análisis detallado para tomar decisiones informadas.',
  },
  {
    id: 4,
    title: 'Trading Automatizado',
    text: 'Aprovecha nuestras herramientas de trading automatizado para ejecutar operaciones de manera eficiente, permitiéndote capitalizar oportunidades en el mercado sin la necesidad de monitoreo constante.',
  },
  {
    id: 5,
    title: 'Desafíos de Trading',
    text: 'Participa en desafíos de trading para poner a prueba tus habilidades y ganar recompensas atractivas mientras mejoras tu estrategia y técnicas de inversión.',
  },
  {
    id: 6,
    title: 'Certificación de Trader',
    text: 'Obtén certificaciones reconocidas en el sector financiero al completar desafíos y alcanzar metas específicas, demostrando tu competencia y conocimientos en trading.',
  },
  {
    id: 7,
    title: 'Inversiones Pasivas',
    text: 'Explora herramientas y estrategias diseñadas para generar ingresos pasivos a través de inversiones inteligentes, permitiéndote ganar mientras te enfocas en otras áreas de tu vida.',
  },
  {
    id: 8,
    title: 'Oportunidades de Inversión Exclusivas',
    text: 'Accede a oportunidades exclusivas de inversión que no están disponibles para el público general, ayudándote a diversificar tu cartera y alcanzar tus objetivos financieros.',
  },
  {
    id: 9,
    title: 'Asesoramiento Personalizado',
    text: 'Recibe asesoramiento personalizado de expertos financieros y traders experimentados, quienes te guiarán en la creación de una estrategia de inversión adaptada a tus necesidades y metas.',
  },
  {
    id: 10,
    title: 'Herramientas Avanzadas de Análisis',
    text: 'Utiliza herramientas avanzadas de análisis y gráficos para tomar decisiones de inversión informadas, aprovechando datos detallados y visualizaciones claras.',
  },
  {
    id: 11,
    title: 'Bonificaciones por Desempeño',
    text: 'Gana bonificaciones adicionales al lograr metas y resultados destacados en tus inversiones, incentivándote a mejorar continuamente tu rendimiento en el mercado.',
  },
];

const MotionBox = motion(Box);

export default function GridListWithHeading() {
  return (
    <Box p={7} bg={useColorModeValue('gray.100', 'gray.700')}>
      {/* Sección de encabezado */}
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading as="h1" fontSize={'3xl'}>Descubre las Características de Nuestra Plataforma</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Aprende, invierte y gana con nuestras herramientas y desafíos exclusivos.
        </Text>
      </Stack>

      {/* Sección de características con íconos de verificación */}
      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <MotionBox
              key={feature.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <HStack align={'top'}>
                {/* Ícono de verificación */}
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                {/* Contenido de la característica */}
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
