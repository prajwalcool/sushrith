import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/views/components.js';

const useStyles = makeStyles(styles);

export default function IndexPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Header
        brand='Grievance Cell'
        rightLinks={<HeaderLinks />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
      <Parallax image={require('assets/img/bg4.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Grievance Cell.</h1>
                <h3 className={classes.subtitle}>
                  A Place to get a solution for your <strong>Grievance.</strong>
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridItem md={12} className={classes.textCenter}>
          <Link to={'/login-page'} className={classes.link}>
            <Button color='primary' size='lg' simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
      </div>

      <Footer />
    </>
  );
}
