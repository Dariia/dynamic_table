
/**
 * Represents an updating table dy deltas.
 * @constructor
 *
 */
function TableDeltasConstructor() {
    this.splashClass = 'data-table__cell--splash';
}

/**
 * Creating TableDeltasConstructor prototype from TableConstructor
 */
TableDeltasConstructor.prototype = Object.create(TableConstructor.prototype);

/**
 * Processing table data
 *
 * @param {string} data - The data stored from csv file.
 */
TableDeltasConstructor.prototype.createTable = function (data) {
    var i = 0,
        y = 0,
        dataTable = this.getDataTable();

    this.tableProcessing = function () {
        this.updateCells(i, y, data, dataTable);
        i++;
        if (i < data.length) {
            if (data[i].length == 1 && data[i][0] !== '') {
                var deltaTime = data[i];

                y = 0;
                i++;
                setTimeout(this.tableProcessing.bind(this), deltaTime);
            } else {
                y++;
                this.tableProcessing();
            }
        } else {
            i = 0;
            this.tableProcessing();
        }
    };

    this.tableProcessing();

};

/**
 * Processing table data
 *
 * @param {number} i
 * @param {number} y
 * @param {array} data - data parsed from csv file
 * @param {object} dataTable - table element
 */
TableDeltasConstructor.prototype.updateCells = function (i, y, data, dataTable) {
    var row, cells, tableCell,
        dataRows = dataTable.rows;

    if (i < data.length) {
        row = dataRows[y + 1];
        cells = data[i];

        for (var j = 0, l = cells.length; j < l; j++) {
            tableCell = row.cells[j];

            if (tableCell && cells[j] !== '') {
                tableCell.innerHTML = cells[j];
                tableCell.classList.add(this.splashClass);
                setTimeout(this.removeClassName(tableCell, this.splashClass).bind(this), 200);
            }
        }
    }
};

/**
 * Remove Classes from element
 *
 * @param {object} elem - element to remove class
 * @param {string} elemClass - class to remove
 *
 */
TableDeltasConstructor.prototype.removeClassName = function (elem, elemClass) {
    return function () {
        elem.classList.remove(elemClass);
    };
};


