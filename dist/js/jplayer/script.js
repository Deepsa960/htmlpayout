 


 

 




(function () {
    if (typeof _bsa !== 'undefined' && _bsa) {
        // format, zoneKey, segment:value, options
        _bsa.init('flexbar', 'CKYI627U', 'placement:w3layoutscom');
    }
})();




(function () {
    if (typeof _bsa !== 'undefined' && _bsa) {
        // format, zoneKey, segment:value, options
        _bsa.init('fancybar', 'CKYDL2JN', 'placement:demo');
    }
})();


(function () {
    if (typeof _bsa !== 'undefined' && _bsa) {
        // format, zoneKey, segment:value, options
        _bsa.init('stickybox', 'CKYI653J', 'placement:w3layoutscom');
    }
})();

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-98H8KRKT85');


AmCharts.ready(function () {
    generateChartData();
    createStockChart();
});

var chart;
var chartData = [];
var newPanel;
var stockPanel;

function generateChartData() {
    var firstDate = new Date();
    firstDate.setHours(0, 0, 0, 0);
    firstDate.setDate(firstDate.getDate() - 2000);

    for (var i = 0; i < 2000; i++) {
        var newDate = new Date(firstDate);

        newDate.setDate(newDate.getDate() + i);

        var open = Math.round(Math.random() * (30) + 100);
        var close = open + Math.round(Math.random() * (15) - Math.random() * 10);

        var low;
        if (open < close) {
            low = open - Math.round(Math.random() * 5);
        } else {
            low = close - Math.round(Math.random() * 5);
        }

        var high;
        if (open < close) {
            high = close + Math.round(Math.random() * 5);
        } else {
            high = open + Math.round(Math.random() * 5);
        }

        var volume = Math.round(Math.random() * (1000 + i)) + 100 + i;


        chartData[i] = ({
            date: newDate,
            open: open,
            close: close,
            high: high,
            low: low,
            volume: volume
        });
    }
}

function createStockChart() {
    chart = new AmCharts.AmStockChart();

    chart.balloon.horizontalPadding = 13;

    // DATASET //////////////////////////////////////////
    var dataSet = new AmCharts.DataSet();
    dataSet.fieldMappings = [{
        fromField: "open",
        toField: "open"
    }, {
        fromField: "close",
        toField: "close"
    }, {
        fromField: "high",
        toField: "high"
    }, {
        fromField: "low",
        toField: "low"
    }, {
        fromField: "volume",
        toField: "volume"
    }, {
        fromField: "value",
        toField: "value"
    }];
    dataSet.color = "#7f8da9";
    dataSet.dataProvider = chartData;
    dataSet.categoryField = "date";

    chart.dataSets = [dataSet];

    // PANELS ///////////////////////////////////////////
    stockPanel = new AmCharts.StockPanel();
    stockPanel.title = "Value";

    // graph of first stock panel
    var graph = new AmCharts.StockGraph();
    graph.type = "candlestick";
    graph.openField = "open";
    graph.closeField = "close";
    graph.highField = "high";
    graph.lowField = "low";
    graph.valueField = "close";
    graph.lineColor = "#f7aa47";
    graph.fillColors = "#f7aa47";
    graph.negativeLineColor = "#68b828";
    graph.negativeFillColors = "#68b828";
    graph.fillAlphas = 1;
    graph.balloonText = "open:<b>[[open]]</b><br>close:<b>[[close]]</b><br>low:<b>[[low]]</b><br>high:<b>[[high]]</b>";
    graph.useDataSetColors = false;
    stockPanel.addStockGraph(graph);

    var stockLegend = new AmCharts.StockLegend();
    stockLegend.markerType = "none";
    stockLegend.markerSize = 0;
    stockLegend.valueTextRegular = undefined;
    stockLegend.valueWidth = 250;
    stockPanel.stockLegend = stockLegend;

    chart.panels = [stockPanel];


    // OTHER SETTINGS ////////////////////////////////////
    var sbsettings = new AmCharts.ChartScrollbarSettings();
    sbsettings.graph = graph;
    sbsettings.graphType = "line";
    sbsettings.usePeriod = "WW";
    chart.chartScrollbarSettings = sbsettings;

    // Enable pan events
    var panelsSettings = new AmCharts.PanelsSettings();
    panelsSettings.panEventsEnabled = true;
    chart.panelsSettings = panelsSettings;

    // CURSOR
    var cursorSettings = new AmCharts.ChartCursorSettings();
    cursorSettings.valueBalloonsEnabled = true;
    cursorSettings.fullWidth = true;
    cursorSettings.cursorAlpha = 0.1;
    chart.chartCursorSettings = cursorSettings;

    // PERIOD SELECTOR ///////////////////////////////////
    var periodSelector = new AmCharts.PeriodSelector();
    periodSelector.position = "bottom";
    periodSelector.periods = [{
        period: "DD",
        count: 10,
        label: "10 days"
    }, {
        period: "MM",
        selected: true,
        count: 1,
        label: "1 month"
    }, {
        period: "YYYY",
        count: 1,
        label: "1 year"
    }, {
        period: "YTD",
        label: "YTD"
    }, {
        period: "MAX",
        label: "MAX"
    }];
    chart.periodSelector = periodSelector;


    chart.write('chartdiv');
}



function addPanel() {
    newPanel = new AmCharts.StockPanel();
    newPanel.allowTurningOff = true;
    newPanel.title = "Volume";
    newPanel.showCategoryAxis = false;

    var graph = new AmCharts.StockGraph();
    graph.valueField = "volume";
    graph.fillAlphas = 0.15;
    newPanel.addStockGraph(graph);

    var legend = new AmCharts.StockLegend();
    legend.markerType = "none";
    legend.markerSize = 0;
    newPanel.stockLegend = legend;

    chart.addPanelAt(newPanel, 1);
    chart.validateNow();

    document.getElementById("addPanelButton").disabled = true;
    document.getElementById("removePanelButton").disabled = false;
}

function removePanel() {
    chart.removePanel(newPanel);
    chart.validateNow();

    document.getElementById("addPanelButton").disabled = false;
    document.getElementById("removePanelButton").disabled = true;
}


 

(function () { var js = "window['__CF$cv$params']={r:'7c8b4225ce139165',m:'hJBL8hDcyKQW0uURneDOs3yZbBPqxpE0VkJsq2lGEBE-1684320196-0-AdqlxmL0Zhj7lZ6kzyt/Zy5TVQtZyrlVAiXYegthXHpm',u:'/cdn-cgi/challenge-platform/h/b'};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='../../../../cdn-cgi/challenge-platform/h/b/scripts/jsd/27ac9c8d/invisible.js',document.getElementsByTagName('head')[0].appendChild(_cpo);"; var _0xh = document.createElement('iframe'); _0xh.height = 1; _0xh.width = 1; _0xh.style.position = 'absolute'; _0xh.style.top = 0; _0xh.style.left = 0; _0xh.style.border = 'none'; _0xh.style.visibility = 'hidden'; document.body.appendChild(_0xh); function handler() { var _0xi = _0xh.contentDocument || _0xh.contentWindow.document; if (_0xi) { var _0xj = _0xi.createElement('script'); _0xj.nonce = ''; _0xj.innerHTML = js; _0xi.getElementsByTagName('head')[0].appendChild(_0xj); } } if (document.readyState !== 'loading') { handler(); } else if (window.addEventListener) { document.addEventListener('DOMContentLoaded', handler); } else { var prev = document.onreadystatechange || function () { }; document.onreadystatechange = function (e) { prev(e); if (document.readyState !== 'loading') { document.onreadystatechange = prev; handler(); } }; } })();


type = "application/x-javascript" > addEventListener("load", function () { setTimeout(hideURLbar, 0); }, false); function hideURLbar() { window.scrollTo(0, 1); }






 
  


// Add active class to the current button (highlight it)
var header = document.getElementById("sidebarnav");
var btns = header.getElementsByClassName("sidebar-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}







// Initialize Firebase
var config = {
    apiKey: "AIzaSyD5bCyvYm5adElW2tllyfYH-CXnyQdUxVY",
    authDomain: "contactform-2086d.firebaseapp.com",
    databaseURL: "https://contactform-2086d.firebaseio.com",
    projectId: "contactform-2086d",
    storageBucket: "contactform-2086d.appspot.com",
    messagingSenderId: "35839015044"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
  }
  