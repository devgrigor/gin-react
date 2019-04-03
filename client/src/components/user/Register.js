import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Formik } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class Register extends Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    // TODO: use formik for working with forms
    const { classes } = this.props;

    return (
    <div >
        <h1>Formik from below</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
            let errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
            }}
        >
            {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                Submit
                </button>
            </form>
            )}
        </Formik>

        <h1>Material design from below</h1>

    <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="standard-dense"
          label="Dense"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />

        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
        />

        <TextField
          id="standard-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-textarea"
          label="With placeholder multiline"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-bare"
          className={classes.textField}
          defaultValue="Bare"
          margin="normal"
        />
      </form>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
