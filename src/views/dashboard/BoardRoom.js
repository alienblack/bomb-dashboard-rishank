import React from 'react';
import { useMemo } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import ArrowCircleUpOutlined from '@material-ui/icons/ArrowUpwardRounded';
import ArrowCircleDownOutlined from '@material-ui/icons/ArrowDownwardRounded';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import ProgressCountdown from '../Boardroom/components/ProgressCountdown';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';



const BoardRoom = () => {
    const { to } = useTreasuryAllocationTimes();
    const currentEpoch = useCurrentEpoch();
    const cashStat = useCashPriceInEstimatedTWAP();
    const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
  return (
    <div style={{color: "white", fontFamily: 'Nunito'}}>
        <Grid container spacing={2}>
            <Grid item lg={8} md={8} xs={12}>
                 <Typography style={{display:"flex", justifyContent:"flex-end"}}>
                    <a href='#' style={{textDecoration: "underline", marginBottom: "5px", color:"rgba(158, 230, 255, 1)"}}>
                        Read Investment Strategy &nbsp;
                    </a>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} xs={12}>
                        <Button variant="contained" fullWidth style={styles.btn}>
                            Invest Now
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} xs={6}>
                        <Button variant="contained" fullWidth style={styles.btn2}>
                            Chat On Discord
                        </Button>
                    </Grid>
                    <Grid item lg={6} md={6} xs={6}>
                        <Button variant="contained" fullWidth style={styles.btn2}>
                            Read Docs
                        </Button>
                    </Grid>
                </Grid> <br />

                <Grid container style={{ padding: "20px", color: "white", backgroundColor: "rgba(35, 40, 75, 0.75)", borderRadius: "5px"}}>
                    <Grid item lg={12} md={12} xs={12}>
                        <Typography style={{display: "flex",}}>
                            <Typography style={{fontSize: "30px", marginRight:"10px"}}>Boardroom</Typography>
                            <Button style={{backgroundColor: "rgba(0, 232, 162, 0.5)",  marginTop: "13px", height: "22px", textTransform: "none"}}>Recommended</Button>
                        </Typography>
                        <Typography style={{display:"flex", justifyContent:"space-between"}}>
                            <Typography>Stake Bshare and earn BOMB every epoch</Typography>
                            <Typography>TVL: $1,008,430</Typography>
                        </Typography>
                        <hr />
                        <Typography style={{display:"flex", justifyContent:"flex-end", marginBottom: "10px"}}>
                            <Typography>Total Staked: 7232</Typography>
                        </Typography>
                    </Grid>

                    <Grid container spacing={2}>
                       <Grid item lg={2} md={2} xs={4}>
                            <Typography>
                                <Typography>Daily Returns:</Typography>
                                <Typography style={{fontSize: "25px"}}>2%</Typography>
                            </Typography>
                        </Grid>
                        <Grid item lg={2} md={3} xs={4}>
                            <Typography>
                                <Typography>Your Stake:</Typography>
                                <Typography>6.0000 <br /> ≈ $1171.62</Typography>
                            </Typography>
                        </Grid>
                        <Grid item lg={2} md={2} xs={4}>
                            <Typography>
                                <Typography>Earned:</Typography>
                                <Typography>1660.4413 <br />  ≈ $298.88</Typography>
                            </Typography>
                        </Grid>
                        <Grid item lg={6} md={5} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item lg={6} md={6} xs={4} style={{display: "flex", justifyContent:"center"}}>
                                    <Button fullWidth variant="outlined" style={{borderColor: "white", borderRadius: "30px"}}>Deposit <ArrowCircleUpOutlined/> </Button>
                                </Grid>
                                <Grid item lg={6} md={6} xs={4} style={{display: "flex", justifyContent:"center"}}>
                                    <Button fullWidth variant="outlined" style={{borderColor: "white", borderRadius: "30px"}}>Withdraw <ArrowCircleDownOutlined /> </Button>
                                </Grid>
                                <Grid item lg={12} md={12} xs={6} style={{display: "flex", justifyContent:"center"}}>
                                    <Grid item lg={7} md={12} sx = {10}>
                                        <Button fullWidth variant="outlined" style={{borderColor: "white", borderRadius: "30px"}}>Claim Rewards</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={4} md={4} xs={10} style={styles.leftSide}>
                <Typography style={{fontSize: "20px",}}>Latest News</Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default BoardRoom;

const styles = {
    leftSide : {
        backgroundColor: "rgba(35, 40, 75, 0.75)",
        borderRadius: "10px",
        height: "300px",
        padding: "10px 20px",
    },
    btn : {
        backgroundColor: "rgba(0, 173, 232, 0.8)",
        color: "white",
        fontWeight: "600",
        fontSize: "20px",
        textTransform: 'none',
    },
    btn2 : {
        backgroundColor: "grey",
        fontWeight: "600",
        fontSize: "20px",
        textTransform: 'none',
    },
}