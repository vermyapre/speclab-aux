import styles from "../styles/About.module.css";
import { Stack, Button } from '@mui/material'
import Switch from "@mui/material/Switch";
import '@fontsource/roboto';
//import Button from '@material-ui/core/Button';

const label = { inputProps: { "aria-label": "Switch demo" } };

function About() {
  return  <div className={styles.container} style={{margin: 50}}>

      <div style={{margin: 50}}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </main>
      </div>

      <div>
         <span>With default Theme:</span>
       </div>
       <Switch {...label} defaultChecked />
       <Switch {...label} />
       <Switch {...label} disabled defaultChecked />
        

      </div>
}

export default About