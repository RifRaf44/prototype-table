import data from './data.js';



// Helper functions
function formatNumber(num) {
    if (num === 0 || num === null || num === undefined) return '-';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '');
}

function calculateTotal(children) {
    if (!children || !Array.isArray(children)) return 0;
    return children.reduce((acc, child) => {
        if (child.isTotal && child.children) {
            return acc + calculateTotal(child.children);
        }
        return acc + (Number(child.editableValue) || 0);
    }, 0);
}

function getRowValue(row) {
    if (row && row.isTotal && row.children) {
        return calculateTotal(row.children);
    }
    return Number(row?.editableValue || 0);
}

function calculateRowValueByCode(code) {
    // Special formulas for specific codes
    if (code === '9905') {
        // Te bestemmen winst/verlies = W/V van het boekjaar (9904) + Onttrekking belastingvrije (789) - Overboeking belastingvrije (689)
        const wvBoekjaarRow = findRowByCode('9904');
        const onttrekkingRow = findRowByCode('789');
        const overboekingRow = findRowByCode('689');
        
        return getRowValue(wvBoekjaarRow) + getRowValue(onttrekkingRow) - getRowValue(overboekingRow);
    }
    else if (code === '9904') {
        // W/V van het boekjaar = W/V voor belasting (9903) + Uitgestelde belastingen (780) - Overboeking uitgestelde (680) - Belastingen (67/77)
        const wvVoorBelastingRow = findRowByCode('9903');
        const uitgesteldeRow = findRowByCode('780');
        const overboekingUitgesteldeRow = findRowByCode('680');
        const belastingenRow = findRowByCode('67/77');
        
        return getRowValue(wvVoorBelastingRow) + getRowValue(uitgesteldeRow) - getRowValue(overboekingUitgesteldeRow) + getRowValue(belastingenRow);
    }
    
    // Normal calculation for other codes
    const row = findRowByCode(code);
    return getRowValue(row);
}

function findRowByCode(code) {
    function searchInRows(rows) {
        for (const row of rows) {
            if (row.code === code) return row;
            if (row.children) {
                const found = searchInRows(row.children);
                if (found) return found;
            }
        }
        return null;
    }
    return searchInRows(data);
}

function updateControlBar() {
    // Calculate totals from input fields using calculateTotal function
    const activaRow = findRowByCode('20/58');
    const passivaRow = findRowByCode('10/49');
    
    const resultRow9905 = findRowByCode('9905');
    const resultRow6947 = findRowByCode('694/7');

    const activaTotal = activaRow && activaRow.children ? calculateTotal(activaRow.children) : 0;
    const passivaTotal = passivaRow && passivaRow.children ? calculateTotal(passivaRow.children) : 0;
    const controlTotal = resultRow9905 && resultRow6947 ? (getRowValue(resultRow9905)-getRowValue(resultRow6947)) : 0;

    const controlBar = document.getElementById('controlBar') || createControlBar();
    const activaElement = controlBar.querySelector('#activa-total');
    const passivaElement = controlBar.querySelector('#passiva-total');
    const controleElement = controlBar.querySelector('#controle-total');

    activaElement.textContent = `Activa: ${formatNumber(activaTotal)}`;
    passivaElement.textContent = `Passiva: ${formatNumber(passivaTotal)}`;
    controleElement.textContent = `Controle resultatenrekening: ${formatNumber(controlTotal)}`;

    const activaTotalElement = document.getElementById('activa-total');
    const passivaTotalElement = document.getElementById('passiva-total');
    const controleTotalElement = document.getElementById('controle-total');

    let backgroundColor = activaTotal === passivaTotal ? '#D6EADC' : '#EECCE0';

    activaTotalElement.style.backgroundColor = backgroundColor;
    passivaTotalElement.style.backgroundColor = backgroundColor;
    
    // Use a different variable or reassign for the control total background
    backgroundColor = (controlTotal == 0) ? '#D6EADC' : '#EECCE0';
    controleTotalElement.style.backgroundColor = backgroundColor;
}

function createControlBar() {
    const controlBar = document.createElement('div');
    controlBar.id = 'controlBar';
    controlBar.className = 'control-bar';

    const totalsContainer = document.createElement('div');
    const activaPassivaTotalsContainer = document.createElement('div');
    activaPassivaTotalsContainer. className = 'activa-passiva-totals-container'
    totalsContainer.className = 'totals-container';

    const activaTotal = document.createElement('span');
    activaTotal.id = 'activa-total';
    activaTotal.className = 'total-badge';
    const passivaTotal = document.createElement('span');
    passivaTotal.id = 'passiva-total';
    passivaTotal.className = 'total-badge';
    const controleTotal = document.createElement('span');
    controleTotal.id = 'controle-total';
    controleTotal.className = 'total-badge';

    const saveButton = document.createElement('button');
    saveButton.className = 'save-button';
    saveButton.textContent = 'Save column';

    activaPassivaTotalsContainer.appendChild(activaTotal);
    activaPassivaTotalsContainer.appendChild(passivaTotal);
    totalsContainer.appendChild(activaPassivaTotalsContainer);
    totalsContainer.appendChild(controleTotal);
    controlBar.appendChild(totalsContainer);
    totalsContainer.appendChild(saveButton);

    document.body.appendChild(controlBar);
    return controlBar;
}

function createRow(row) {
    const tr = document.createElement('tr');
    tr.className = `level-${row.level}`;
    if (row.isTotal) tr.classList.add('total-row');

    // Icon column
    const iconCell = document.createElement(row.level === 0 ? 'th' : 'td');
    iconCell.className = 'icon-column';
    if (row.isCollapsible && row.level === 0) {
        const icon = document.createElement('span');
        icon.className = 'collapse-icon';
        icon.innerHTML = '▼';
        icon.onclick = () => toggleCollapse(tr);
        iconCell.appendChild(icon);
    }
    tr.appendChild(iconCell);

    // Description column
    const descCell = document.createElement(row.level === 0 ? 'th' : 'td');
    descCell.className = 'description-column';
    descCell.textContent = row.label;
    tr.appendChild(descCell);

    // Code column
    const codeCell = document.createElement(row.level === 0 ? 'th' : 'td');
    codeCell.className = 'code-column';
    codeCell.textContent = row.code || '';
    tr.appendChild(codeCell);

    // Year columns
    row.years.forEach(year => {
        const yearCell = document.createElement(row.level === 0 ? 'th' : 'td');
        yearCell.className = 'year-column';
        yearCell.textContent = formatNumber(year);
        tr.appendChild(yearCell);
    });

    // Edit column
    const editCell = document.createElement(row.level === 0 ? 'th' : 'td');
    editCell.className = 'edit-column';
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'edit-input';
    
    // Special handling for codes 9905 and 9904
    if (row.code === '9905' || row.code === '9904') {
        input.value = formatNumber(calculateRowValueByCode(row.code));
        input.readOnly = true;
    } else if (row.isTotal) {
        input.value = formatNumber(calculateTotal(row.children));
        input.readOnly = true;
    } else {
        input.value = row.editableValue || '';
        input.onchange = (e) => handleValueChange(row.id, e.target.value);
    }
    
    editCell.appendChild(input);
    tr.appendChild(editCell);

    return tr;
}

function toggleCollapse(row) {
    const icon = row.querySelector('.collapse-icon');
    const nextRow = row.nextElementSibling;
    if (nextRow && nextRow.classList.contains('child-rows')) {
        nextRow.classList.toggle('collapsed');
        icon.innerHTML = nextRow.classList.contains('collapsed') ? '▶' : '▼';
    }
}

function handleValueChange(id, value) {
    // Update the data structure
    function updateRow(rows) {
        for (const row of rows) {
            if (row.id === id) {
                row.editableValue = value;
                return true;
            }
            if (row.children && updateRow(row.children)) {
                return true;
            }
        }
        return false;
    }
    updateRow(data);

    // Re-render the table and update control bar
    renderTable();
    updateControlBar();
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    function renderRow(row, level = 0) {
        const tr = createRow(row);
        tbody.appendChild(tr);

        if (row.isCollapsible && row.children) {
            const childRows = document.createElement('tr');
            childRows.className = 'child-rows';
            
            const childCell = document.createElement('td');
            childCell.colSpan = 9;
            
            const childTable = document.createElement('table');
            childTable.className = 'balance-sheet-table';
            
            const childTbody = document.createElement('tbody');
            
            row.children.forEach(child => {
                renderNestedRow(child, childTbody);
            });
            
            childTable.appendChild(childTbody);
            childCell.appendChild(childTable);
            childRows.appendChild(childCell);
            tbody.appendChild(childRows);
        }
    }

    function renderNestedRow(row, parentTbody) {
        const tr = createRow(row);
        parentTbody.appendChild(tr);
        
        if (row.isCollapsible && row.children) {
            const childRows = document.createElement('tr');
            childRows.className = 'child-rows';
            
            const childCell = document.createElement('td');
            childCell.colSpan = 9;
            
            const childTable = document.createElement('table');
            childTable.className = 'balance-sheet-table';
            
            const childTbody = document.createElement('tbody');
            
            row.children.forEach(child => {
                renderNestedRow(child, childTbody);
            });
            
            childTable.appendChild(childTbody);
            childCell.appendChild(childTable);
            childRows.appendChild(childCell);
            parentTbody.appendChild(childRows);
        }
    }

    data.forEach(row => renderRow(row));
}

// Initialize the table and control bar
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    updateControlBar();
}); 