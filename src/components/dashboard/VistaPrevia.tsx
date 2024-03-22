import * as React from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import Grid from '@mui/material/Grid'
import { useLocation, useNavigate } from 'react-router-dom'


const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export const VistaPrevia = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  };

  return (
    <Box
      display="grid"
      minHeight={1}
      gridAutoRows="minmax(15%,auto) minmax(80%,auto) 5%"
      sx={{
        flexGrow: 1,
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          minHeight: 100,
          width: '100%',
          p: 2,
          bgcolor: 'background.default',
        }}
      >
        <Grid
          container
          justifyContent={{
            sm: 'space-between',
            xs: 'center'
          }}
          alignItems="center"
        >
          <Grid item>
            <Typography>{steps[activeStep].label}</Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                textAlign: {
                  sm: 'right',
                  xs: 'center',
                }
              }}
            >
              {state.nombre} {state.apellido} (edad)
            </Typography>
            <Typography
              sx={{
                textAlign: {
                  sm: 'right',
                  xs: 'center',
                }
              }}
            >
              universidad
            </Typography>
            <Typography
              sx={{
                textAlign: {
                  sm: 'right',
                  xs: 'center',
                }
              }}
            >
              carrera
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Box
        width={1}
        height={1}
        minHeight='inherit'
        maxHeight='auto'
        display="grid"
        // gridAutoFlow='column'
        gridAutoFlow={{
          sm: 'column',
          xs: 'row'
        }}
        // gridAutoColumns='25% 25% 45%'
        gridAutoColumns={{
          sm: '25% 25% 45%',
          xs: '100%'
        }}
        justifyContent='space-between'
        sx={{
          backgroundColor: 'yellow',
          py: 2,
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            height: '100%',
            p: 2,
            backgroundColor: 'silver'
          }}
        >
          <Typography
            sx={{
              backgroundColor: 'purple'
            }}
          >
            hola
          </Typography>
        </Paper><Paper
          square
          elevation={0}
          sx={{
            height: '100%',
            p: 2,
            backgroundColor: 'silver'
          }}
        >
          <Typography
            sx={{
              backgroundColor: 'purple'
            }}
          >
            hola
          </Typography>
        </Paper><Paper
          square
          elevation={0}
          sx={{
            height: '100%',
            p: 2,
            backgroundColor: 'silver'
          }}
        >
          <Typography
            sx={{
              backgroundColor: 'purple'
            }}
          >
            hola
          </Typography>
        </Paper>

        {/* <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          // height='minmax(100%, auto)'
          minHeight='100%'
          maxHeight='auto'
          width={1}
          sx={{
            backgroundColor: 'red',
            // height: 'inherit',
          }}
        >
          <Grid
            item
            height={1}
            // minHeight='max-content'
            // maxHeight='auto'
            sm={3}
            xs={12}
            sx={{
              py: 2,
              backgroundColor: 'brown'
            }}
          >
            <Paper
              square
              elevation={0}
              sx={{
                height: '100%',
                p: 2,
                backgroundColor: 'silver'
              }}
            >
              <Typography
                sx={{
                  backgroundColor: 'purple'
                }}
              >
                hola
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            height={1}
            sm={3}
            xs={12}
            sx={{
              py: 2
            }}
          >
            <Paper
              square
              elevation={0}
              sx={{
                height: '100%',
                p: 2
              }}
            >
              <Typography>
                hola
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            height={1}
            sm={5}
            xs={12}
            sx={{
              py: 2
            }}
          >
            <Paper
              square
              elevation={0}
              sx={{
                height: '100%',
                p: 2
              }}
            >
              hola
            </Paper>
          </Grid>
        </Grid> */}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Atras
          </Button>
        }
        sx={{ width: '100%' }}
      />
    </Box >
    // <Box
    //   display='flex'
    //   justifyContent="start"
    //   alignItems="start"
    //   flexDirection='column'
    //   // minHeight={1}
    //   // height={1}
    //   width={1}
    //   sx={{
    //     flexGrow: 1,
    //     minHeight: '100%',
    //   }}
    // >

    // </Box >
  )
  // return (
  //   <Box
  //     display='flex'
  //     justifyContent="start"
  //     alignItems="start"
  //     flexDirection='column'
  //     // minHeight={1}
  //     // height={1}
  //     width={1}
  //     sx={{
  //       flexGrow: 1,
  //       minHeight: '100%',
  //     }}
  //   >
  //     <Paper
  //       square
  //       elevation={0}
  //       sx={{
  //         display: 'flex',
  //         alignItems: 'center',
  //         minHeight: 100,
  //         width: '100%',
  //         p: 2,
  //         bgcolor: 'background.default',
  //       }}
  //     >
  //       <Grid
  //         container
  //         justifyContent={{
  //           sm: 'space-between',
  //           xs: 'center'
  //         }}
  //         alignItems="center"
  //       >
  //         <Grid item>
  //           <Typography>{steps[activeStep].label}</Typography>
  //         </Grid>
  //         <Grid item>
  //           <Typography
  //             sx={{
  //               textAlign: {
  //                 sm: 'right',
  //                 xs: 'center',
  //               }
  //             }}
  //           >
  //             {state.nombre} {state.apellido} (edad)
  //           </Typography>
  //           <Typography
  //             sx={{
  //               textAlign: {
  //                 sm: 'right',
  //                 xs: 'center',
  //               }
  //             }}
  //           >
  //             universidad
  //           </Typography>
  //           <Typography
  //             sx={{
  //               textAlign: {
  //                 sm: 'right',
  //                 xs: 'center',
  //               }
  //             }}
  //           >
  //             carrera
  //           </Typography>
  //         </Grid>
  //       </Grid>
  //     </Paper>
  //     <Box
  //       width={1}
  //       sx={{
  //         flexGrow: 1,
  //         backgroundColor: 'yellow',
  //       }}
  //     >
  //       <Grid
  //         container
  //         direction="row"
  //         justifyContent="space-between"
  //         alignItems="center"
  //         height='inherit'
  //         width={1}
  //         sx={{
  //           backgroundColor: 'red',
  //           // height: 'inherit',
  //         }}
  //       >
  //         <Grid
  //           item
  //           height='inherit'
  //           sm={3}
  //           xs={12}
  //           sx={{
  //             py: 2,
  //             backgroundColor: 'brown'
  //           }}
  //         >
  //           <Paper
  //             square
  //             elevation={0}
  //             sx={{
  //               height: '100%',
  //               p: 2,
  //               backgroundColor: 'silver'
  //             }}
  //           >
  //             <Typography
  //               sx={{
  //                 backgroundColor: 'purple'
  //               }}
  //             >
  //               hola
  //             </Typography>
  //           </Paper>
  //         </Grid>
  //         <Grid
  //           item
  //           height={1}
  //           sm={3}
  //           xs={12}
  //           sx={{
  //             py: 2
  //           }}
  //         >
  //           <Paper
  //             square
  //             elevation={0}
  //             sx={{
  //               height: '100%',
  //               p: 2
  //             }}
  //           >
  //             <Typography>
  //               hola
  //             </Typography>
  //           </Paper>
  //         </Grid>
  //         <Grid
  //           item
  //           height={1}
  //           sm={5}
  //           xs={12}
  //           sx={{
  //             py: 2
  //           }}
  //         >
  //           <Paper
  //             square
  //             elevation={0}
  //             sx={{
  //               height: '100%',
  //               p: 2
  //             }}
  //           >
  //             hola
  //           </Paper>
  //         </Grid>
  //       </Grid>
  //     </Box>
  //     <MobileStepper
  //       variant="text"
  //       steps={maxSteps}
  //       position="static"
  //       activeStep={activeStep}
  //       nextButton={
  //         <Button
  //           size="small"
  //           onClick={handleNext}
  //           disabled={activeStep === maxSteps - 1}
  //         >
  //           Siguiente
  //           {theme.direction === 'rtl' ? (
  //             <KeyboardArrowLeft />
  //           ) : (
  //             <KeyboardArrowRight />
  //           )}
  //         </Button>
  //       }
  //       backButton={
  //         <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
  //           {theme.direction === 'rtl' ? (
  //             <KeyboardArrowRight />
  //           ) : (
  //             <KeyboardArrowLeft />
  //           )}
  //           Atras
  //         </Button>
  //       }
  //       sx={{ width: '100%' }}
  //     />
  //   </Box >
  // )
}