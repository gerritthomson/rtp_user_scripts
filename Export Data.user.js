// ==UserScript==
// @name         Export Data
// @namespace    http://gerrit.com.au/
// @version      0.1
// @description  Export schedule data to csv
// @author       You
// @match        https://estore.skifalls.com.au/WebAdmin/instructorTools/getSchedule.do
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function doExport(){
        console.log('doing export');
        var lines = '';
        $('div[name^=details]').each(
            function(id,el){
                if($(el).text() == 'Show Details'){
                    return true;
                }
                var line = '';
                var table = $(el).parentsUntil('table[cellspacing=0]');
                if ($('tr[class^=row]',table).length == 3){ //private
                    $('tr[class^=row]',table).first().find('td').each(
                        function(tdid, cell){
                            line += '"' + $(cell).text() + '",';
                        }
                    );
                    var work = $($('tr[class^=row]',table).first().find('td').get(1)).text();
                    var benefit = work;

                    lines += line  + '"' + work +'","' + benefit + '"' + "\n";
                    return;
                }
                var detailData = '';
                table.find('td').each(
                    function(cellId, cell){
                        if ( $('div', cell).length !=0){
                            var work = 0;
                            var benefit = 0;
                            var request = 0;
                            var details = $('div', cell).text().split("\n");
                            details.forEach(function(element){
                                var parts = element.split(':');
                                switch(parts[0].trim()){
                                    case 'Work Hours': work = parts[1];
                                        break;
                                    case 'Benefit Hours': benefit = parts[1];
                                        break;
                                    case 'Request Hours': request = parts[1];
                                        break;
                                    default:break;
                                }
                            });
                            detailData ='"' + work +'","' + benefit + '"';

                            return true;
                        }
                        line += '"' + $(cell).text() +'",';
                    }
                );
                lines += line + detailData + "\n";
                console.log(lines);
            });
        var contentType = "application/octet-stream";
        var a = document.createElement('a');
       	document.body.appendChild(a);
        var blob = new Blob([lines],{'type':contentType});
        a.href = window.URL.createObjectURL(blob);
        a.download = 'rtpdata.csv';
        a.click();
        console.log('export done');
    }
    $('form[name=scheduleForm]').parent('td').append('<button id="exportCsv">export csv</button>')
    $('#exportCsv').on('click',doExport);

})();