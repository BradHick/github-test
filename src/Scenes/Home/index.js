import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

// Container
import container from './container';

// Components
import {
  Card,
  Input,
  If,
  UsersList,
  Title,
  Button,
  Loading,
  NotFound
} from '../../components';

const checkEmptyInput = (text, fetchUser) => {
  if (text !== '' ){
    return fetchUser(text);
  }
}

class Home extends Component {
  state = {
    text: ''
  }
  render() {
    const { user, errors, loading, fetchUser, fetchRepos } = this.props;
    const { name, avatar_url, bio, location, id, login } = user;
    return (
      <Fragment>
        <Title>Github Test</Title>
        <Card info>
          <Input
            placeholder='Username'
            onChange={e => this.setState({text: e.target.value})}
          />
          <Button onClick={() => checkEmptyInput(this.state.text, fetchUser)}>
            {'Search'}
          </Button>
        </Card>
        <If condition={ user.id && !errors.response }>
          <Card onClick={() => fetchRepos()}>
            <Link style={{ textDecoration: 'none' }} to={`/${login}`}>
              <UsersList
                img={avatar_url}
                name={name}
                bio={bio}
                location={location}
                id={id}
              />
            </Link>
          </Card>
        </If>
        <If condition={this.props.errors.response}>
          <NotFound />
        </If>
        <Loading>
          <If condition={loading}>
            <Loader 
              type='Bars'
              color='#313541'
              height='100'	
              width='100'
            />   
          </If>
        </Loading>
      </Fragment>
    );
  }
}

export default container(Home);