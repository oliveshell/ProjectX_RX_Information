var option_user = {
        
            title: {
                text: '玩家性能'
            },
            tooltip: {
                padding: 0,
                trigger: 'item'

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
                tooltip: {
                show: true,
                trigger: 'axis',
                formatter:function(params){
                    return '1'
                }

                },
                data: []
            },
            {
                name: 'dp',
                type: 'bar',
                tooltip: {
                show: true,
                trigger: 'axis',
                formatter:function(params){
                    return '1'
                }
                },
                data: []
            },
            {
                name: 'prime',
                type: 'bar',
                tooltip: {
                show: true,
                trigger: 'axis',
                formatter:function(params){
                    return '1'
                }
                },
                data: []
            }

            ]
        };

var option_user_week = {
        
            title: {
                text: '玩家近一周性能'
            },
            tooltip: {
                padding: 0,
                trigger: 'item'

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
                data:['fps','count']
            },
            xAxis: {
                data: []
            },
            yAxis: [{
                type : 'value',
            axisLabel : {
                formatter: '{value} '
            },
            splitNumber:10
            },{
                type : 'value',
            axisLabel : {
                formatter: '{value} '
            },
            splitNumber:5
            }],
            series: [{
                name: 'fps',
                type: 'bar',
                tooltip: {
                show: true,
                trigger: 'axis',
                formatter:function(params){
                    return '1'
                }

                },
                data: [30,29,31]
            },
            {
                name: 'count',
                type: 'line',
                tooltip: {
                show: true,
                trigger: 'axis',
                yAxisIndex:1,
                formatter:function(params){
                    return '1'
                }
                },
                data: [50,60,70]
            }
            

            ]
        };

var option = {
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
        data:['fps','玩家在线频率']
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
            name : '在线频率(人次)',
            axisLabel : {
                formatter: '{value} '
            }
        }
    ],
    series : [

        {
            name:'fps',
            type:'line',
            data:[]
        },
        {
            name:'玩家在线频率',
            type:'line',
            yAxisIndex: 1,
            data:[]
        }
    ]
};
                    
var option_time = {
        
            title: {
                text: '玩家每日性能'
            },
            tooltip: {
                padding: 0,
                trigger: 'item'

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
                tooltip: {
                show: true,
                trigger: 'axis',
                formatter:function(params){
                    return '1'
                }

                },
                data: []
            },
            {
                name: 'dp',
                type: 'bar',
                tooltip: {
                show: true,
                trigger: 'axis',
                formatter:function(params){
                    return '1'
                }
                },
                data: []
            },
            {
                name: 'prime',
                type: 'bar',
                tooltip: {
                show: true,
                trigger: 'axis',
                formatter:function(params){
                    return '1'
                }
                },
                data: []
            }

            ]
        };