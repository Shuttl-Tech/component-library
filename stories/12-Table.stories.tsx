import React, { useCallback, useState } from 'react';
import { Table, TBody, TD, TH, THead, TR, TR_IO } from 'components/Table';
import faker from 'faker';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Table',
};

const TableHeader = (
  <THead>
    <TH>
      <div>Phone</div>
    </TH>
    <TH>
      <div>Name</div>
    </TH>
    <TH>
      <div>Occupation</div>
    </TH>
    <TH>
      <div>Age</div>
    </TH>
  </THead>
);

const getItems = (n: number = 4) =>
  Array(n)
    .fill(0)
    .map(() => ({
      phone: faker.phone.phoneNumberFormat(0),
      name: faker.name.findName(),
      job: faker.company.companyName(),
      age: faker.random.number({ min: 30, max: 80 }),
    }));

export const CompleteTable = () => {
  const [items] = useState(getItems());

  return (
    <Table>
      {TableHeader}
      <TBody>
        {items.map(i => (
          <TR>
            <TD>{i.phone}</TD>
            <TD>{i.name}</TD>
            <TD>{i.job}</TD>
            <TD>{i.age}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
};

export const WithIntersectionObserver = () => {
  const [items, setItems] = useState(getItems());

  const onIntersectionObserver = useCallback(
    i => (inView: boolean) => {
      const doAction = i === items.length - 1 && inView;
      doAction && setItems([...items, ...getItems()]);
      doAction && action('Trigger Intersection Observer')(items.length);
    },
    [items]
  );

  return (
    <Table>
      {TableHeader}
      <TBody>
        {items.map((item, i) => (
          <TR_IO onChange={onIntersectionObserver(i)}>
            <TD>{item.phone}</TD>
            <TD>{item.name}</TD>
            <TD>{item.job}</TD>
            <TD>{item.age}</TD>
          </TR_IO>
        ))}
      </TBody>
    </Table>
  );
};
