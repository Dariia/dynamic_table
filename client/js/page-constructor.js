'use strict';
/**
 * Processing page after loading events
 * @constructor
 *
 */
function PageConstructor() {
    this.errorElem = document.getElementById('error-block');

    if(!this.errorElem){
        this.errorElem = document.createElement("div");
        this.errorElem.id = 'error-block';
        document.body.appendChild(this.errorElem);
    }
}

/**
 * Creating and initializing of table objects through promise
 * @param {string} generalUrl - Url for snapshot csv file.
 * @param {string} deltasUrl - Url for deltas csv file.
 *
 */
PageConstructor.prototype = {
    init: function (generalUrl, deltasUrl) {
        fetch(generalUrl)
        .then(
            function (csvFile) {
                return csvFile.text();
            }.bind(this)
        ).then(
            function(responseText){
                var snapshot = new TableConstructor();
                snapshot.init(responseText);
            }
        ).then(
            fetch(deltasUrl)
                .then(
                    function (deltasFile) {
                        return deltasFile.text();
                    }.bind(this)
                ).then(
                    function (deltasFile) {
                        var deltas = new TableDeltasConstructor();
                        deltas.init(deltasFile);
                    }
                ).catch(
                    function(error){
                        this.errorDisplay(error);
                    }.bind(this)
                )
        ).catch(function(error) {
            this.errorDisplay(error);
            }.bind(this)
        )
    },

    /**
     * Displaing errors
     *
     * @param {object} error .
     */
    errorDisplay: function(error){
        this.errorElem.innerHTML = 'Error: ' + error.message;
        this.errorElem.style.display = 'block';
    }
};





