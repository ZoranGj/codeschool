import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './common/Home';
import { Layout } from './common/Layout';
import { TheoryView } from './theory/TheoryView';
import { CodeView } from './code/CodeView';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/theory' component={ TheoryView } />
    <Route path='/code' component={ CodeView } />
</Layout>;
