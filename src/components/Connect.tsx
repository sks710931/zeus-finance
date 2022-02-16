import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Theme,
  Box,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { activateInjectedProvider, injectedConnector } from "../connectors/injected-connector";
import mm from "../assets/metamask.svg";
import cb from "../assets/coinbase.png";
import { walletlink } from "../connectors/walletlink";
export const Connect = () => {
  const classes = UseStyle();
  const [isOpen, setIsOpen] = useState(false);
  const { activate, account, deactivate } = useWeb3React();
  const handleMetamaskClick = () => {
      activateInjectedProvider("MetaMask");
      activate(injectedConnector);
      setIsOpen(false);
  }

  const handleCoinbaseClick = () => {
    activate(walletlink);
    setIsOpen(false);
}
  return (
    <>
      <div className={classes.title}>Connect to the Ethereum Network.</div>
      <div style={{ textAlign: "center", paddingTop: "24px" }}>
        <Button
          sx={{
            borderRadius: 15,
            backgroundColor: "#000",
          }}
          onClick={() => setIsOpen(true)}
          color="primary"
          variant="contained"
        >
          Connect{" "}
        </Button>
      </div>
      <Dialog open={isOpen}>
        <DialogTitle>Select Wallet</DialogTitle>
        <Divider />
        <DialogContent className={classes.dlg}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              startIcon={<img src={mm} width={40} />}
              className={classes.btn}
              fullWidth
              variant="text"
              onClick={handleMetamaskClick}
            >
              Metamask
            </Button>
            <Button
              startIcon={<img src={cb} width={35} />}
              className={classes.btn}
              fullWidth
              variant="text"
              onClick={handleCoinbaseClick}
            >
              Coinbase
            </Button>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <div>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

const UseStyle = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      paddingTop: "24px",
      fontWeight: "400",
      fontSize: "16px",
      textAlign: "center",
    },
    dlg: {
      width: 450,
      padding: 15,
    },
    btn: {
      color: "black !important" as any,
      fontSize: "22px !important" as any,
    },
  })
);


