import React, { HTMLAttributes, ReactNode, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import cls from 'classnames';
import { InView } from 'react-intersection-observer';

import css from './styles.module.scss';
import { Omit } from 'types';
import TableFilter, { TableFilterProps } from 'components/TableFilter';

type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  children: ReactNode;
};

export const Table = ({ containerProps, wrapperProps, children, ...props }: TableProps) => (
  <div {...wrapperProps} className={cls(css['overflow-wrapper'], wrapperProps && wrapperProps.className)}>
    <div className={css.container} {...containerProps}>
      <table {...props} className={cls(css.table, props.className)}>
        {children}
      </table>
    </div>
  </div>
);

type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
  children: ReactNode;
};

export const TR = ({ children, ...props }: TableRowProps) => (
  <tr {...props} className={cls(css.tr, props.className)}>
    {children}
  </tr>
);

type TableRowIntObserverProps = Omit<TableRowProps, 'onChange'> & {
  onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
};

// TR with Intersection Observer
export const TR_IO = ({ children, onChange, ...props }: TableRowIntObserverProps) => (
  <InView as='tr' onChange={onChange} {...props} className={cls(css.tr, props.className)}>
    {children}
  </InView>
);

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
  rowProps?: HTMLAttributes<HTMLTableRowElement>;
  noWrap?: boolean;
};

export const THead = ({ children, rowProps, noWrap, ...props }: TableHeadProps) => (
  <thead {...props} className={cls(noWrap && css['th-nowrap'], props.className)}>
    <TR {...rowProps}>{children}</TR>
  </thead>
);

type TableHeadCellProps = ThHTMLAttributes<HTMLTableHeaderCellElement> & {
  children: ReactNode;
  filterProps?: TableFilterProps;
};

export const TH = ({ children, filterProps, ...props }: TableHeadCellProps) => (
  <th {...props} className={cls(css.th, props.className)}>
    <div className={css['th-content']}>
      {children}
      {filterProps ? <TableFilter {...filterProps} /> : <></>}
    </div>
  </th>
);

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
};

export const TBody = ({ children, ...props }: TableBodyProps) => <tbody {...props}>{children}</tbody>;

type TableBodyCellProps = TdHTMLAttributes<HTMLTableHeaderCellElement> & {
  children: ReactNode;
};

export const TD = ({ children, ...props }: TableBodyCellProps) => (
  <td {...props} className={cls(css.cell, props.className)}>
    {children}
  </td>
);

export const NoTableContent = ({
  customPlaceholder,
  customText,
  thin,
}: {
  customPlaceholder?: ReactNode;
  customText?: string;
  thin?: boolean;
}) => (
  <tr>
    <td colSpan={100}>
      {customPlaceholder ? (
        customPlaceholder
      ) : (
        <div className={cls(css['no-table-content'], thin && css['thin-no-table-content'])}>
          {customText || 'Nothing to see here...'}
        </div>
      )}
    </td>
  </tr>
);

export const TableLoader = ({
  customPlaceholder,
  customText,
}: {
  customPlaceholder?: ReactNode;
  customText?: string;
}) => (
  <tr>
    <td colSpan={100}>
      {customPlaceholder ? (
        customPlaceholder
      ) : (
        <div className={css['no-table-content']}>{customText || 'Loading...'}</div>
      )}
    </td>
  </tr>
);
