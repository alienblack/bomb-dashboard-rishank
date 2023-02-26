import React from 'react';
import { useMemo } from 'react';
import moment from 'moment';
import { Grid, Typography } from '@material-ui/core';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import ProgressCountdown from '../Boardroom/components/ProgressCountdown';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';



const Header = ({bShareStats, tBondStats, bombStats}) => {
    const { to } = useTreasuryAllocationTimes();
    const currentEpoch = useCurrentEpoch();
    const cashStat = useCashPriceInEstimatedTWAP();
    const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);

    const bSharePriceInDollars = useMemo(
        () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
        [bShareStats],
      );
    const bSharePriceInBNB = useMemo(
        () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
        [bShareStats],
      );
    const bShareCirculatingSupply = useMemo(
        () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
        [bShareStats],
      );
    const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);
    
    const tBondPriceInDollars = useMemo(
        () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
        [tBondStats],
      );
    const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
    const tBondCirculatingSupply = useMemo(
        () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
        [tBondStats],
      );
    const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);
    const bombPriceInDollars = useMemo(
        () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],);
    const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
    const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
    const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);
  return (
    <div style={{ padding: "20px", color: "white", backgroundColor: "rgba(35, 40, 75, 0.75)", borderRadius: "5px"}}>
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h2 style={{color: "white"}}>Bomb Finance Summary</h2>
            </div>
            <hr style={{width: "95%", marginBottom: "40px"}}/>
        </div>

        <Grid container spacing={2}>
            <Grid item xs={12} md={9} lg={10}>
              <Grid container spacing={0}>
                <Grid item xs={2} md={2} lg={2} >
                    <Typography> <br /> </Typography> <hr/>
                    <Typography>$BOMB</Typography> <hr/>
                    <Typography>$BSHARE</Typography> <hr/>
                    <Typography>$BBOND</Typography> <hr/>
                </Grid>
                <Grid item xs={3} md={3} lg={2}>
                    <Typography style={styles.topLeft}>Current Supply</Typography> <hr/>
                    <Typography style={styles.topLeft}>{(bombCirculatingSupply/1000000).toFixed(2)} M</Typography> <hr/>
                    <Typography style={styles.topLeft}>{(bShareCirculatingSupply/1000).toFixed(2)} KK</Typography> <hr/>
                    <Typography style={styles.topLeft}>{(tBondCirculatingSupply/1000).toFixed(2)} K</Typography> <hr/>
                </Grid>
                <Grid item xs={3} md={3} lg={2}>
                    <Typography style={styles.topLeft}>Total Supply</Typography> <hr/>
                    <Typography style={styles.topLeft}>{(bombTotalSupply/1000).toFixed(2)} K</Typography> <hr/>
                    <Typography style={styles.topLeft}>{(bShareTotalSupply/1000000).toFixed(2)} M</Typography> <hr/>
                    <Typography style={styles.topLeft}>{(tBondTotalSupply/1000).toFixed(2)} K</Typography> <hr/>
                </Grid>
                <Grid item xs={4} md={3} lg={3}>
                    <Typography style={styles.topLeft}>Price</Typography> <hr/>
                    <Typography style={styles.topLeft}>${bombPriceInDollars} / {parseFloat(bombPriceInBNB).toFixed(4)}BTCB</Typography>
                    <hr/>
                    <Typography style={styles.topLeft}>${bSharePriceInDollars} / {parseFloat(bSharePriceInBNB).toFixed(4)}BTCB</Typography>
                    <hr/>
                    <Typography style={styles.topLeft}>${tBondPriceInDollars} / {parseFloat(tBondPriceInBNB).toFixed(4)}BTCB</Typography>
                    <hr/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} lg={2} justifyContent="flex-end">
                <Typography style={styles.topRight}>Current Epotch</Typography>
                <Typography style={{display: "flex",justifyContent: "center",color: "white",}} variant='h4' >{Number(currentEpoch)}</Typography>
                <hr/>
                <Typography style={{display: "flex",justifyContent: "center",color: "white",}} variant='h4' >
                <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
                </Typography>
                <Typography style={styles.topRight}>Next Epotch in</Typography>
                <hr />
                <Typography style={styles.topRight}>Live TWAP: <Typography style={styles.subchild}>{(scalingFactor)}</Typography> </Typography>
                <Typography style={styles.topRight}>TVL: <Typography style={styles.subchild}>  $5,002,412 </Typography> </Typography>
                <Typography style={styles.topRight}>Last Epoch TWAP: <Typography style={styles.subchild}>  1.22 </Typography> </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Header;

const styles = {
    data: {
        color: "white",
        fontWeight: '400',
        width: "25%",
    },
    topRight : {
        display: "flex",
        justifyContent: "center",
        color: "white",
        fontSize: "14px",
    },
    topLeft : {
        display: "flex",
        justifyContent: "center",
        color: "white",
    },
    subchild: {
        color: "#00E8A2",
        fontSize: "14px",
    }
}