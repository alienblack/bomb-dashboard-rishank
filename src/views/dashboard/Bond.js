import React from 'react';
import { useMemo } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import ArrowCircleDownOutlined from '@material-ui/icons/ArrowDownwardRounded';

const Bond = () => {
  return (
    <div style={{color: "white", fontFamily: 'Nunito'}}>
    <Grid container spacing={2} style={{ padding: "20px", color: "white", backgroundColor: "rgba(35, 40, 75, 0.75)", borderRadius: "5px"}}>
        <Grid item lg={12} md={12} xs={12}> 
            <Typography style={{marginBottom : "20px"}}>
                <Typography>
                    <Typography style={{fontSize: "30px", marginRight:"10px"}}>Bonds</Typography>
                    <Typography>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</Typography>
                </Typography>
            </Typography>
        </Grid>
        <Grid container spacing={2}>
            <Grid item lg={3} md={6} xs={6}>
                <Typography>
                    <Typography>Current Price: (Bomb)^2</Typography>
                    <Typography style={{fontSize: "23px"}}>BBond = 6.2872 BTCB</Typography>
                </Typography>
            </Grid>
            <Grid item lg={3} md={6} xs={6}>
                <Typography>
                    <Typography>Available to redeem:</Typography>
                    <Typography style={{fontSize: "23px"}}>456</Typography>
                </Typography>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={6} md={5} xs={6}>
                    <Typography>
                        <Typography>Purchase BBond</Typography>
                        <Typography style={{fontSize: "10px"}}>Bomb is over peg</Typography>
                    </Typography>
                </Grid>
                <Grid item lg={6} md={4} xs={6}>
                    <Button fullWidth variant="outlined" style={{borderColor: "white", borderRadius: "30px"}} disabled>
                        Purchase <ArrowCircleDownOutlined />
                    </Button>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
              <Grid item lg={6} md={5} xs={6}>
                    <Typography>
                        <Typography>Redeem BBond</Typography>
                    </Typography>
                </Grid>
                <Grid item lg={6} md={4} xs={6}>
                    <Button  fullWidth variant="outlined" style={{borderColor: "white", borderRadius: "30px"}}>
                        Redeem <ArrowCircleDownOutlined />
                    </Button>
                </Grid>
              </Grid>


            </Grid>
        </Grid>
    </Grid>
</div>
  )
}

export default Bond