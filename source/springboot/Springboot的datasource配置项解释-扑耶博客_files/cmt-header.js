!function(){function isFunction(e){return"[object Function]"===Object.prototype.toString.call(e)}function define(e,t,o){if(modules[e])throw new Error("Module "+e+" has been defined already.");isFunction(t)&&(o=t),modules[e]={factory:o,inited:!1,exports:null}}function run(e){var t,o,n,a;if(t=modules[e],o={},n={exports:{}},!isFunction(t.factory))throw new Error("Module "+e+" has no factory.");if(a=t.factory.call(void 0,require,o,n),void 0!==a)t.exports=a;else if(n.hasOwnProperty("exports")&&"object"==typeof n.exports&&n.exports instanceof Object==!0){var s,i=!1;for(s in n.exports)n.exports.hasOwnProperty(s)&&(i=!0);i===!1?t.exports=o:t.exports=n.exports}else t.exports=n.exports;t.inited=!0}function require(e){var t;if(t=modules[e],!t)throw new Error("Module "+e+" is not defined.");return t.inited===!1&&run(e),t.exports}var modules={};define("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/cmt-header.js",function(e,t,o){window.changyan.api.ready(function(t){var o=t.util.jquery,n=(t.util._,t.util.velocityjs);e("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/cmt-header.css");var a=t.getBeConfig();t.event.register("cmt-header","jump-kz"),function(){var s="",i=!0;"true"===a.sso&&a.sso_login_new_logo?s=a.sso_login_new_logo:"true"===a.sso&&a.sso_login_logo&&(s=a.sso_login_logo),"true"===a.sso&&"2"===a.sso_type&&(i=!1);var p={login_external_platform:a.login_external_platform.split(","),ssoImg:s,ssoType:i},r={loginBar:p};"cyqE875ep"===a.extensions_key&&(r.personal_page="false");var d=e("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/cmt-header.html.js"),c=n.render(d,r);o("#SOHUCS #SOHU_MAIN").append(c);var l=o.browser.version;if("7.0"===l||"8.0"===l){var u=t.getFeConfig("custom_css_type")||t.getBeConfig("custom_css_type");"21"===u||"22"===u||"23"===u?o("#SOHUCS #SOHU_MAIN").css("backgroundColor","#303030"):o("#SOHUCS #SOHU_MAIN").css("backgroundColor","#FFF"),o('div[node-type="head-img-ie-mask"]').css("display","block"),o('div[node-type="user"]').addClass("user-wrap-w-ie"),o('div[node-type="header-login"]').addClass("header-login-ie")}!function(){var e=t.getAppid(),o=t.getUUID(),n=t.getTopicId(),a=t.getCategoryId(),s=t.getConfig("api")+"stat/uvstat?uuid="+o+"&client_id="+e+"&category_id="+a+"&topic_id="+n+"&t="+ +new Date,i=window.document.createElement("img");i.setAttribute("src",s)}()}(),function(){var e=o('span[node-type="participation-wrapper"]');"false"===t.getBeConfig("show_participation")&&e.hide()}(),function(){var e=o('div[node-type="user"]');e.hover(function(){o(this).addClass("user-wrap-e")},function(){o(this).removeClass("user-wrap-e")})}(),function(){var e=o('div[node-type="login-select"]');e.delegate("div.login-wrap-w","click",function(){t.log("cbox-login-click");var e=o(this).attr("label");switch(e){case"":t.login(14);break;case"sohu":t.login(11);break;case"weibo":t.login(2);break;case"qq":t.login(3);break;case"phone":t.login(15);break;default:return}})}(),function(){var e=o('div[node-type="cy-logout-btn"]');e.on("click",function(){t.logout()})}(),function(){var e;o("#SOHUCS").on("click","#jump-to-kz",function(){e&&window.open(e),setTimeout(function(){e=null},1e3)}),t.event.listen("changyan:cmt-header:jump-kz",function(t){e=t,o("#jump-to-kz").trigger("click")})}(),function(){t.event.register("cmt-header","click-avatar"),t.event.register("cmt-header","click-mycyan");var e=o("#SOHUCS #SOHU_MAIN div.module-cmt-header");e.delegate('#SOHUCS #SOHU_MAIN div[node-type="avatar"]',"click",function(e){e.preventDefault(),t.event.trigger("changyan:cmt-header:click-avatar",e),t.getUserInfo(function(e){e&&e.user_id&&t.log("user-avatar-click")})}),e.delegate('#SOHUCS #SOHU_MAIN a[node-type="my-changyan"]',"click",function(e){e.preventDefault(),t.event.trigger("changyan:cmt-header:click-mycyan",e),t.getUserInfo(function(e){e&&e.user_id&&t.log("user-mychangyan-click")})}),e.delegate('div[node-type="header-login"]',"click",function(){t.openLoginDialog()})}(),function(){var e=o('div[node-type="user"]'),n=o('img[node-type="user-head"]'),a=o('span[node-type="user-name"]');t.event.listen("changyan:login",function(){screen.width>=800?t.log("user-login-pc"):t.log("user-login-wap"),t.getUserInfo(function(t){e.show(),o('div[node-type="login-btn"]').hide(),a.text(t.nickname+"："),e.addClass("user-login"),o('div[node-type="block-head-w" ]').addClass("block-head-login"),n.attr("src",t.img_url);var s=parseInt(e.outerWidth(),10),i=parseInt(o('div[node-type="post-wrap-border-t-l"]').outerWidth(),10);o('div[node-type="post-wrap-border-t-r"]').css("marginLeft",i+s+"px")})});var s=function(){var a=o('div[node-type="login-btn"]');t.event.listen("changyan:logout",function(){e.hide(),e.removeClass("user-login"),o('div[node-type="block-head-w" ]').removeClass("block-head-login"),n.attr("src",t.getConfig("protocol")+"assets.changyan.sohu.com/upload/asset/scs/images/pic/pic42_null.gif"),a.show();var s=(parseInt(e.outerWidth(),10),parseInt(o('div[node-type="post-wrap-border-t-l"]').outerWidth(),10));o('div[node-type="post-wrap-border-t-r"]').css("marginLeft",s+"px")})};try{s()}catch(i){}t.getUserInfo(function(t){t&&t.user_id&&(e.show(),o('div[node-type="login-btn"]').hide(),a.text(t.nickname+"："),e.addClass("user-login"),o('div[node-type="block-head-w" ]').addClass("block-head-login"),n.attr("src",t.img_url))})}(),function(){var n=o('div[node-type="user"]'),a=function(){t.getUserInfo(function(n){var a=e("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/change-password.js");n&&15===n.platform_id&&o.ajax({type:"GET",url:t.getConfig("api")+"api/2/user/get_phone",cache:!1,dataType:"jsonp",success:function(e){0===e.error_code?a.menuItem(e.error_msg):a.menuItem("手机号获取失败")}})})};a(),t.event.listen("changyan:login",function(){a()}),t.event.listen("changyan:logout",function(){n.find('a[node-type="change-password"]').remove()})}(),e("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/piece.js"),function(){var e=o(window),n=o("#SOHUCS #SOHU_MAIN"),a=!1;e.on("scroll",function(){var o=parseInt(n.offset().top,10)-parseInt(e.height(),10)+80;e.scrollTop()>=o&&(a||e.scrollTop()>=o&&(t.log("cy-real-view"),a=!0))}),e.trigger("scroll")}()})}),define("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/cmt-header.css",function(e,t,o){var n=decodeURIComponent("%23SOHUCS%20%23SOHU_MAIN%20.cy-hidden%7Bdisplay%3Anone%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%7Bposition%3Arelative%3Bwidth%3A100%25%3Bheight%3A60px%3Bz-index%3A10%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20div.cy-skin%7Bfloat%3Aright%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.head-img-w%7Bwidth%3A42px%3Bheight%3A42px%3Bposition%3Aabsolute%3Bleft%3A9px%3Btop%3A22px%3Bdisplay%3Anone%3Bz-index%3A11%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.head-img-w%20.cy-logout-btn%7Bwidth%3A42px%3Bheight%3A42px%3Bposition%3Aabsolute%3Btop%3A0%3Bleft%3A0%3Bfont-size%3A14px%3Bcolor%3A%234398ed%3Btext-align%3Acenter%3Bline-height%3A42px%3Bfont-family%3A%22Microsoft%20YaHei%22%3Bdisplay%3Anone%3Bcursor%3Apointer%3Bbackground-image%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Fcmt-header%2F062%2Fimages%2Flogout-mask.png)%3Bbackground-repeat%3Ano-repeat%3Bbackground-position%3Acenter%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.head-img-w%3Ahover%20.cy-logout-btn%7Bdisplay%3Ablock%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.head-img-ie-mask%7Bwidth%3A42px%3Bheight%3A46px%3Bbackground%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Fcmt-header%2F062%2Fimages%2Fphoto-mask.png)%3Bposition%3Aabsolute%3Bz-index%3A2%3Btop%3A0%3Bleft%3A0%3Bdisplay%3Anone%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-login%20.head-img-w%7Bdisplay%3Ablock%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.head-img-w%20img%7Bborder-radius%3A42px%3Bdisplay%3Ablock%3Bwidth%3A42px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.header-login%7Bwidth%3A40px%3Bheight%3A40px%3Bborder-radius%3A42px%3Bborder%3A1px%20solid%20%234398ed%3Bposition%3Aabsolute%3Btop%3A22px%3Bleft%3A9px%3Bfont-size%3A14px%3Bcolor%3A%234398ed%3Btext-align%3Acenter%3Bline-height%3A42px!important%3Bfont-family%3A%22Microsoft%20YaHei%22%3Bcursor%3Apointer%3Bbackground%3A0%200%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.header-login-ie%7Bwidth%3A42px%3Bheight%3A46px%3Bborder%3A0%3Bbackground%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Fcmt-header%2F062%2Fimages%2Fphoto-mask.png)%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-login%20.header-login%7Bdisplay%3Anone%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-title-w%20.title-user-w%20.user-wrap-w%7Bposition%3Aabsolute%3Btop%3A52px%3Bleft%3A55px%3Btext-indent%3A11px%3Bz-index%3A10%3Bpadding-right%3A10px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-title-w%20.title-user-w%20.user-wrap-w-ie%7Bbackground%3A%23fff%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-title-w%20.title-user-w%20.user-wrap-w%20.wrap-name-w%7Bfont-size%3A16px%3Bcolor%3A%234398ed%3Bfont-family%3A%22Microsoft%20YaHei%22%3Bposition%3Arelative%3Bz-index%3A2%3B*text-indent%3A11px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-title-w%7Bposition%3Arelative%3Bz-index%3A12%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-comment-empty-w%20.empty-prompt-w%7Bmargin-top%3A20px%3Bheight%3A30px%3Bbackground%3A%23f0f0f0%3Btext-align%3Acenter%3Bopacity%3A.5%3Bfilter%3Aalpha(opacity%3D50)%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-comment-empty-w%20.empty-prompt-w%20.prompt-null-w%7Bline-height%3A30px%3Bfont-size%3A12px%3Bcolor%3A%23999%3Btext-align%3Acenter%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-comment-kuaizhan-w%20.kuaizhan-prompt-w%7Bcursor%3Apointer%3Bdisplay%3Anone%3Bmargin-top%3A20px%3Bheight%3A30px%3Bbackground%3A%23f0f0f0%3Btext-align%3Acenter%3Bopacity%3A.5%3Bfilter%3Aalpha(opacity%3D50)%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-comment-kuaizhan-w%20.kuanzhan-prompt-w%20.prompt-text-w%7Bline-height%3A30px%3Bfont-size%3A12px%3Bcolor%3A%23999%3Btext-align%3Acenter%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-close-comment-w%20.close-comment-prompt-w%7Bmargin-top%3A20px%3Bheight%3A30px%3Btext-align%3Acenter%3Bbackground%3A%23fdeced%3Bopacity%3A.5%3Bfilter%3Aalpha(opacity%3D50)%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-close-comment-w%20.close-comment-prompt-w%20.close-comment-prompt%7Bline-height%3A30px%3Btext-align%3Acenter%3Bfont-size%3A12px%3Bcolor%3A%23e74851%7D"),a=window.document,s=a.createElement("style");s.id="seaJs-css",s.setAttribute("type","text/css");var i=a.getElementById("seaJs-css");i?a.all?i.styleSheet.cssText+=n:i.textContent+=n:a.all?(s.styleSheet.cssText=n,a.getElementsByTagName("head").item(0).appendChild(s)):(s.innerHTML=n,a.getElementsByTagName("head").item(0).appendChild(s))}),define("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/cmt-header.html.js",function(e,t,o){"use strict";var n;return n=[],n.push('<div class="module-cmt-header">'),n.push('    <div class="cy-hidden">'),n.push('        <button id="jump-to-kz"></button>'),n.push("    </div>"),n.push('    <div class="clear-g section-title-w">'),n.push('        <div class="title-user-w">'),n.push('            <div node-type="user" class="clear-g user-wrap-w">'),n.push('                <span node-type="user-name" class="wrap-name-w"></span>'),n.push("            </div>"),n.push("        </div>"),n.push("    </div>"),n.push('    <div class="section-cbox-w">'),n.push('        <div class="cbox-block-w clear-g">'),n.push('            <div node-type="block-head-w" class="block-head-w">'),n.push('                <div node-type="avatar" class="head-img-w">'),n.push('                    <a href="javascript:void(0);">'),n.push('                        <img node-type="user-head" src="https://changyan.sohu.com/upload/asset/scs/images/pic/pic42_null.gif" width="42" height="42" alt=""/>'),n.push('                        <div node-type="head-img-ie-mask" class="head-img-ie-mask"></div>'),n.push("                    </a>"),n.push("                    #if ($personal_page == 'false')"),n.push('                    <div node-type="cy-logout-btn" class="cy-logout-btn">退出</div>'),n.push("                    #end"),n.push("                </div>"),n.push('                <div node-type="header-login" class="header-login">登录</div>'),n.push("            </div>"),n.push('            <div node-type="login-select" class="block-post-w">'),n.push("                <!-- 放置cbox初始状态 -->"),n.push('                <div node-type="post-default" class="post-default-w">'),n.push('                    <!-- <div class="clear-g default-wrap-w">'),n.push('                        <span node-type="comment-notice" class="wrap-text-f" style="cursor:text">有事没事说两句...</span>'),n.push('                        <button id="testD" class="btn-fw btn-bf ">发布</button>'),n.push("                    </div> -->"),n.push("                </div>"),n.push("                <!-- 放置cbox发布状态 -->"),n.push("                <!-- 提示条 -->"),n.push("                <!-- 零评论提示条 -->"),n.push('                <div class="list-comment-empty-w">'),n.push('                    <div node-type="empty-prompt" class="empty-prompt-w">'),n.push('                        <span class="prompt-null-w">还没有评论，快来抢沙发吧！</span>'),n.push("                    </div>"),n.push("                </div>"),n.push("                <!-- 提示连接到快站社区 -->"),n.push('                <div class="list-comment-kuaizhan-w">'),n.push('                    <div node-type="kuaizhan-prompt" class="kuaizhan-prompt-w">'),n.push('                        <span class="prompt-text-w">点击查看更多精彩内容</span>'),n.push("                    </div>"),n.push("                </div>"),n.push("                <!--关闭评论-->"),n.push('                <div class="list-close-comment-w">'),n.push('                    <div node-type="close-comment-prompt" class="close-comment-prompt-w">'),n.push('                        <span class="close-comment-prompt">该评论已关闭！</span>'),n.push("                    </div>"),n.push("                </div>"),n.push("            </div>"),n.push("        </div>"),n.push("    </div>"),n.push("</div>"),n.join("\n")}),define("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/change-password.js",function(e,t,o){window.changyan.api.ready(function(t){var n=t.util.jquery,a=(t.util._,t.util.velocityjs),s=t.util.dialog,i=e("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/change-password.html.js"),p=e("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/json2.js"),r={loadJs:function(e,t){var o=document.getElementsByTagName("head")[0]||document.head||document.documentElement,n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("charset","UTF-8"),n.setAttribute("src",e),"function"==typeof t&&(window.attachEvent?n.onreadystatechange=function(){var e=n.readyState;"loaded"!==e&&"complete"!==e||(n.onreadystatechange=null,t())}:n.onload=t),o.appendChild(n)},queryObject:function(e){if("object"==typeof e){var t,o="";for(t in e)o+=""===o?t+"="+window.decodeURIComponent(e[t]):"&"+t+"="+window.decodeURIComponent(e[t]);return o}}},d={menuItem:function(e){var t=this,o=n('div[node-type="user"]'),a='<a href="javascript:void(0);" node-type="change-password"><i class="gap-w">修改密码</i></a>';o.find('a[node-type="my-changyan"]').after(a),o.delegate('a[node-type="change-password"]',"click",function(){t.render(e)})},render:function(e){var t=this,o=a.render(i,{phoneNum:e});s.show(o),n('a[node-type="close-dialog"], button[node-type="cancel"]').click(function(){t.close()}),n('button[node-type="change"]').click(function(){t.checkPassword(function(){t.submit(e)})})},close:function(){s.close()},submit:function(e){function o(){n.ajax({cache:!1,url:c,type:"POST",data:l,xhrFields:{withCredentials:!0},success:function(e){0===e.error_code?(alert("修改成功"),a.close()):n('div[node-type="origin-password-prompt"]').css("visibility","visible")}})}var a=this,s=n.browser.version,e=e,i=n('div[node-type="change-password-wrapper"] input[node-type="origin-password"]').val(),d=n('div[node-type="change-password-wrapper"] input[node-type="password"]').val(),c="https://changyan.sohu.com/api/2/user/modify_passwd",l={mobile:e,old_passwd:i,new_passwd:d};"7.0"===s||"8.0"===s||"9.0"===s?window.iframeCrossDomain?window.iframeCrossDomain.post("https:",c,r.queryObject(l),function(e){var e=p.parse(p.parse(e).xhr.responseText);0===e.error_code?(alert("修改成功"),a.close()):n('div[node-type="origin-password-prompt"]').css("visibility","visible")}):r.loadJs(t.getConfig("base")+"mdevp/extensions/cross-domain/003/cross-domain.js",function(){window.iframeCrossDomain.post("https:",c,r.queryObject(l),function(e){var e=p.parse(p.parse(e).xhr.responseText);0===e.error_code?(alert("修改成功"),a.close()):n('div[node-type="origin-password-prompt"]').css("visibility","visible")})}):o()},checkPassword:function(e){var t=n('div[node-type="change-password-wrapper"] input[node-type="origin-password"]'),o=n('div[node-type="change-password-wrapper"] input[node-type="password"]'),a=n('div[node-type="change-password-wrapper"] input[node-type="password-again"]');if(""===t.val())n('div[node-type="origin-password-prompt"]').css("visibility","visible");else{if(o.val().length<6)return n('div[node-type="origin-password-prompt"]').css("visibility","hidden"),n('div[node-type="password-prompt"]').css("visibility","visible"),!1;if(o.val()!==a.val())return n('div[node-type="origin-password-prompt"]').css("visibility","hidden"),n('div[node-type="password-prompt"]').css("visibility","hidden"),n('div[node-type="password-again-prompt"]').css("visibility","visible"),!1}e()}};o.exports=d})}),define("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/change-password.html.js",function(e,t,o){"use strict";var n;return n=[],n.push('<div node-type="change-password-wrapper" class="change-password-wrapper-dw">'),n.push('    <div class="clear-g changyan-change-password-header">'),n.push('        <span class="changyan-change-password-close">'),n.push('            <a href="javascript:void(0)" node-type="close-dialog" class="changyan-change-password-closeIcon"></a>'),n.push("        </span>"),n.push('        <strong class="changyan-change-password-title">修改密码</strong>'),n.push("    </div>"),n.push('    <div class="clear-g cont-form-dw">'),n.push('        <span class="form-name-dw">手机号</span>'),n.push('        <div class="clear-g form-action-dw">'),n.push('            <input type="text" class="action-text-dfw" disabled="disabled" value="$!{phoneNum}" name="">'),n.push("        </div>"),n.push("    </div>"),n.push('    <div class="cont-prompt-dw"><span class="prompt-word-bd">您输入的手机号不正确</span></div>'),n.push('    <div class="clear-g cont-password-dw">'),n.push('        <span class="password-name-dw">原密码</span>'),n.push('        <div class="clear-g password-action-dw">'),n.push('            <input node-type="origin-password" type="password" class="action-text-dfw" value="" name="">'),n.push("        </div>"),n.push("    </div>"),n.push('    <div node-type="origin-password-prompt" class="cont-prompt-dw"><span class="prompt-word-bd">原密码不正确</span></div>'),n.push('    <div class="clear-g cont-password-dw">'),n.push('        <span class="password-name-dw">新密码</span>'),n.push('        <div class="clear-g password-action-dw">'),n.push('            <input node-type="password" type="password" class="action-text-dfw" value="" name="">'),n.push("        </div>"),n.push("    </div>"),n.push('    <div node-type="password-prompt" class="cont-prompt-dw"><span class="prompt-word-bd">密码不能少于6位</span></div>'),n.push('    <div class="clear-g cont-password-dw">'),n.push('        <span class="password-name-dw">确认密码</span>'),n.push('        <div class="clear-g password-action-dw">'),n.push('            <input node-type="password-again" type="password" class="action-text-dfw" value="" name="">'),n.push("        </div>"),n.push("    </div>"),n.push('    <div node-type="password-again-prompt" class="cont-prompt-dw"><span class="prompt-word-bd">密码前后输入不一致</span></div>'),n.push('    <div class="cont-btn-dw">'),n.push('        <a href="javascript:void(0)"><button node-type="change" class="btn-dfw btn-bdf"></button></a>&nbsp;<a href="javascript:void(0)"><button node-type="cancel" class="btn-dfw btn-cancel"></button></a>'),n.push("    </div>"),n.push("</div>"),n.join("\n")}),define("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/json2.js",function(require,exports,module){var JSON;JSON||(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var o,n,a,s,i,p=gap,r=t[e];switch(r&&"object"==typeof r&&"function"==typeof r.toJSON&&(r=r.toJSON(e)),"function"==typeof rep&&(r=rep.call(t,e,r)),typeof r){case"string":return quote(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(r)){for(s=r.length,o=0;s>o;o+=1)i[o]=str(o,r)||"null";return a=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+p+"]":"["+i.join(",")+"]",gap=p,a}if(rep&&"object"==typeof rep)for(s=rep.length,o=0;s>o;o+=1)"string"==typeof rep[o]&&(n=rep[o],a=str(n,r),a&&i.push(quote(n)+(gap?": ":":")+a));else for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a=str(n,r),a&&i.push(quote(n)+(gap?": ":":")+a));return a=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+p+"}":"{"+i.join(",")+"}",gap=p,a}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,o){var n;if(gap="",indent="","number"==typeof o)for(n=0;o>n;n+=1)indent+=" ";else"string"==typeof o&&(indent=o);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var o,n,a=e[t];if(a&&"object"==typeof a)for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n=walk(a,o),void 0!==n?a[o]=n:delete a[o]);return reviver.call(e,t,a)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),module.exports=JSON}),define("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/piece.js",function(e,t,o){window.changyan.api.ready(function(e){var t=e.util.jquery,o=t("#SOHUCS #SOHU_MAIN div.module-cmt-header");o.find('span[node-type="comment-notice"]').html(e.getBeConfig("comment_notice")),o.find('div[node-type="join-wrap"] .wrap-name-w').html(e.getBeConfig("cyan_title")),e.getCommentNum()||0===e.getIsvAuditMode()?o.find('div[node-type="empty-prompt"]').remove():1!=e.getBeConfig("forum_redirect_open")&&2!=e.getBeConfig("forum_redirect_open")||(o.find('div[node-type="empty-prompt"]').remove(),o.find('div[node-type="kuaizhan-prompt"]').css("display","block"),o.find('div[node-type="kuaizhan-prompt"]').on("click",function(){e.getUserInfo(function(o){t.ajax({url:"http://changyan.sohu.com/api/3/user/redirectKuaizhan",data:{client_id:e.getFeConfig("appid"),topic_id:e.getTopicId(),type:"loadMore",plat:"pc",platform_id:o.platform_id},dataType:"jsonp",success:function(t){t.url&&e.event.trigger("changyan:cmt-header:jump-kz",t.url)},error:function(){}})})})),3!==e.getCommentMode()&&0!==e.getIsvAuditMode()&&o.find('div[node-type="close-comment-prompt"]').remove(),o.find('em[node-type="participation-number"]').html(e.getParticipationNum()),o.find('em[node-type="comment-number"]').html(e.getCommentNum()),e.getBeConfig("show_participation")||o.find('em[node-type="participation-number"]').parent().remove();var n=e.event.register("cmt-header","box-click");o.find('span[node-type="comment-notice"]').click(function(t){e.event.trigger(n,t)}),e.event.listen("changyan:submit",function(t){var n=o.find('em[node-type="comment-number"]'),a=o.find('em[node-type="participation-number"]');n.html(e.getCommentNum()),a.html(e.getParticipationNum())}),e.event.listen("changyan:submit",function(e){var t=o.find('div[node-type="empty-prompt"]');t.hide()})})}),run("C:/Users/haoyan/AppData/Roaming/npm/node_modules/mdevp/cache/www/cmt-header/cmt-header.js")}();