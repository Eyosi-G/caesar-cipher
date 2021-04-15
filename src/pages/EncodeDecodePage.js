import React, { useState } from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { connect } from "react-redux";
import actions from "../store/redux/actions";
import {

  Button,
  CircularProgress,
  Container,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
const Margin = styled.div`
  margin-top: ${(props) => (props.top ? props.top : "0px")};
  margin-bottom: ${(props) => (props.bottom ? props.bottom : "0px")};
  margin-left:${props=> (props.left ? props.left: "0px")};
`;
const StyledTextField = styled(TextField)``;
const StyledButton = styled(Button)`
  text-transform: none !important;
`;

const EncodeDecodePage = (props) => {
  const [shiftNumber,setShiftNumber] = useState(3);
  const [text,setText] = useState("");
  const [mode,setMode] = useState("encode")
  const display = () => {
    if (props.state.loading)
      return (
        <Grid container justify="center">
          <CircularProgress />
        </Grid>
      );
    if (!props.state.loading && props.state.text)
      return <Grid container>{props.state.text}</Grid>;
  };
  const textChangeHandler = (e)=>{
    setText(e.target.value);
  }
  const shiftNumberHandler =(e)=>{
    if(Number(e.target.value) >= 0)
    setShiftNumber(e.target.value);
  }

  const modeHandler = (e)=>{
    setMode(e.target.value)
  }
  const submitHandler = (e)=>{
    e.preventDefault()
    if(mode === "encode")
    props.dispatchEncode(text,shiftNumber)
    else if(mode ==="decode")
    props.dispatchDecode(text,shiftNumber)
  }
  return (
    <>
      <NavBar />
      <Margin top="20px">
        <Container>
          <form onSubmit={submitHandler}>
            <Grid container alignItems="center" direction="column">
              <Grid container item xs={8}>
                <Margin bottom="10px" >
                  <FormHelperText>Shift Digit</FormHelperText>
                  <TextField
                    type="number"
                    onChange={shiftNumberHandler}
                    value={shiftNumber}
                    
                  />
                </Margin>
                <Margin bottom="10px" left="10px">
                  <FormHelperText>Mode</FormHelperText>
                  <Select value={mode} onChange={modeHandler}>
                    <MenuItem value="encode">Encode</MenuItem>
                    <MenuItem value="decode">Decode</MenuItem>
                  </Select>
                </Margin>
               

              </Grid>
              <Grid container item xs={8}>
                <StyledTextField
                  fullWidth
                  multiline
                  rows={8}
                  variant="filled"
                  label="Text To Be Encoded"
                  onChange={textChangeHandler}
                  value={text}

                />
              </Grid>
              <Grid container item xs={8} justify="flex-end">
                <Margin top="10px">
                  <StyledButton
                    variant="outlined"
                    color="secondary"
                    type="submit"
                  >
                    {mode==="encode" ? "Encode" : "Decode"}
                  </StyledButton>
                </Margin>
              </Grid>
              <Grid container item xs={8} direction="column" justify="center">
                <Margin top="15px">{display()}</Margin>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Margin>
    </>
  );
};
const mapActionsToProps = (dispatch) => ({
  dispatchEncode: (text, shiftNumber) => dispatch(actions(text,shiftNumber,"encode")),
  dispatchDecode: (text, shiftNumber) => dispatch(actions(text,shiftNumber,"decode")),

});
const mapStateToProps = (state) => ({
  state:state,
});
export default connect(mapStateToProps, mapActionsToProps)(EncodeDecodePage);
