import React, {Component} from 'react';
import $ from 'jquery';
import '../css/reset.css'
import '../css/App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            wzgd: [],
            jstd: [],
            yxxy: [],
            xwdt: [],
        }
    }
    componentDidMount = function () {
        // 文字滚动
        $.ajax({
            'url': 'http://192.168.43.151:8005/wzgd',
            'type': 'get',
            'success': function (a) {
                console.log(a)
                this.setState({wzgd: a});
            }.bind(this)
        })

        //教师团队
        $.ajax({
            'url': 'http://192.168.43.151:8005/jstd',
            'type': 'get',
            'success': function (opt) {
                this.setState({jstd: opt});
            }.bind(this)
        });
        // 优秀学员
        $.ajax({
            'url': 'http://192.168.43.151:8005/yxxy',
            'type': 'get',
            'success': function (b) {
                this.setState({yxxy: b});
            }.bind(this)
        })
        // 新闻动态
        $.ajax({
            'url': 'http://192.168.43.151:8005/xwdt',
            'type': 'get',
            'success': function (c) {
                this.setState({xwdt: c});
            }.bind(this)
        })


        $.easing['jswing'] = $.easing['swing'];
        $.extend($.easing,
            {
                def: 'easeOutQuad',
                swing: function (x, t, b, c, d) {
                    return $.easing[$.easing.def](x, t, b, c, d);
                },
                easeOutQuad: function (x, t, b, c, d) {
                    return -c * (t /= d) * (t - 2) + b;
                }
            });
        $(".treebox .level1>a").click(function () {
            $(this).addClass('current')
                .find('span').addClass('down')
                .parent().next().slideDown('slow', 'easeOutQuad')
                .parent().siblings().children('a').removeClass('current')
                .find('span').removeClass('down').parent().next().slideUp('slow', 'easeOutQuad');
            return false;
        });

        $('.level1 a').click(function () {
            var index = $(this).parent().index();
            $('.main_right>div').eq(index).show().siblings().hide();
        });

        $('.index li').click(function () {
            var index=$(this).index();
            $(this).addClass('line').siblings().removeClass('line');
            $('.tit').eq(index).addClass('hcon').siblings().removeClass('hcon');
            $('.tit').eq(index).find('div').stop().slideDown().parent().siblings().children('div').stop().slideUp();
        });
        $('.stu li').click(function () {
            var index=$(this).index();
            $(this).addClass('line').siblings().removeClass('line');
            $('.tit2').eq(index).addClass('hcon').siblings().removeClass('hcon');
            $('.tit2').eq(index).find('div').stop().slideDown().parent().siblings().children('div').stop().slideUp();
        })

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
                                {/*首页*/}
                                <li className="level1">
                                    <a href="javascript:;">首页<span></span></a>
                                    <ul className="level2 index">
                                        <li>banner更改</li>
                                        <li>文字滚动</li>
                                        <li>教师团队</li>
                                        <li>优秀学员</li>
                                        <li>新闻动态</li>
                                    </ul>
                                </li>
                                {/*首页end*/}

                                {/*我们的学员*/}
                                <li className="level1">
                                    <a href="javascript:;">我们的学员<span></span></a>
                                    <ul className="level2 stu">
                                        <li>banner更改</li>
                                        <li>编辑学员资料</li>
                                    </ul>
                                </li>
                                {/*我们的学员end*/}

                                {/*我们的教师*/}
                                <li className="level1">
                                    <a href="javascript:;">我们的教师<span></span></a>
                                    <ul className="level2">
                                        <li>banner更改</li>
                                        <li>编辑教师资料</li>
                                    </ul>
                                </li>
                                {/*我们的教师end*/}

                                {/*意大利院校*/}
                                <li className="level1">
                                    <a href="javascript:;">意大利院校<span></span></a>
                                    <ul className="level2">
                                        <li>美术学院</li>
                                        <li>音乐学院</li>
                                        <li>综合类大学</li>
                                    </ul>
                                </li>
                                {/*意大利院校end*/}

                                {/*新闻动态*/}
                                <li className="level1">
                                    <a href="javascript:;">新闻动态<span></span></a>
                                    <ul className="level2">
                                        <li>banner更改</li>
                                        <li>编辑新闻</li>
                                    </ul>
                                </li>
                                {/*新闻动态end*/}

                                {/*国际交流*/}
                                <li className="level1">
                                    <a href="javascript:;">国际交流<span></span></a>
                                    <ul className="level2">
                                        <li>banner更改</li>
                                        <li>交流信息</li>
                                    </ul>
                                </li>
                                {/*国际交流end*/}

                                {/*学习资料*/}
                                <li className="level1">
                                    <a href="javascript:;">学习资料<span></span></a>
                                    <ul className="level2">
                                        <li>banner更改</li>
                                        <li>编辑学习资料</li>
                                    </ul>
                                </li>
                                {/*学习资料end*/}
                            </ul>
                        </div>
                        {/*右侧面板*/}
                        <div className="main_right">
                            {/*首页*/}
                            <div className="on">
                                <div className="tit">
                                    banner更改
                                    <div className="con">111</div>
                                </div>
                                <div className="tit">
                                    文字滚动
                                    <div className="con">
                                        <ul>
                                            {this.state.wzgd.map(function (e) {
                                                return <li key={e.id}>{e.news}</li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="tit">
                                    教师团队
                                    <div className="con">
                                        {this.state.jstd.map(function (e) {
                                            return <div className="teachers" key={e.id}>
                                                <span>{e.name}</span>
                                                <span>{e.job}</span>
                                                <img src={e.img}/>
                                            </div>
                                        })}
                                    </div>
                                </div>

                                <div className="tit">
                                    优秀学员
                                    <div className="con">
                                        {this.state.yxxy.map(function (e) {
                                            return <dl className="great" key={e.id}>
                                                <dd>
                                                    <div className="s_name">{e.name}</div>
                                                    <div className="lvli">
                                                        <p>{e.p1}</p>
                                                        <p>{e.p2}</p>
                                                        <p>{e.p3}</p>
                                                        <p>{e.p4}</p>
                                                        <p className="pink">{e.pink}</p>
                                                    </div>
                                                </dd>
                                                <dt><img src={e.img}/></dt>
                                            </dl>
                                        })}
                                    </div>
                                </div>
                                <div className="tit">
                                    新闻动态
                                    <div className="con">
                                        {this.state.xwdt.map(function (e) {
                                            return <dl className="news" key={e.id}>
                                                <dd>{e.ri}  {e.month}</dd>
                                                <dd className="new_time">{e.time}</dd>
                                                <dd className="new_title">{e.tit}</dd>
                                                <dd className="desc">{e.desc}</dd>
                                                <dt>
                                                    <img src={e.img}/>
                                                </dt>
                                            </dl>
                                        })}
                                    </div>
                                </div>

                            </div>
                            {/*首页end*/}

                            {/*我们的学员*/}
                            <div>
                                <div className="tit tit2">
                                    banner更改
                                    <div className="con">111</div>
                                </div>
                                <div className="tit tit2">
                                    编辑学员资料
                                    <div className="con">222</div>
                                </div>
                            </div>
                            {/*我们的学员end*/}

                            {/*我们的教师*/}
                            <div>33333</div>
                            {/*我们的教师end*/}

                            {/*意大利院校*/}
                            <div>44444</div>
                            {/*意大利院校end*/}

                            {/*新闻动态*/}
                            <div>55555</div>
                            {/*新闻动态end*/}

                            {/*国际交流*/}
                            <div>66666</div>
                            {/*国际交流end*/}

                            {/*学习资料*/}
                            <div>77777</div>
                            {/*学习资料end*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
