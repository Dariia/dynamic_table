
/**
 * Represents creation of a table.
 * @constructor
 *
 */
function TableConstructor() {
    this.tableContainer = document.getElementById('data-table');
    this.tdClass = 'data-table__cell';

    if(!this.tableContainer){
        this.tableContainer = document.createElement("div");
        this.tableContainer.id = 'data-table';
        document.body.appendChild(this.tableContainer);
    }
}

/**
 * Processing table prototype
 */
TableConstructor.prototype = {
    /**
     * Creating table element
     */
    dataTable: document.createElement('table'),

    /**
     * Processing table data
     */
    init: function (csvFile) {
        return this.processingData(csvFile);
    },

    /**
     * Processing table data
     *
     * @param {string} data - The data stored from csv file.
     */
    processingData: function (data) {
        var allTextLines = data.split(/\r\n|\n/),
            lines = [];

        for (var i = 0, l = allTextLines.length; i < l ; i++) {

            if (allTextLines[i] === '') {
                continue;
            }

            var dataTxt = allTextLines[i].split(',');
            var textArray = [];

            for (var j = 0; j < dataTxt.length; j++) {
                textArray.push(dataTxt[j]);
            }

            if (textArray !== '') {
                lines.push(textArray);
            }
        }
        this.createTable(lines);

        return lines;
    },

    /**
     * Processing table data
     *
     * @param {string} data - The data stored from csv file.
     */
    createTable: function (data) {
        var i, j;

        for (i = 0; i < data.length; i++) {
            var row = this.dataTable.insertRow(-1);
            var cells = data[i];

            for (j = 0; j < cells.length; j++) {
                var tableCell = row.insertCell(-1);
                tableCell.classList.add(this.tdClass);
                tableCell.innerHTML = cells[j];
            }
        }

        this.tableContainer.appendChild(this.dataTable);
    },

    /**
     * Giving access to table container element
     *
     */
    getDataTable: function () {
        return this.dataTable;
    }
};


