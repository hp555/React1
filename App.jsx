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
          <br/>
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


          </label><br/>

          <input type="submit" value="Submit"/>
          </form>
          </Tab>

          <Tab label="Academic Details">
          <form>
          <label>
          10th Marks:<br/>
          <input type ="text" name="name"/><br/>
        12th Marks:<br/>
        <input type="text" name="name"/><br/>
          <br/>
          University Name :
          <select>
           <option selected value="No Selection">No Selection</option>
           <option  value="IIT's">IIT's</option>
           <option  value="Delhi University">Delhi University</option>
           <option  value="NIT's">NIT's</option>
           <option  value="Others, Please Specify">Others, Please Specify</option>
           </select><br/>
            Other University Name: <input type="text" name="name"/><br/><br/>
          Graduation Marks<br/>
          <input type="text" name="name"/><br/>
          <br/>
          <input type="submit" value="submit"/>

          </label>
          </form>


          </Tab>
          <Tab label="Entrance Exam Details">
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
