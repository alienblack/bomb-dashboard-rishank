import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Header from './Header';
import BoardRoom from './BoardRoom';
import BombFarms from './BombFarms';
import Bond from './Bond';
import Nav from '../../components/Nav';
import useBombStats from '../../hooks/useBombStats';
import useBondStats from '../../hooks/useBondStats';
import usebShareStats from '../../hooks/usebShareStats';


const Dashboard = () => {
    const bombStats = useBombStats();
    const bShareStats = usebShareStats();
    const tBondStats = useBondStats();

  return (
    <>
        <Nav />
            <div style={{margin: "20px", padding: "40px",}}>
                <Header bombStats={bombStats} bShareStats={bShareStats} tBondStats={tBondStats} /> <br />
                <BoardRoom bombStats={bombStats} bShareStats={bShareStats} tBondStats={tBondStats} /> <br />
                <BombFarms bombStats={bombStats} bShareStats={bShareStats} tBondStats={tBondStats} /> <br />
                <Bond bombStats={bombStats} bShareStats={bShareStats} tBondStats={tBondStats} />
            </div>
    </>
  )
}

export default Dashboard;





{/* <Grid container spacing={2}>
            <Grid item xs={9} md={9} lg={10}>
                <Grid container spacing={2}>
                    <Grid item xs={8} md={5} lg={4}>
                        <Typography><br /> </Typography>
                        <Typography>Current supply</Typography>
                        <Typography>Total Supply</Typography>
                        <Typography>Price</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} lg={2}>
                        <Typography style={styles.topLeft}>$BOMB</Typography>
                        <Typography style={styles.topLeft}>8.66M</Typography>
                        <Typography style={styles.topLeft}>60.9K</Typography>
                        <Typography style={styles.topLeft}>$0.24</Typography>
                        <Typography style={styles.topLeft}>1.05BTCB</Typography>
                        <hr/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid> */}