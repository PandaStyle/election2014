

if (Meteor.isClient) {
Meteor.startup(function(){





})
}









   /* Template.tbt.rendered = function(){


    var liveURL = "data/2014-Gov-Gen-Coakley-GENERATED-FROM-2010PATRICK.json";

    *//* UNCOMMNENT this callback when switching back to static from meteor*//*
   // google.setOnLoadCallback(function(){

        compare(liveURL, $('#comp').val());
        hideOptions();

        $('#base, #comp').change(function(){

            hideOptions();
            var b = liveURL,
                c = $('#comp').val();

            compare(b,c);
        });

 //   });

    function compare(baseElectionJsonUrl, toCompareJsonUrl){

        $.when(
            $.getJSON(baseElectionJsonUrl),
            $.getJSON(toCompareJsonUrl)
        ).done(function(base, comp) {

                var basePctVotes = _.map(base[0].output.margins.pct_votes, function(a, b){
                        return [b, a];
                    }),
                    compPctVotes =  _.map(comp[0].output.margins.pct_votes, function(a, b){
                        return [b, a];
                    }),
                    baseNumVotes = _.map(base[0].output.margins.n_votes, function(a, b){
                        return [b, a];
                    }),
                    compNumVotes = _.map(base[0].output.margins.n_votes, function(a, b){
                        return [b, a];
                    });

                //like not all town
                // s are in from the AP
                if(basePctVotes.length != compPctVotes.length){

                    if(compPctVotes.length < basePctVotes.length) {
                        var resBase = [];
                        _.each(compPctVotes, function(item, a){

                            var d = _.find(basePctVotes, function(baseItem){

                                return baseItem[0] == item[0];
                            });
                            resBase.push(d);

                        })
                    }
                    var compArrayShort = createScatterArray(resBase, compPctVotes);
                    drawVisualization(compArrayShort);
                    return;
                }


                var compArray = createScatterArray(basePctVotes, compPctVotes, baseNumVotes);
                drawVisualization(compArray)

            });
    }

    function filter20(json){
        $.getJSON("data/2010-Gov-Gen-Baker-and-Tisei.json")
            .done(function(data, textStatus, jqXHR ){
                var pctVotes = data.output.margins.pct_votes;

                var counter = 0;

                var res ={};

                _.each(pctVotes, function(a, b){
                    var rnd = Math.floor((Math.random() * 100) + 1);
                    if(rnd % 10 == 0){
                        if(counter < 20 ){
                            res[b] = a;
                            counter++;
                        }
                    }
                })
               console.log(JSON.stringify(res));
            })
            .fail(function() {
                console.log( "error" );
            });
    }

    function createScatterArray(base, array, array2){
        var result = _.map(base, function(item, i) {
            return [((item[1]*100).toFixed(2))/1, ((array[i][1]*100).toFixed(2))/1, item[0], array2[i][1]];
        })
        return result;
    }

    function drawVisualization(array) {
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn('string', '');
        dataTable.addColumn('number', 'Coakley margin');
        dataTable.addColumn('number', 'Compared margin');
        dataTable.addColumn('string', 'town');
        dataTable.addColumn('number', 'Coakley vote count');

       // dataTable.addColumn({type: 'string', role: 'tooltip', 'p': {'html': true}});


        _.each(array, function(item){
            dataTable.addRows([
                [ '', item[0], item[1], item[2], item[3]]
            ]);
        });

        var yAxisTextBottom = $('#comp :selected').attr('data-text'),
            xAxisTextBottom = "2014 Coakley (generated)";



        var options = {
            colors: ['darkorange'],
            bubble : {
                opacity: 0.5
            },
            legend: {position: 'none'},
            hAxis: {

                gridlines: {
                    color: "#e4e4e4"
                },
                minValue: -100,
                maxValue: 100,
                format:'#,###%',
                title: xAxisTextBottom,
                ticks: [{v:-50, f:'-50%'}, {v:0, f:'0'}, {v:50, f:'50%'}]
            },
            vAxis: {

                gridlines: {
                    color: "#e4e4e4"
                },
                minValue: -100,
                maxValue: 100,
                format:'#,###%',
                slantedText:true,
                slantedTextAngle:90,
                title: yAxisTextBottom,
                ticks: [{v:-50, f:'-50%'}, {v:0, f:'0'}, {v:50, f:'50%'}]

            },



            tooltip: {isHtml: true}
        };

        // create and draw the visualization.

        var chart = new google.visualization.BubbleChart(document.getElementById('visualization'));
        chart.draw(dataTable, options);
    }

    function createTooltipMarkup(city, xValue, yValue){
        var added = xValue + yValue;

        return '<div class="tt">' +
            '<div><span class="title">City: </span>' + city +'</div>' +
            '<div><span class="title">Margin at base: </span>' + (xValue*100).toFixed(2) + '%</div>' +
            '<div><span class="title">Margin at comp: </span>' + (added*100).toFixed(2) + '%</div>' +
            '<div><span class="title">Difference: </span>' + (yValue*100).toFixed(2) + '%</div>' +
            '</div>';
    }

    function hideOptions(){
        var selectedParty =$('#comp :selected').attr('data-party'),
            selectedVal = $('#comp :selected').val();


        $('#base').find("[data-party!=" + selectedParty + "]").hide();

        $('#base').find("[data-party=" + selectedParty + "]").show();

        $('#base').find("[value='" +  selectedVal + "']").hide();
    };

    };
*/








