var chartDom = document.getElementById('part3');
var myChart = echarts.init(chartDom);
var option;

// get processed data for growth rate of Business establishments in various industries from 03 to 19
const increaseData = [{
    "year": "2003",
    "Accommodation and Food Services": "0.021943574",
    "Administrative and Support Services": "-0.011782032",
    "Agriculture, Forestry and Fishing": "0.071428571",
    "Arts and Recreation Services": "-0.004926108",
    "Construction": "-0.032894737",
    "Education and Training": "0.046263345",
    "Electricity, Gas, Water and Waste Services": "0.006024096",
    "Financial and Insurance Services": "0.01142132",
    "Health Care and Social Assistance": "-0.061437908",
    "Information Media and Telecommunications": "0.022099448",
    "Manufacturing": "0.011070111",
    "Mining": "0.024390244",
    "Other Services": "0.024911032",
    "Professional, Scientific and Technical Services": "0.035496957",
    "Public Administration and Safety": "0.025104603",
    "Rental, Hiring and Real Estate Services": "0.07826087",
    "Retail Trade": "0.00550055",
    "Transport, Postal and Warehousing": "-0.067183463",
    "Wholesale Trade": "0.003460208",
    "Total establishments": "0.009885493"
}, {
    "year": "2004",
    "Accommodation and Food Services": "0.081595092",
    "Administrative and Support Services": "0.04023845",
    "Agriculture, Forestry and Fishing": "0.2",
    "Arts and Recreation Services": "0.064356436",
    "Construction": "0.040816327",
    "Education and Training": "0.034013605",
    "Electricity, Gas, Water and Waste Services": "0.041916168",
    "Financial and Insurance Services": "-0.053952321",
    "Health Care and Social Assistance": "-0.002785515",
    "Information Media and Telecommunications": "-0.016216216",
    "Manufacturing": "-0.00729927",
    "Mining": "-0.071428571",
    "Other Services": "-0.0078125",
    "Professional, Scientific and Technical Services": "0.017629775",
    "Public Administration and Safety": "0.008163265",
    "Rental, Hiring and Real Estate Services": "0.016129032",
    "Retail Trade": "0.055251641",
    "Transport, Postal and Warehousing": "-0.033240997",
    "Wholesale Trade": "0.013793103",
    "Total establishments": "0.023166653"
}, {
    "year": "2005",
    "Accommodation and Food Services": "0.082813386",
    "Administrative and Support Services": "-0.035816619",
    "Agriculture, Forestry and Fishing": "0.111111111",
    "Arts and Recreation Services": "0.037209302",
    "Construction": "0.019607843",
    "Education and Training": "0.111842105",
    "Electricity, Gas, Water and Waste Services": "-0.005747126",
    "Financial and Insurance Services": "0.049071618",
    "Health Care and Social Assistance": "0.142458101",
    "Information Media and Telecommunications": "0.074175824",
    "Manufacturing": "-0.047794118",
    "Mining": "0.205128205",
    "Other Services": "0.032370954",
    "Professional, Scientific and Technical Services": "0.0466795",
    "Public Administration and Safety": "0.076923077",
    "Rental, Hiring and Real Estate Services": "0.091269841",
    "Retail Trade": "0.127527216",
    "Transport, Postal and Warehousing": "0.048710602",
    "Wholesale Trade": "0.034013605",
    "Total establishments": "0.062345531"
}, {
    "year": "2006",
    "Accommodation and Food Services": "0.059193295",
    "Administrative and Support Services": "0.041604755",
    "Agriculture, Forestry and Fishing": "0",
    "Arts and Recreation Services": "0.040358744",
    "Construction": "0.115384615",
    "Education and Training": "0.071005917",
    "Electricity, Gas, Water and Waste Services": "0.023121387",
    "Financial and Insurance Services": "0.084702908",
    "Health Care and Social Assistance": "0.017114914",
    "Information Media and Telecommunications": "0.038363171",
    "Manufacturing": "0.052123552",
    "Mining": "0.063829787",
    "Other Services": "0.028813559",
    "Professional, Scientific and Technical Services": "0.075862069",
    "Public Administration and Safety": "0.030075188",
    "Rental, Hiring and Real Estate Services": "0.065454545",
    "Retail Trade": "0.023448276",
    "Transport, Postal and Warehousing": "0.038251366",
    "Wholesale Trade": "0.004934211",
    "Total establishments": "0.046829268"
}, {
    "year": "2007",
    "Accommodation and Food Services": "0.043521266",
    "Administrative and Support Services": "0.021398003",
    "Agriculture, Forestry and Fishing": "-0.2",
    "Arts and Recreation Services": "0.068965517",
    "Construction": "0.166666667",
    "Education and Training": "0.196132597",
    "Electricity, Gas, Water and Waste Services": "0.06779661",
    "Financial and Insurance Services": "0.027972028",
    "Health Care and Social Assistance": "0.105769231",
    "Information Media and Telecommunications": "-0.004926108",
    "Manufacturing": "0.034862385",
    "Mining": "0.04",
    "Other Services": "0.034596376",
    "Professional, Scientific and Technical Services": "0.057692308",
    "Public Administration and Safety": "0.058394161",
    "Rental, Hiring and Real Estate Services": "0.081911263",
    "Retail Trade": "0.04492363",
    "Transport, Postal and Warehousing": "-0.018421053",
    "Wholesale Trade": "0.057283142",
    "Total establishments": "0.051544914"
}, {
    "year": "2008",
    "Accommodation and Food Services": "0.044549763",
    "Administrative and Support Services": "0.044692737",
    "Agriculture, Forestry and Fishing": "0.0625",
    "Arts and Recreation Services": "0.066532258",
    "Construction": "0.172413793",
    "Education and Training": "0.180138568",
    "Electricity, Gas, Water and Waste Services": "0.042328042",
    "Financial and Insurance Services": "0.089569161",
    "Health Care and Social Assistance": "0.033695652",
    "Information Media and Telecommunications": "-0.002475248",
    "Manufacturing": "0.030141844",
    "Mining": "0.134615385",
    "Other Services": "0.038216561",
    "Professional, Scientific and Technical Services": "0.075959596",
    "Public Administration and Safety": "0.051724138",
    "Rental, Hiring and Real Estate Services": "0.078864353",
    "Retail Trade": "0.000859845",
    "Transport, Postal and Warehousing": "-0.002680965",
    "Wholesale Trade": "0.007739938",
    "Total establishments": "0.047450232"
}, {
    "year": "2009",
    "Accommodation and Food Services": "0.056261343",
    "Administrative and Support Services": "0.012032086",
    "Agriculture, Forestry and Fishing": "0",
    "Arts and Recreation Services": "0.062381853",
    "Construction": "0.075630252",
    "Education and Training": "0.005870841",
    "Electricity, Gas, Water and Waste Services": "-0.015228426",
    "Financial and Insurance Services": "0.003121748",
    "Health Care and Social Assistance": "0.050473186",
    "Information Media and Telecommunications": "-0.054590571",
    "Manufacturing": "-0.030981067",
    "Mining": "0.06779661",
    "Other Services": "0.049846626",
    "Professional, Scientific and Technical Services": "0.015771686",
    "Public Administration and Safety": "-0.042622951",
    "Rental, Hiring and Real Estate Services": "0.01754386",
    "Retail Trade": "0.04467354",
    "Transport, Postal and Warehousing": "-0.061827957",
    "Wholesale Trade": "-0.049155146",
    "Total establishments": "0.022650351"
}, {
    "year": "2010",
    "Accommodation and Food Services": "0.030927835",
    "Administrative and Support Services": "-0.033025099",
    "Agriculture, Forestry and Fishing": "-0.117647059",
    "Arts and Recreation Services": "0.023131673",
    "Construction": "0.0390625",
    "Education and Training": "-0.011673152",
    "Electricity, Gas, Water and Waste Services": "0.010309278",
    "Financial and Insurance Services": "-0.052904564",
    "Health Care and Social Assistance": "0.021021021",
    "Information Media and Telecommunications": "-0.060367454",
    "Manufacturing": "0.026642984",
    "Mining": "-0.047619048",
    "Other Services": "0.010956903",
    "Professional, Scientific and Technical Services": "-0.031792976",
    "Public Administration and Safety": "0.003424658",
    "Rental, Hiring and Real Estate Services": "0.034482759",
    "Retail Trade": "0.002878289",
    "Transport, Postal and Warehousing": "-0.00286533",
    "Wholesale Trade": "0.019386107",
    "Total establishments": "-0.001081976"
}, {
    "year": "2011",
    "Accommodation and Food Services": "0.037916667",
    "Administrative and Support Services": "-0.010928962",
    "Agriculture, Forestry and Fishing": "0.133333333",
    "Arts and Recreation Services": "0.013913043",
    "Construction": "0.071428571",
    "Education and Training": "0.017716535",
    "Electricity, Gas, Water and Waste Services": "-0.045918367",
    "Financial and Insurance Services": "0",
    "Health Care and Social Assistance": "0.004901961",
    "Information Media and Telecommunications": "-0.039106145",
    "Manufacturing": "0.010380623",
    "Mining": "-0.033333333",
    "Other Services": "0.001445087",
    "Professional, Scientific and Technical Services": "0.011072929",
    "Public Administration and Safety": "-0.023890785",
    "Rental, Hiring and Real Estate Services": "0.033333333",
    "Retail Trade": "0.056580566",
    "Transport, Postal and Warehousing": "-0.002873563",
    "Wholesale Trade": "0.001584786",
    "Total establishments": "0.017903791"
}, {
    "year": "2012",
    "Accommodation and Food Services": "0.023685267",
    "Administrative and Support Services": "-0.006906077",
    "Agriculture, Forestry and Fishing": "0",
    "Arts and Recreation Services": "-0.005145798",
    "Construction": "0.094736842",
    "Education and Training": "-0.017408124",
    "Electricity, Gas, Water and Waste Services": "0",
    "Financial and Insurance Services": "0.005476451",
    "Health Care and Social Assistance": "0.022439024",
    "Information Media and Telecommunications": "-0.055232558",
    "Manufacturing": "-0.022260274",
    "Mining": "0",
    "Other Services": "0.03968254",
    "Professional, Scientific and Technical Services": "0.033610272",
    "Public Administration and Safety": "-0.020979021",
    "Rental, Hiring and Real Estate Services": "0.016129032",
    "Retail Trade": "-0.031819946",
    "Transport, Postal and Warehousing": "-0.023054755",
    "Wholesale Trade": "-0.006329114",
    "Total establishments": "0.007198297"
}, {
    "year": "2013",
    "Accommodation and Food Services": "0.04627451",
    "Administrative and Support Services": "-0.02364395",
    "Agriculture, Forestry and Fishing": "0",
    "Arts and Recreation Services": "0.010344828",
    "Construction": "0.08974359",
    "Education and Training": "0.013779528",
    "Electricity, Gas, Water and Waste Services": "0.042780749",
    "Financial and Insurance Services": "0.021786492",
    "Health Care and Social Assistance": "0.011450382",
    "Information Media and Telecommunications": "-0.046153846",
    "Manufacturing": "-0.00525394",
    "Mining": "-0.068965517",
    "Other Services": "0.018043026",
    "Professional, Scientific and Technical Services": "0.012787724",
    "Public Administration and Safety": "-0.007142857",
    "Rental, Hiring and Real Estate Services": "0.023809524",
    "Retail Trade": "0.002004008",
    "Transport, Postal and Warehousing": "0.029498525",
    "Wholesale Trade": "0.017515924",
    "Total establishments": "0.015785222"
}, {
    "year": "2014",
    "Accommodation and Food Services": "0.053973013",
    "Administrative and Support Services": "-0.047008547",
    "Agriculture, Forestry and Fishing": "0",
    "Arts and Recreation Services": "0.0221843",
    "Construction": "-0.097058824",
    "Education and Training": "0.017475728",
    "Electricity, Gas, Water and Waste Services": "-0.056410256",
    "Financial and Insurance Services": "-0.021321962",
    "Health Care and Social Assistance": "0.018867925",
    "Information Media and Telecommunications": "-0.1",
    "Manufacturing": "-0.036971831",
    "Mining": "0.018518519",
    "Other Services": "0.02726653",
    "Professional, Scientific and Technical Services": "-0.012265512",
    "Public Administration and Safety": "-0.028776978",
    "Rental, Hiring and Real Estate Services": "0.041343669",
    "Retail Trade": "-0.0104",
    "Transport, Postal and Warehousing": "-0.017191977",
    "Wholesale Trade": "-0.050078247",
    "Total establishments": "-0.000734169"
}, {
    "year": "2015",
    "Accommodation and Food Services": "0.022759602",
    "Administrative and Support Services": "-0.029895366",
    "Agriculture, Forestry and Fishing": "-0.117647059",
    "Arts and Recreation Services": "0.006677796",
    "Construction": "-0.006514658",
    "Education and Training": "0.026717557",
    "Electricity, Gas, Water and Waste Services": "0.005434783",
    "Financial and Insurance Services": "-0.045751634",
    "Health Care and Social Assistance": "0.008333333",
    "Information Media and Telecommunications": "-0.032258065",
    "Manufacturing": "0.012797075",
    "Mining": "-0.109090909",
    "Other Services": "0.01393497",
    "Professional, Scientific and Technical Services": "0.012783053",
    "Public Administration and Safety": "-0.018518519",
    "Rental, Hiring and Real Estate Services": "0.027295285",
    "Retail Trade": "-0.020210186",
    "Transport, Postal and Warehousing": "0",
    "Wholesale Trade": "-0.014827018",
    "Total establishments": "0.001285741"
}, {
    "year": "2016",
    "Accommodation and Food Services": "0.044158554",
    "Administrative and Support Services": "-0.001540832",
    "Agriculture, Forestry and Fishing": "-0.066666667",
    "Arts and Recreation Services": "0.039800995",
    "Construction": "0.078688525",
    "Education and Training": "0.182156134",
    "Electricity, Gas, Water and Waste Services": "0",
    "Financial and Insurance Services": "0.051369863",
    "Health Care and Social Assistance": "0.04775023",
    "Information Media and Telecommunications": "0.018518519",
    "Manufacturing": "-0.05234657",
    "Mining": "-0.142857143",
    "Other Services": "0.035340314",
    "Professional, Scientific and Technical Services": "-0.00036062",
    "Public Administration and Safety": "-0.01509434",
    "Rental, Hiring and Real Estate Services": "0.04589372",
    "Retail Trade": "-0.011551155",
    "Transport, Postal and Warehousing": "0.011661808",
    "Wholesale Trade": "-0.294314381",
    "Total establishments": "0.01253516"
}, {
    "year": "2017",
    "Accommodation and Food Services": "0.008991009",
    "Administrative and Support Services": "-0.023148148",
    "Agriculture, Forestry and Fishing": "0.142857143",
    "Arts and Recreation Services": "0.011164274",
    "Construction": "0.139817629",
    "Education and Training": "0.020440252",
    "Electricity, Gas, Water and Waste Services": "0.021621622",
    "Financial and Insurance Services": "0.010857763",
    "Health Care and Social Assistance": "-0.001752848",
    "Information Media and Telecommunications": "0.010909091",
    "Manufacturing": "0.003809524",
    "Mining": "-0.047619048",
    "Other Services": "0.000632111",
    "Professional, Scientific and Technical Services": "0.015873016",
    "Public Administration and Safety": "0.026819923",
    "Rental, Hiring and Real Estate Services": "0.108545035",
    "Retail Trade": "-0.004590985",
    "Transport, Postal and Warehousing": "-0.04610951",
    "Wholesale Trade": "-0.011848341",
    "Total establishments": "0.009783199"
}, {
    "year": "2018",
    "Accommodation and Food Services": "0.020132013",
    "Administrative and Support Services": "-0.014218009",
    "Agriculture, Forestry and Fishing": "0",
    "Arts and Recreation Services": "0.011041009",
    "Construction": "0.037333333",
    "Education and Training": "0.01540832",
    "Electricity, Gas, Water and Waste Services": "-0.031746032",
    "Financial and Insurance Services": "0.034371643",
    "Health Care and Social Assistance": "0.019315189",
    "Information Media and Telecommunications": "-0.050359712",
    "Manufacturing": "-0.056925996",
    "Mining": "0.05",
    "Other Services": "0.029058749",
    "Professional, Scientific and Technical Services": "0.009232955",
    "Public Administration and Safety": "0.02238806",
    "Rental, Hiring and Real Estate Services": "0.022916667",
    "Retail Trade": "-0.039832285",
    "Transport, Postal and Warehousing": "-0.012084592",
    "Wholesale Trade": "-0.052757794",
    "Total establishments": "0.003408887"
}, {
    "year": "2019",
    "Accommodation and Food Services": "0.021352313",
    "Administrative and Support Services": "-0.025641026",
    "Agriculture, Forestry and Fishing": "0.0625",
    "Arts and Recreation Services": "0.012480499",
    "Construction": "0.020565553",
    "Education and Training": "0.02124431",
    "Electricity, Gas, Water and Waste Services": "0.049180328",
    "Financial and Insurance Services": "0.004153686",
    "Health Care and Social Assistance": "0.006890612",
    "Information Media and Telecommunications": "-0.053030303",
    "Manufacturing": "-0.032193159",
    "Mining": "-0.119047619",
    "Other Services": "-0.01903008",
    "Professional, Scientific and Technical Services": "-0.025334272",
    "Public Administration and Safety": "0.102189781",
    "Rental, Hiring and Real Estate Services": "-0.012219959",
    "Retail Trade": "-0.010917031",
    "Transport, Postal and Warehousing": "-0.036697248",
    "Wholesale Trade": "-0.035443038",
    "Total establishments": "-0.003874121"
}]

const industryNames = ['Accommodation and Food Services',
    'Administrative and Support Services',
    'Agriculture, Forestry and Fishing', 'Arts and Recreation Services',
    'Construction', 'Education and Training',
    'Electricity, Gas, Water and Waste Services',
    'Financial and Insurance Services', 'Health Care and Social Assistance',
    'Information Media and Telecommunications', 'Manufacturing', 'Mining',
    'Other Services', 'Professional, Scientific and Technical Services',
    'Public Administration and Safety',
    'Rental, Hiring and Real Estate Services', 'Retail Trade',
    'Transport, Postal and Warehousing', 'Wholesale Trade',
    'Total establishments']

yearNum = increaseData.length
industryTypeNum = 20
years = []

for (let i = 0; i < yearNum; i++) {
    years.push(increaseData[i]["year"])
}
// console.log(years)

//preparation for datasets
dataLists = []
for (let i = 0; i < industryTypeNum; i++) {
    const dataList = []
    dataLists.push(dataList)
}

for (let i = 0; i < yearNum; i++) {
    for (let j = 0; j < industryTypeNum; j++) {
        dataLists[j].push(increaseData[i][industryNames[j]])
    }
}

// create datasets for the Echarts option
datasets = []
const dataset = {}
dataset['name'] = 'All'
dataset['type'] = 'line'
datasets.push(dataset)

for (let i = 0; i < industryTypeNum; i++) {
    const dataset = {}
    dataset['name'] = industryNames[i]
    dataset['type'] = 'line'
    dataset['smooth'] = true
    // dataset['symbol'] = 'none'
    dataset['data'] = dataLists[i]
    datasets.push(dataset)
}
// console.log(dataLists)

const industryNames_new = []
industryNames_new.push('All')
for (let i = 0; i < industryTypeNum; i++) {
    industryNames_new.push(industryNames[i])
}

// When the mouse moves over the line, trigger the display of specific data
myChart.on('mousemove', function (params) {
    window.selectSeries = params.seriesName;
});
//When the mouse moves out of the line, the data display disappears;
//If you don't deal with this, the tooltip will be displayed when the mouse is moved to the blank.
myChart.on('mouseout', function (params) {
    window.selectSeries = '';
});

// Define Echarts line chart
option = {
    title: {
        // text: 'Year-on-year growth rate of Business establishments in various industries',
        textStyle: {//Style of title content
            color: '#0854c4',//blue
            fontStyle: 'normal',//The font style of the main title text, the default is normal, italic (italic), oblique (italic)
            fontWeight: "bold",//Optional normal (normal), bold (bold), bolder (bold), lighter (thinner), 100|200|300|400|500...
            fontFamily: "san-serif",//Theme text font
            fontSize: 18//Theme text font size, the default is 18px
        },
        subtextStyle: {//Subtitle content style
        },
    },
    textStyle: {// lable 
        fontSize: 16
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var res = "";
            for (var i = 0; i < params.length; i++) {
                var series = params[i];
                if (series.seriesName == window.selectSeries) {
                    res = series.axisValue + "<br/>" + series.marker + series.seriesName + ": " + (series.data * 100).toFixed(2) + "% <br/>";
                    break;
                }
            }
            return res;
        }
    },
    legend: {
        data: industryNames_new,
        top: '3%',
    },
    grid: {
        top: '18%',
        left: '3%',
        right: '4%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: years
    },
    yAxis: {
        type: 'value',
        min: -0.3,
        max: 0.3
    },
    series: datasets
};

// show line chart
option && myChart.setOption(option);

// Interactive module: display only the polyline of a single industry
myChart.on('legendselectchanged', function (params) {
    var taht = this;

    var dic = {};
    var isSelect = false;

    if (params.name == 'All') {
        isSelect = true;
    }

    for (var key in params.selected) {
        dic[key] = isSelect;
    }

    option.legend.selected = dic;
    option.legend.selected[params.name] = true;
    myChart.setOption(option);
})