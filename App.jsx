import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import {Tabs,Tab} from 'material-ui/Tabs';
import radioButton from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },

  color: 'green',
  fontWeight: 'bold'
};



class App extends React.Component {
constructor(props){
super(props);
this.state = {
value:0,
Value:4

 };
 this.onChange=this.onChange.bind(this),
this.handleChange=this.handleChange.bind(this)
 }

 handleChange(event,index,value){
 this.setState({
 value
 });
 }

 onChange(even,index,value){
 this.setState({
 Value
 });
 }

render() {
         function handleTouchTap(){
         alert('Fill the form before proceeding further')

}
    return (
    <MuiThemeProvider>


      <div>
        <AppBar
          style={styles}
          title={
          <font size="6.5">Welcome to the Online Application Form</font> }
          onTitleTouchTap={handleTouchTap}
          iconElementRight={
          <div>
          <RaisedButton key={1} label ="SEARCH"/>
          <RaisedButton key={2} label="HOME"/>
          <RaisedButton key={3} label="LOG OUT"/>
          </div>}
         />

          <Tabs>
          <Tab label="Personal Details">
          <form>
          <label>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <div>

          First Name:<br/>
            <input type="text" name="name"/><br/>

          Middle Name:<br/>
          <input type="text" name="name"/><br/>

          Last Name:<br/>
          <input type="text" name="name"/><br/>

          Full Name(In Hindi):<br/>
          <input type="text" name="name"/><br/>
          <br/>

          Date OF Birth:
          <DatePicker hintText="Select Date" />
          <br/>


          SEX:
          <RadioButtonGroup defaultSelected="not_light">
          <RadioButton value="not_light" label="Male"/>
          <RadioButton value="ludicrious" label="Female"/>
           <RadioButton value="enterprise" label="Others"/>
           </RadioButtonGroup>
           <br/>

            Nationality:<br/>
            <SelectField
            value={this.state.value}
            onchange={this.handleChange}
            >
            <MenuItem value={0} primaryText="No Selection"/>
            <MenuItem value={1} primaryText="Indian"/>
            <MenuItem value={2} primaryText="Asian"/>
            <MenuItem value={3} primaryText="Others"/>
            </SelectField><br/>

            Blood group:<br/>
            <SelectField
            value={this.state.Value}
            onchange={this.onChange}
            >
            <MenuItem Value={4} primaryText="No Selection"/>
            <MenuItem Value={5} primaryText="B+"/>
            <MenuItem Value={6} primaryText="O+"/>
            <MenuItem Value={7} primaryText="O-"/>
            <MenuItem Value={8} primaryText="Others"/>
            </SelectField><br/>



    Mother's Name:<br/> <input type="text" name="name"/><br/>
    Mother's Occupation:<br/> <input type="text" name="name"/><br/>
    Father's Name:<br/><input type ="text" name="name"/><br/>
    Father's Occupation:<br/> <input type ="text" name="name"/><br/>
    <br/>
    Category:
    <select>
    <option selected value="No Selection">No Selection</option>
    <option value="General">General</option>
    <option value="OBC">OBC</option>
    <option value="Sc">Sc</option>
    <option value="St">St</option>
    <option value="others">others</option>
    </select><br/>
     <br />

    Address:  <br/>
      <input type="text" name="name"/><br/>
    Country:<br/>
    <input type="text" name="name"/><br/>
    State:<br/>
    <input type="text" name="name"/><br/>
    City:<br/>
    <input type="text" name="name"/><br/>
    Pin:<br/>
    <input type="number" name="name"/><br/>
    Phone:<br/>
    <input type="numeric" name="name"/><br/>
    E-Mail:<br/>
    <input type="text" name="name"/><br/>
<br/>
          <input type="submit" value="Submit"/>
          </div>
          </div>
            </label><br/>

          </form>
          </Tab>

          <Tab label="Academic Details">
          <form>
          <label>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <div>
          Year Of Passing Class 10th or Equivalent:<br/>
          <select>
          <option selected value="--SELECT--">--SELECT--</option>
          <option value="2015">2015</option>
          <option value="2013">2014</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          </select>
          <br/><br/>
          Select Board Of Class 12th Qualifying Examination:<br/>
          <select>
          <option selected value="--SELECT--">--SELECT--</option>
          <option value="C.B.S.E">C.B.S.E</option>
          <option value="I.C.S.E">I.C.S.E</option>
          <option value="American Board">American Board</option>
          <option value="State Board,Specify ">State Board, Specify</option>
          </select><br/>

          If State Board Specify:<br/>
          <select>
          <option value="Uttar Pradesh">U.P</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Bihar">Bihar</option>
          <option value="South Indian">South Indian</option>
          <option value="J&K">J&K</option>
          <option value="North Eastern">North Eastern</option>
          <option value="West Bengal">West Bengal</option>
          <option value="others">others</option>
          </select><br/>
          <br/>

         Place of class 12th/Qualifying Examination Schooling:<br/>
         <input type="text" name="name"/><br/><br/>

         Type Of institution of class 12th:<br/>
         <select>
         <option selected value="--Select--">--Select--</option>
         <option value="Government">Government</option>
         <option value="Public">Public</option>
         <option value="Kendriya Vidyalay">Kendriya Vidhyalay</option>
         <option value="Others">Others</option>
         </select>
         <br/><br/>

         Percentage of marks in class 12th/Qualifying Examination:<br/>
         <input type="number" number="number"/><br/><br/>

         Roll number of class 12th(if allotted):<br/>
         <input type ="number" numeric="numeric"/><br/><br/>

         Name of school/college from where passed/appearing:<br/>
         <input type="text" name="name"/><br/>
         <br/>

         Address of school/college from where passed/appearing:<br/>
         <input type="text" address="address"/><br/><br/>
          <input type="submit" value="submit"/>
          </div>
          </div>

          </label>
          </form>


          </Tab>
          <Tab label="Examination passed details">
          <form>
          <label>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <div>
          Appearing Examination After 10+2:<br/>
          <input type="text" exam="exam"/>

          </div>
          </div>
          </label>
          </form>
          </Tab>

          <Tab label="Program Choice">
          </Tab>
          <Tab label="Preview">
          </Tab>
          <Tab label="Payment"><br/>

          <div style={styles}>Payment Information</div>
          <div>
          <form>
          <label>
          <br/>
          Credit Cards Accepted:<br/>
        <select>
        <option value="VISA">VISA</option>
        <option value="MASTER">MASTER</option>
        <option value="AMEX">AMEX</option>
        <option value="OTHERS">OTHERS</option>
        </select><br/>

        <span>
        Card Number:
        <input type="number" name="name"/>
        </span>

          </label>
          </form>
          </div>
          </Tab>
          </Tabs>


          </div>
          </MuiThemeProvider>


      );
      }
      }
export default App;
