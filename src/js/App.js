import React, {Component} from 'react';
import $ from 'jquery';
import '../css/reset.css'
import '../css/App.css';

class App extends Component {
    componentDidMount=function () {
        $.easing['jswing'] = $.easing['swing'];
        $.extend( $.easing,
            {
                def: 'easeOutQuad',
                swing: function (x, t, b, c, d) {
                    return $.easing[$.easing.def](x, t, b, c, d);
                },
                easeOutQuad: function (x, t, b, c, d) {
                    return -c *(t/=d)*(t-2) + b;
                }
            });
        $(".treebox .level1>a").click(function(){
            $(this).addClass('current')
                .find('span').addClass('down')
                .parent().next().slideDown('slow','easeOutQuad')
                .parent().siblings().children('a').removeClass('current')
                .find('span').removeClass('down').parent().next().slideUp('slow','easeOutQuad');
            return false;
        });
    }
    render() {
        return (
            <div className="wrap">
                {/*头部*/}
                <div className="header">
                    <div className="header_in"></div>
                </div>

                {/*主体*/}
                <div className="main">
                    <div className="main_in">
                        {/*左侧下拉*/}
                        <div className="treebox">
                            <ul className="menu">
                                <li className="level1">
                                    <a href="javascript:;">首页<span></span></a>
                                    <ul className="level2">
                                        <li>文字滚动</li>
                                        <li>教师团队</li>
                                        <li>优秀学员</li>
                                        <li>新闻动态</li>
                                    </ul>
                                </li>
                                <li className="level1">
                                    <a href="javascript:;">我们的学员<span></span></a>
                                    <ul className="level2">
                                        <li>编辑学员资料</li>
                                    </ul>
                                </li>
                                <li className="level1">
                                    <a href="javascript:;">我们的教师<span></span></a>
                                    <ul className="level2">
                                        <li>编辑教师资料</li>
                                    </ul>
                                </li>
                                <li className="level1">
                                    <a href="javascript:;">意大利院校<span></span></a>
                                    <ul className="level2">
                                        <li>美术学院</li>
                                        <li>音乐学院</li>
                                        <li>综合类大学</li>
                                    </ul>
                                </li>
                                <li className="level1">
                                    <a href="javascript:;">新闻动态<span></span></a>
                                    <ul className="level2">
                                        <li>编辑新闻</li>
                                    </ul>
                                </li>
                                <li className="level1">
                                    <a href="javascript:;">国际交流<span></span></a>
                                    <ul className="level2">
                                        <li>交流信息</li>
                                    </ul>
                                </li>
                                <li className="level1">
                                    <a href="javascript:;">学习资料<span></span></a>
                                    <ul className="level2">
                                        <li>编辑学习资料</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/*右侧面板*/}
                        <div className="main_right"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
