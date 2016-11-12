function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}

option_device_cloud = {
    title: {
        text: 'Google Trends',
        link: 'http://www.google.com/trends/hottrends'
    },
    tooltip: {
        show: true
    },
    series: [{
        name: 'Google Trends',
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation : [0, 45, 90, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: [
            {
                name: "Sam S Club",
                value: 10000,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "Macys",
                value: 6181,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Amy Schumer",
                value: 4386,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Jurassic World",
                value: 4055,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Charter Communications",
                value: 2467,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Chick Fil A",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Planet Fitness",
                value: 1898,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Pitch Perfect",
                value: 1484,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Express",
                value: 1112,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Home",
                value: 965,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Johnny Depp",
                value: 847,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Lena Dunham",
                value: 582,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Lewis Hamilton",
                value: 555,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "KXAN",
                value: 550,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Mary Ellen Mark",
                value: 462,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Farrah Abraham",
                value: 366,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Rita Ora",
                value: 360,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Serena Williams",
                value: 282,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "NCAA baseball tournament",
                value: 273,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Point Break",
                value: 265,
                itemStyle: createRandomItemStyle()
            }
        ]
    }]
};


var keywords1 = {
              "visualMap": 22199,
              "continuous": 10288,
              "contoller": 620,
              "series": 274470,
              "gauge": 12311,
              "detail": 1206,
              "piecewise": 4885,
              "textStyle": 32294,
              "markPoint": 18574,
              "pie": 38929,
              "roseType": 969,
              "label": 37517,
              "emphasis": 12053,
              "yAxis": 57299,
              "name": 15418,
              "type": 22905,
              "gridIndex": 5146,
              "normal": 49487,
              "itemStyle": 33837,
              "min": 4500,
              "silent": 5744,
              "animation": 4840,
              "offsetCenter": 232,
              "inverse": 3706,
              "borderColor": 4812,
              "markLine": 16578,
              "line": 76970,
              "radiusAxis": 6704,
              "radar": 15964,
              "data": 60679,
              "dataZoom": 24347,
              "tooltip": 43420,
              "toolbox": 25222,
              "geo": 16904,
              "parallelAxis": 4029,
              "parallel": 5319,
              "max": 3393,
              "bar": 43066,
              "heatmap": 3110,
              "map": 20285,
              "animationDuration": 3425,
              "animationDelay": 2431,
              "splitNumber": 5175,
              "axisLine": 12738,
              "lineStyle": 19601,
              "splitLine": 7133,
              "axisTick": 8831,
              "axisLabel": 17516,
              "pointer": 590,
              "color": 23426,
              "title": 38497,
              "formatter": 15214,
              "slider": 7236,
              "legend": 66514,
              "grid": 28516,
              "smooth": 1295,
              "smoothMonotone": 696,
              "sampling": 757,
              "feature": 12815,
              "saveAsImage": 2616,
              "polar": 6279,
              "calculable": 879,
              "backgroundColor": 9419,
              "excludeComponents": 130,
              "show": 20620,
              "text": 2592,
              "icon": 2782,
              "dimension": 478,
              "inRange": 1060,
              "animationEasing": 2983,
              "animationDurationUpdate": 2259,
              "animationDelayUpdate": 2236,
              "animationEasingUpdate": 2213,
              "xAxis": 89459,
              "angleAxis": 5469,
              "showTitle": 484,
              "dataView": 2754,
              "restore": 932,
              "timeline": 10104,
              "range": 477,
              "value": 5732,
              "precision": 878,
              "target": 1433,
              "zlevel": 5361,
              "symbol": 8718,
              "interval": 7964,
              "symbolSize": 5300,
              "showSymbol": 1247,
              "inside": 8913,
              "xAxisIndex": 3843,
              "orient": 4205,
              "boundaryGap": 5073,
              "nameGap": 4896,
              "zoomLock": 571,
              "hoverAnimation": 2307,
              "legendHoverLink": 3553,
              "stack": 2907,
              "throttle": 466,
              "connectNulls": 897,
              "clipOverflow": 826,
              "startValue": 551,
              "minInterval": 3292,
              "opacity": 3097,
              "splitArea": 4775,
              "filterMode": 635,
              "end": 409,
              "left": 6475,
              "funnel": 2238,
              "lines": 6403,
              "baseline": 431,
              "align": 2608,
              "coord": 897,
              "nameTextStyle": 7477,
              "width": 4338,
              "shadowBlur": 4493,
              "effect": 929,
              "period": 225,
              "areaColor": 631,
              "borderWidth": 3654,
              "nameLocation": 4418,
              "position": 11723,
              "containLabel": 1701,
              "scatter": 10718,
              "areaStyle": 5310,
              "scale": 3859,
              "pieces": 414,
              "categories": 1000,
              "selectedMode": 3825,
              "itemSymbol": 273,
              "effectScatter": 7147,
              "fontStyle": 3376,
              "fontSize": 3386,
              "margin": 1034,
              "iconStyle": 2257,
              "link": 1366,
              "axisPointer": 5245,
              "showDelay": 896,
              "graph": 22194,
              "subtext": 1442,
              "selected": 2881,
              "barCategoryGap": 827,
              "barGap": 1094,
              "barWidth": 1521,
              "coordinateSystem": 3622,
              "barBorderRadius": 284,
              "z": 4014,
              "polarIndex": 1456,
              "shadowOffsetX": 3046,
              "shadowColor": 3771,
              "shadowOffsetY": 2475,
              "height": 1988,
              "barMinHeight": 575,
              "lang": 131,
              "symbolRotate": 2752,
              "symbolOffset": 2549,
              "showAllSymbol": 942,
              "transitionDuration": 993,
              "bottom": 3724,
              "fillerColor": 229,
              "nameMap": 1249,
              "barMaxWidth": 747,
              "radius": 2103,
              "center": 2425,
              "magicType": 3276,
              "labelPrecision": 248,
              "option": 654,
              "seriesIndex": 935,
              "controlPosition": 121,
              "itemGap": 3188,
              "padding": 3481,
              "shadowStyle": 347,
              "boxplot": 1394,
              "labelFormatter": 264,
              "realtime": 631,
              "dataBackgroundColor": 239,
              "showDetail": 247,
              "showDataShadow": 217,
              "x": 684,
              "valueDim": 499,
              "onZero": 931,
              "right": 3255,
              "clockwise": 1035,
              "itemWidth": 1732,
              "trigger": 3840,
              "axis": 379,
              "selectedOffset": 670,
              "startAngle": 1293,
              "minAngle": 590,
              "top": 4637,
              "avoidLabelOverlap": 870,
              "labelLine": 3785,
              "sankey": 2933,
              "endAngle": 213,
              "start": 779,
              "roam": 1738,
              "fontWeight": 2828,
              "fontFamily": 2490,
              "subtextStyle": 2066,
              "indicator": 853,
              "sublink": 708,
              "zoom": 1038,
              "subtarget": 659,
              "length": 1060,
              "itemSize": 505,
              "controlStyle": 452,
              "yAxisIndex": 2529,
              "edgeLabel": 1188,
              "radiusAxisIndex": 354,
              "scaleLimit": 1313,
              "geoIndex": 535,
              "regions": 1892,
              "itemHeight": 1290,
              "nodes": 644,
              "candlestick": 3166,
              "crossStyle": 466,
              "edges": 369,
              "links": 3277,
              "layout": 846,
              "barBorderColor": 721,
              "barBorderWidth": 498,
              "treemap": 3865,
              "y": 367,
              "valueIndex": 704,
              "showLegendSymbol": 482,
              "mapValueCalculation": 492,
              "optionToContent": 264,
              "handleColor": 187,
              "handleSize": 271,
              "showContent": 1853,
              "angleAxisIndex": 406,
              "endValue": 327,
              "triggerOn": 1720,
              "contentToOption": 169,
              "buttonColor": 71,
              "rotate": 1144,
              "hoverLink": 335,
              "outOfRange": 491,
              "textareaColor": 58,
              "textareaBorderColor": 58,
              "textColor": 60,
              "buttonTextColor": 66,
              "category": 336,
              "hideDelay": 786,
              "alwaysShowContent": 1267,
              "extraCssText": 901,
              "effectType": 277,
              "force": 1820,
              "rippleEffect": 723,
              "edgeSymbolSize": 329,
              "showEffectOn": 271,
              "gravity": 199,
              "edgeLength": 193,
              "layoutAnimation": 152,
              "length2": 169,
              "enterable": 957,
              "dim": 83,
              "readOnly": 143,
              "levels": 444,
              "textGap": 256,
              "pixelRatio": 84,
              "nodeScaleRatio": 232,
              "draggable": 249,
              "brushType": 158,
              "radarIndex": 152,
              "large": 182,
              "edgeSymbol": 675,
              "largeThreshold": 132,
              "leafDepth": 73,
              "childrenVisibleMin": 73,
              "minSize": 35,
              "maxSize": 35,
              "sort": 90,
              "funnelAlign": 61,
              "source": 336,
              "nodeClick": 200,
              "curveness": 350,
              "areaSelectStyle": 104,
              "parallelIndex": 52,
              "initLayout": 359,
              "trailLength": 116,
              "boxWidth": 20,
              "back": 53,
              "rewind": 110,
              "zoomToNodeRatio": 80,
              "squareRatio": 60,
              "parallelAxisDefault": 358,
              "checkpointStyle": 440,
              "nodeWidth": 49,
              "color0": 62,
              "layoutIterations": 56,
              "nodeGap": 54,
              "color(Array": 76,
              "<string>)": 76,
              "repulsion": 276,
              "tiled": 105,
              "currentIndex": 145,
              "axisType": 227,
              "loop": 97,
              "playInterval": 112,
              "borderColor0": 23,
              "gap": 43,
              "autoPlay": 123,
              "showPlayBtn": 25,
              "breadcrumb": 119,
              "colorMappingBy": 85,
              "id": 18,
              "blurSize": 85,
              "minOpacity": 50,
              "maxOpacity": 54,
              "prevIcon": 12,
              "children": 21,
              "shape": 98,
              "nextIcon": 12,
              "showNextBtn": 17,
              "stopIcon": 21,
              "visibleMin": 83,
              "visualDimension": 97,
              "colorSaturation": 56,
              "colorAlpha": 66,
              "emptyItemWidth": 10,
              "inactiveOpacity": 4,
              "activeOpacity": 4,
              "showPrevBtn": 19,
              "playIcon": 26,
              "ellipsis": 19,
              "gapWidth": 19,
              "borderColorSaturation": 10,
              "handleIcon": 2,
              "handleStyle": 6,
              "borderType": 1,
              "constantSpeed": 1,
              "polyline": 2,
              "blendMode": 1,
              "dataBackground": 1,
              "textAlign": 1,
              "textBaseline": 1,
              "brush": 3
            };
var keywords = {'': 5478, 'Redmi 3': 864, 'KIW-AL10': 574, 'GN9010': 577, 'SM-G9280': 486, 'vivo X3L': 449, 'SM-N9006': 848, 'OPPO R7s': 726, 'GT-N7100': 689, 'NEXT': 2156, 'HM NOTE 1S': 1007, 'NoxW': 483, 'MZ73': 1395, 'HM NOTE 1LTE': 2021, 'OPPO': 637, 'H60-L02': 552, 'H60-L01': 1443, 'Redmi 3S': 510, 'SM-A5000': 564, 'Droid4X-WIN': 1144, 'HM NOTE 1TD': 623, 'hi6210sft': 1043, 'vivo Xplay3S': 566, 'msm8952 for arm64': 1824, 'iPhone5_2': 4902, 'MX5': 2376, 'iPhone5_4': 686, 'MX3': 617, 'vivo Y27': 474, 'SAMSUNG-SM-N900A': 492, 'msm8916_32': 1809, 'HUAWEI MT7-CL00': 568, 'PRO 5': 556, 'PRO 6': 517, 'iPhone7_2': 22246, 'iPhone7_1': 15344, 'SM-N9008V': 469, 'None': 11875, 'Letv X500': 531, 'JAZZ': 1647, 'HTC D510': 1693, 'MI MAX': 932, 'OPPO R7': 1074, 'iPhone8_4': 1510, 'iPhone8_1': 12728, 'iPhone8_2': 7569, 'Redmi Note 3': 4038, 'Redmi Note 2': 2470, 'iPhone5_1': 537, 'MI NOTE Pro': 931, 'HUAWEI G750-T01': 627, 'SM-G9250': 605, 'm2 note': 1241, 'vivo X710L': 792, 'OPPO R9m': 2901, 'iPhone4_1': 462, 'iPad4_1': 6587, 'iPad4_7': 1373, 'iPad4_4': 7116, 'HUAWEI RIO-AL00': 683, 'HUAWEI TAG-TL00': 461, 'iPhone6_2': 13023, 'iPhone6_1': 2394, 'hi6250': 652, 'm1': 727, 'm3': 588, 'EVA': 1543, 'MX4': 1420, 'iPhone5_3': 930, 'OPPO A37m': 460, 'HM 2A': 589, 'm2': 827, 'Che1-CL10': 507, '2014501': 747, 'iPad3_4': 2352, 'SM-G900F': 2193, 'GRACE': 885, 'wt86047': 492, 'PLK': 1851, 'MSM8916 for arm64': 3201, 'MI 2': 1451, 'MI 3': 1192, 'MI 5': 2808, 'MX4 Pro': 950, 'vivo X5L': 1078, 'm1 metal': 1144, 'MI PAD': 1788, 'iPad5_3': 7026, 'iPad5_1': 1862, 'R7Plus': 718, 'iPad5_4': 548, 'm1 note': 1457, 'MI 3W': 8494, 'Mi-4c': 1892, 'OPPO A59m': 593, 'm3 note': 1191, 'KNIGHT': 707, 'PINE': 1902, 'HUAWEI P7-L07': 484, 'SM-G9350': 840}
var device_change = {'iPhone1_1':'iPhone 1G','iPhone1_2':'iPhone 3G','iPhone2_1':'iPhone 3GS','iPhone3_1':'iPhone 4','iPhone3_3':'Verizon iPhone 4','iPhone4_1':'iPhone 4S','iPhone5_1':'iPhone 5(GSM)','iPhone5_2':'iPhone 5(GSM+CDMA)','iPhone5_3':'iPhone 5c(GSM)','iPhone5_4':'iPhone 5c(GSM+CDMA)','iPhone6_1':'iPhone 5s(GSM)','iPhone6_2':'iPhone 5s(GSM+CDMA)','iPhone8_2':'iPhone 6S Plus','iPhone8_1':'iPhone 6S','iPhone7_2':'iPhone 6','iPhone7_1':'iPhone 6 Plus','iPod1_1':'iPod Touch 1G','iPod2_1':'iPod Touch 2G','iPod3_1':'iPod Touch 3G','iPod4_1':'iPod Touch 4G','iPod5_1':'iPod Touch 5G','iPad1_1':'iPad','iPad2_1':'iPad 2 (Wifi)','iPad2_2':'iPad 2 (GSM)','iPad2_3':'iPad 2 (CDMA)','iPad2_4':'iPad 2 (Wifi+cellur)','iPad2_5':'iPad Mini (Wifi)','iPad2_6':'iPad Mini (GSM)','iPad2_7':'iPad Mini (GSM+CDMA)','iPad3_1':'iPad 3 (Wifi)','iPad3_2':'iPad 2 (GSM+CDMA)','iPad3_3':'iPad 3 (CDMA)','iPad3_4':'iPad 4 (Wifi)','iPad3_5':'iPad 4 (GSM)','iPad3_6':'iPad 4 (GSM+CDMA)','iPad4_1':'iPad Air (Wifi)','iPad4_2':'iPad Air (Cellular)','iPad4_3':'iPad Air','iPad4_4':'iPad Mini 2G','iPad4_5':'iPad Mini 2G (Cellular)','iPad4_6':'iPad Mini 2G',}
var option_device_search = {
        
            title: {
                text: '玩法性能'
            },
            tooltip: {
                padding: 0,
                trigger: 'item',
                formatter: function(data){
                  //console.log(data);
                  return data.name+"<br>"+data.seriesName+':'+data.value+'<br> 点击查看详情';
                }

                },
            toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable:true,
        dataZoom:{
            show:true,
            realtime:true,
        },
            legend: {
                data:['fps','dp','prime'],
                selected:{
                    'fps':true,
                    'dp':false,
                    'prime':false
                }
            },
            xAxis: {
                data: []
            },
            yAxis: {
                type : 'value',
            axisLabel : {
                formatter: '{value} '
            },
            splitNumber:10
            },
            series: [{
                name: 'fps',
                type: 'bar',
                'markLine':{
                        symbol : ['arrow','none'],
                        symbolSize : [4, 2],
                        itemStyle : {
                            normal: {
                                lineStyle: {color:'orange'},
                                barBorderColor:'orange',
                                label:{
                                    position:'left',
                                    formatter:function(params){
                                        return Math.round(params.value);
                                    },
                                    textStyle:{color:'purple'}
                                }
                            }
                        },
                    'data':[{'type':'average','name':'平均值'}]
                    },
                data: []
            },
            {
                name: 'dp',
                type: 'bar',
                'markLine':{
                        symbol : ['arrow','none'],
                        symbolSize : [4, 2],
                        itemStyle : {
                            normal: {
                                lineStyle: {color:'orange'},
                                barBorderColor:'orange',
                                label:{
                                    position:'left',
                                    formatter:function(params){
                                        return Math.round(params.value);
                                    },
                                    textStyle:{color:'red'}
                                }
                            }
                        },
                        'data':[{'type':'average','name':'平均值'}]
                    },
                data: []
            },
            {
                name: 'prime',
                type: 'bar',
                'markLine':{
                        symbol : ['arrow','none'],
                        symbolSize : [4, 2],
                        itemStyle : {
                            normal: {
                                lineStyle: {color:'green'},
                                barBorderColor:'green',
                                label:{
                                    position:'left',
                                    formatter:function(params){
                                        return Math.round(params.value);
                                    },
                                    textStyle:{color:'orange'}
                                }
                            }
                        },
                data: []
              }
            },

            ]
        };
var option_device_versus = {
        
            title: {
                text: '玩法性能比较'
            },
            tooltip: {
                padding: 0,
                trigger: 'item',
                formatter: function(data){
                  //console.log(data);
                  return data.name+"<br>"+data.seriesName+':'+data.value+'<br> 点击查看详情';
                }

                },
            toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable:true,
        dataZoom:{
            show:true,
            realtime:true,
        },
            legend: {
                data:['fps_1','fps_2'],
                selected:{
                    'fps':true,
                    'dp':false,
                    'prime':false
                }
            },
            xAxis: {
                data: []
            },
            yAxis: {
                type : 'value',
            axisLabel : {
                formatter: '{value} '
            },
            splitNumber:10
            },
            series: [{
                name: 'fps_1',
                type: 'bar',
                'markLine':{
                        symbol : ['arrow','none'],
                        symbolSize : [4, 2],
                        itemStyle : {
                            normal: {
                                lineStyle: {color:'orange'},
                                barBorderColor:'orange',
                                label:{
                                    position:'left',
                                    formatter:function(params){
                                        return Math.round(params.value);
                                    },
                                    textStyle:{color:'purple'}
                                }
                            }
                        },
                    'data':[{'type':'average','name':'平均值'}]
                    },
                data: []
            },
            {
                name: 'fps_2',
                type: 'bar',
                'markLine':{
                        symbol : ['arrow','none'],
                        symbolSize : [4, 2],
                        itemStyle : {
                            normal: {
                                lineStyle: {color:'orange'},
                                barBorderColor:'orange',
                                label:{
                                    position:'left',
                                    formatter:function(params){
                                        return Math.round(params.value);
                                    },
                                    textStyle:{color:'red'}
                                }
                            }
                        },
                        'data':[{'type':'average','name':'平均值'}]
                    },
                data: []
            }
            ]
        };
var option_device_week = {
    title: {
                text: '玩法性能近几日情况'
            },
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    legend: {
        data:['fps','玩法参与频次']
    },
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name : '帧率',
            axisLabel : {
                formatter: '{value} '
            }
        },
        {
            type : 'value',
            name : '玩法参与频次',
            axisLabel : {
                formatter: '{value} '
            }
        }
    ],
    series : [

        {
            name:'fps',
            type:'line',
            'markLine':{
                        symbol : ['arrow','none'],
                        symbolSize : [4, 2],
                        itemStyle : {
                            normal: {
                                lineStyle: {color:'orange'},
                                barBorderColor:'orange',
                                label:{
                                    position:'left',
                                    formatter:function(params){
                                        return Math.round(params.value);
                                    },
                                    textStyle:{color:'purple'}
                                }
                            }
                        },
                    'data':[{'type':'average','name':'平均值'}]
                    },
            data:[]
        },
        {
            name:'玩法参与频次',
            type:'line',
            yAxisIndex: 1,
            data:[]
        }
    ]
};

var option_device_search_detail = {
        
            title: {
                text: '性能'
            },
            tooltip: {
                padding: 0,
                trigger: 'item',
                formatter:function(data){
                  //console.log(data);
                  return data.name+"<br>"+data.seriesName+':'+data.value+'<br> 点击查看用户';
                }

                },
            toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable:true,
        dataZoom:{
            show:true,
            realtime:true,
        },
            legend: {
                data:['fps','host'],
                selected:{
                  'fps':true,
                  'host':false
                }
            },
            xAxis: {
                data: []
            },
            yAxis: {
                type : 'value',
            axisLabel : {
                formatter: '{value} '
            },
            splitNumber:5
            },
            series: [{
                name: 'fps',
                type: 'bar',
                'markLine':{
                        symbol : ['arrow','none'],
                        symbolSize : [4, 2],
                        itemStyle : {
                            normal: {
                                lineStyle: {color:'orange'},
                                barBorderColor:'orange',
                                label:{
                                    position:'left',
                                    formatter:function(params){
                                        return Math.round(params.value);
                                    },
                                    textStyle:{color:'purple'}
                                }
                            }
                        },
                    'data':[{'type':'average','name':'平均值'}]
                    },
                data: []
            },
            {
                name: 'host',
                type: 'bar',
                
                data: []
            }

            ]
        };