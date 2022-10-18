import styles from "../styles/About.module.css";
import { Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Switch from "@mui/material/Switch";
import '@fontsource/roboto';
//import Button from '@material-ui/core/Button';

const label = { inputProps: { "aria-label": "Switch demo" } };

function Webcam() {
  return   <Box style={{justifyContent: 'center'}}>
  <div className={styles.container} style={{margin: 50}}>

      <div style={{margin: 50, justifyContent: 'center'}}>
      <main className={styles.main}>
        <h1 className={styles.title} style={{justifyContent: 'center'}}>
          Speclab Live Webcam Service
        </h1>
        <Stack spacing={5} direction="row" style={{margin: 15, justifyContent: 'center'}}>
          <Button variant="contained">Webcam FB014</Button>
          <Button variant="contained">Webcam FB209</Button>
        </Stack>
        <Stack spacing={5} direction="row" style={{margin: 15, justifyContent: 'center'}}>
          <Button variant="contained">Webcam FB2XX</Button>
          <Button variant="contained">Webcam FB2XX</Button>
        </Stack>
        <Stack spacing={5} direction="row" style={{margin: 15, justifyContent: 'center'}}>
          <Button variant="contained">All views</Button>
        </Stack>
      </main>
      </div>
        

  </div>
  </Box>
}

export default Webcam