import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import filters from '../fixtures/filters';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render expense summary snapshot correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense summary snapshot correctly with no data', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={1231241512}/>);
    expect(wrapper).toMatchSnapshot();
});