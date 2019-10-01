import React from 'react';
import { Table, TBody, TD, TH, THead, TR } from 'components/Table';

export default {
  title: 'Table',
};

export const CompleteTable = () => {
  return (
    <Table>
      <THead>
        <TH>
          <div>ID</div>
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
      <TBody>
        <TR>
          <TD>0</TD>
          <TD>Alpha</TD>
          <TD>Lorem Ipsum Sit Amet</TD>
          <TD>99</TD>
        </TR>
        <TR>
          <TD>1</TD>
          <TD>Beta</TD>
          <TD>Lorem Ipsum Sit Amet</TD>
          <TD>98</TD>
        </TR>
        <TR>
          <TD>2</TD>
          <TD>Charlie</TD>
          <TD>Lorem Ipsum Sit Amet</TD>
          <TD>97</TD>
        </TR>
      </TBody>
    </Table>
  );
};
