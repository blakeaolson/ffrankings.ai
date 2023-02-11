import { Box, Container, Heading, Button} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () =>{
  let navigate = useNavigate();
  const routeChange = () =>{
    let path = '/rankings';
    navigate(path);
  }

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }

  return(
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Container>
        <Box flexGrow={1}>
          <Heading as='h2' size='lg' variant='page-title'>
            Fantasy Football powered with AI
          </Heading>
          <p> Rankings based on Machine Learning </p>
        </Box>
        <Box marginTop="30">
          <Heading variant='section-title'>
            How it works
          </Heading>
          <p> These rankings are based off of a machine learning model that was trained by scraping thousands of data points from the 
            past 20 years of football. In order to predict fantasy points for the upcoming season, 
            players were given labels of their PPR points per game in the following season. Through this
            labelling, I was able to achieve a 60% accuracy based on the Root Mean Square Error and the
            average value of each label. A model was created for each position due to statistics varying
            in importance positionally.
            </p>
          <Box align="center" marginTop="5">
            <Button
            scroll={false}
            rightIcon={<ChevronRightIcon/>}
            colorScheme="teal"
            onClick={routeChange}
            >
              View Rankings
            </Button>
          </Box>
        </Box>
        <Box marginTop="21">
          <Heading variant='section-title'>
            Limitations
          </Heading>
          <p>
            Although the model is relatively accurate at predicting future PPR score, there are a few limitations.
            The model was trained by gathering only the top 250 players for any given year. If a player did not make
            the top 250 in the following year they would be taken out of the dataset. That being said, these rankings
            make the assumption that all the players in the list will make the top 250 players again, which almost certainly
            will not happen. Injuries are also another factor that are hard to predict. This model does not take injuries
            into account when computing future ppr score.
          </p>
        </Box>
        <Box>
          <Heading variant='section-title'>

          </Heading>
        </Box>
      </Container>
    </motion.div>
  );
}
export default Home;