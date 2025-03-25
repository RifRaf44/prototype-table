import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { BalanceSheetRow } from '../types';

interface RowProps {
  row: BalanceSheetRow;
  level: number;
  onValueChange: (id: string, value: string) => void;
  isSticky?: boolean;
}

const Row: React.FC<RowProps> = ({ row, level, onValueChange, isSticky }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    if (row.isCollapsible) {
      setOpen(!open);
    }
  };

  const calculateTotal = (children: BalanceSheetRow[]): number[] => {
    const totals = children.reduce((acc, child) => {
      const childYears = child.isTotal && child.children ? calculateTotal(child.children) : child.years;
      return acc.map((sum, index) => sum + (childYears[index] || 0));
    }, new Array(5).fill(0));
    return totals;
  };

  const calculateEditableTotal = (children: BalanceSheetRow[]): number => {
    return children.reduce((sum, child) => {
      if (child.isTotal && child.children) {
        return sum + calculateEditableTotal(child.children);
      }
      return sum + (Number(child.editableValue) || 0);
    }, 0);
  };

  const years = row.isTotal && row.children
    ? calculateTotal(row.children)
    : row.years;

  const editableTotal = row.isTotal && row.children
    ? calculateEditableTotal(row.children)
    : Number(row.editableValue) || 0;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(row.id, event.target.value);
  };

  return (
    <>
      <TableRow
        sx={{
          '& > *': { borderBottom: '1px solid rgba(224, 224, 224, 1)' },
          backgroundColor: isSticky ? '#e3f2fd' : level % 2 === 0 ? '#ffffff' : '#f5f5f5',
          '&:hover': {
            backgroundColor: isSticky ? '#e3f2fd' : '#f0f7ff',
          },
          ...(isSticky && {
            position: 'sticky',
            top: 40,
            zIndex: 2,
            '& > *': {
              backgroundColor: '#e3f2fd',
              borderBottom: '2px solid rgba(224, 224, 224, 1)',
              color: '#1976d2',
              fontWeight: 600,
            },
          }),
        }}
      >
        <TableCell padding="none" sx={{ width: 48, textAlign: 'center' }}>
          {row.isCollapsible && (
            <IconButton
              size="small"
              onClick={handleClick}
              sx={{ padding: 0.5 }}
            >
              {open ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          )}
        </TableCell>
        <TableCell sx={{ width: 100, color: '#666' }}>
          {row.code || ''}
        </TableCell>
        <TableCell
          sx={{
            paddingLeft: `${level * 16}px`,
            fontWeight: row.isTotal ? 600 : 400,
            width: '30%',
          }}
        >
          {row.label}
        </TableCell>
        {years.map((year, index) => (
          <TableCell 
            key={index} 
            align="right"
            sx={{
              fontWeight: row.isTotal ? 600 : 400,
              color: year < 0 ? '#d32f2f' : 'inherit',
              width: 120,
            }}
          >
            {year === 0 ? '' : year.toLocaleString('nl-NL', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TableCell>
        ))}
        <TableCell align="right" sx={{ width: 150 }}>
          {row.isTotal ? (
            <Box sx={{ 
              padding: '4px 8px', 
              fontWeight: 600,
              textAlign: 'right',
            }}>
              {editableTotal === 0 ? '' : editableTotal.toLocaleString('nl-NL', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Box>
          ) : (
            <TextField
              size="small"
              type="number"
              value={row.editableValue || ''}
              onChange={handleInputChange}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-input': {
                  padding: '4px 8px',
                  textAlign: 'right',
                },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                },
              }}
            />
          )}
        </TableCell>
      </TableRow>
      {row.isCollapsible && row.children && (
        <TableRow>
          <TableCell style={{ padding: 0 }} colSpan={9}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <Table size="small">
                  <TableBody>
                    {row.children.map((child) => (
                      <Row key={child.id} row={child} level={level + 1} onValueChange={onValueChange} />
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

interface BalanceSheetTableProps {
  data: BalanceSheetRow[];
}

const BalanceSheetTable: React.FC<BalanceSheetTableProps> = ({ data }) => {
  const years = ['2020', '2021', '2022', '2023', '2024'];
  const [tableData, setTableData] = useState(data);

  const handleValueChange = (id: string, value: string) => {
    const updateRow = (rows: BalanceSheetRow[]): BalanceSheetRow[] => {
      return rows.map(row => {
        if (row.id === id) {
          return { ...row, editableValue: value };
        }
        if (row.children) {
          return { ...row, children: updateRow(row.children) };
        }
        return row;
      });
    };

    setTableData(updateRow(tableData));
  };

  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        boxShadow: 'none',
        border: '1px solid rgba(224, 224, 224, 1)',
        maxWidth: 'none',
        width: '100%',
        maxHeight: 'calc(100vh - 200px)',
        overflow: 'auto',
      }}
    >
      <Table size="small" aria-label="balance sheet table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell 
              padding="none" 
              sx={{ 
                width: 48,
                backgroundColor: '#fff !important',
                borderBottom: '2px solid rgba(224, 224, 224, 1)',
              }} 
            />
            <TableCell 
              sx={{ 
                width: 100,
                backgroundColor: '#fff !important',
                borderBottom: '2px solid rgba(224, 224, 224, 1)',
              }}
            >
              Code
            </TableCell>
            <TableCell 
              sx={{ 
                width: '30%',
                backgroundColor: '#fff !important',
                borderBottom: '2px solid rgba(224, 224, 224, 1)',
              }}
            >
              Description
            </TableCell>
            {years.map((year) => (
              <TableCell 
                key={year} 
                align="right" 
                sx={{ 
                  width: 120,
                  fontWeight: 600,
                  backgroundColor: '#fff !important',
                  borderBottom: '2px solid rgba(224, 224, 224, 1)',
                }}
              >
                {year}
              </TableCell>
            ))}
            <TableCell 
              align="right" 
              sx={{ 
                width: 150,
                backgroundColor: '#fff !important',
                borderBottom: '2px solid rgba(224, 224, 224, 1)',
              }}
            >
              Edit Value
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <Row 
              key={row.id} 
              row={row} 
              level={0} 
              onValueChange={handleValueChange}
              isSticky={index === 0}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BalanceSheetTable; 